from os import stat
from fastapi import FastAPI
from fastapi import Request, status, Response
import uvicorn
from word_counter import WordCounter
from exceptions import *
from json_patterns import *

app = FastAPI()

word_counter = WordCounter()

def word_validity(word_json):
    word = word_json.get("word", None)
    if word is None:
        raise JsonFormatError(1)
    if " " in word:
        raise WordError(0)


@app.get('/')
def root():
    return sanity_check()

@app.get('/word_counter/')
def get_count(word):
    return count_pattern(word_counter.count(word))

@app.post('/word_counter/word/', status_code=status.HTTP_201_CREATED)
async def add_word(request: Request, response: Response):
    new_word = await request.json()
    try:
        word_validity(new_word)
    except (JsonFormatError, WordError) as e:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return error_pattern(str(e))
    count = word_counter.add_word(new_word["word"])
    return {"text": f'Added {new_word["word"]}', "currentCount": count }

@app.post('/word_counter/sentence/', status_code=status.HTTP_201_CREATED)
async def add_sentence(request: Request):
    new_sentence = await request.json()
    numNewWords, numOldWords = word_counter.add_sentence(new_sentence["sentence"])
    return {"text": f"Added {numNewWords} words, {numOldWords} already existed", "currentCount": -1}

@app.delete('/word_counter/')
async def delete_word(word):
        return {"count": word_counter.delete(word)}


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000,reload=True)



# TODO: dealing with bad inputs
# TODO: tamplate of json returns
# TODO: complex sentences.
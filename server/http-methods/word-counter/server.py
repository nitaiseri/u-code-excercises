from fastapi import FastAPI
from fastapi import Request
import uvicorn
from word_counter import WordCounter

app = FastAPI()

word_counter = WordCounter()

@app.get('/')
def root():
    return {"message":"Server is up and running"}

@app.get('/count/')
def get_count(word):
    return {"count": word_counter.count(word)}

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000,reload=True)
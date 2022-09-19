from fastapi import FastAPI
from fastapi import Request
import uvicorn

app = FastAPI()

id_counter = 1
wonders = [
    {
        "ID":1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]

@app.get('/')
def root():
    return {"message":"Server is up and running"}

@app.get('/wonder/')
def get_wonder(id):
    for wonder in wonders:
        if wonder["ID"] == int(id):
            return wonder
    return "There is no such ID."

@app.post('/wonders',status_code=201)
async def create_wonder(request: Request):
    new_wonder = await request.json()
    global id_counter 
    id_counter+=1
    new_wonder["ID"] = id_counter
    wonders.append(new_wonder)
    return "Created"

@app.put('/wonders')
async def modify_wonder(request: Request):
    new_wonder = await request.json()
    for i, wonder in enumerate(wonders):
        if wonder["ID"] == new_wonder["ID"]:
            wonders[i] = new_wonder
            return "appdated"
    return "Id doesnt exist"

@app.delete('/wonder/')
async def modify_wonder(id):
    for i, wonder in enumerate(wonders):
        if wonder["ID"] == int(id):
            del wonders[i]
            return "deleted"
    return "Id doesnt exist"

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000,reload=True)
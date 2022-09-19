from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
import requests



app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get('/')
def root():
    return FileResponse('./static/download.jpeg')

@app.get("/book/{name}")
async def get_book(name):
    res = requests.get('https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()

@app.get('/')
def root():
    return {"message":"Someone has made a request and accessed the server. Exciting!"}


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"

@app.get("/landing/{username}")
async def greet_user(username):
    return {"message":"Hi there {}".format(username)}

@app.get("/optionalParameters/")
async def query_params(name):
    return {"message":"Hi there {}".format(name)}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000,reload=True)
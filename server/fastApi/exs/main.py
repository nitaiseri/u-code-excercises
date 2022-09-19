from re import S
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
import json
import requests
from store import store

### CONSTS ###
FAILORE = 0
SUCCESS = 1

app = FastAPI()

app.mount("/static", StaticFiles(directory="server/fastApi/exs/static"), name="static")

@app.get('/sanity')
def sanity():
    return "Server is up and running smoothly"

def get_item_index(name):
    for i, item in enumerate(store):
        if item["name"] == name:
            return i
    return -1

@app.get("/store/{name}")
async def get_price(name):
    item_index = get_item_index(name)
    if item_index >= 0:
        return store[item_index].get("price")
    return None

@app.get("/store/count/{name}")
async def get_count(name):
    item_index = get_item_index(name)
    if item_index >= 0:
        return store[item_index]["inventory"]
    return None

@app.get("/store/buy/{name}")
async def buy(name):
    item_index = get_item_index(name)
    if item_index >= 0:
        store[item_index]["inventory"] -= 1
        return SUCCESS
    return FAILORE

@app.get("/store/sale/")
async def buy(admin):
    admin = (admin == 'true')
    if not admin:
        return
    for item in store:
        if item["inventory"] > 10:
            item["price"] *= 0.5
    

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000,reload=True)
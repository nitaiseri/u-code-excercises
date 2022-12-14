from typing import Tuple, List
import uvicorn
from fastapi import FastAPI
from starlette.requests import Request
from starlette.authentication import requires
from fastapi_auth_middleware import AuthMiddleware, FastAPIUser

# The method you have to provide
def verify_authorization_header(auth_header: str) -> Tuple[List[str], FastAPIUser]:
    user = FastAPIUser(first_name="Code", last_name="Specialist", user_id=2)  # Usually you would decode the JWT here and verify its signature to extract the 'sub'
    scopes = ['Nit', 'standard']  # You could for instance use the scopes provided in the JWT or request them by looking up the scopes with the 'sub' somewhere
    return scopes, user

app = FastAPI()

app.add_middleware(AuthMiddleware, verify_header=verify_authorization_header)

@app.get('/')  # Sample endpoint (secured)
@requires('Nit')
def home(request: Request):
    return request.user

@app.get('/profile') 
@requires('standard')
def home(request: Request):
    return request.user


if __name__ == '__main__':
    uvicorn.run('exercise_1:app', host="127.0.0.1", port=8000)  # Starts the uvicorn ASGI
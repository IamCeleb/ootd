from fastapi import FastAPI
# from pydantic import BaseModel
# from typing import Union, Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        # "http://localhost",
        # "http://localhost:8000",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/hello")
async def hello():
    return {"Hello": "World"}

@app.get("/test")
def test():
    return {"Key": "Value"}


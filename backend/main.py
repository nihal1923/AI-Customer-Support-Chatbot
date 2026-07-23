from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from chatbot import ask_question

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Welcome to AI Customer Support Chatbot"
    }

@app.get("/chat")
def chat(question: str):
    try:
        answer = ask_question(question)
        return {
            "response": answer
        }
    except Exception as e:
        return {
            "error": str(e)
        }
# 🤖 AI Customer Support Chatbot

An AI-powered Customer Support Chatbot built using **React, FastAPI, LangChain, ChromaDB, and Google Gemini**. The chatbot answers user queries based on company documents using Retrieval-Augmented Generation (RAG), providing accurate and context-aware responses.

---

## 📌 Features

- AI-powered customer support chatbot
- Retrieval-Augmented Generation (RAG)
- Semantic document search using ChromaDB
- FastAPI backend for handling API requests
- React frontend with a clean user interface
- Google Gemini LLM integration
- Easy to extend with new company documents

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript

### Backend
- Python
- FastAPI
- LangChain
- ChromaDB
- Google Gemini API
- Sentence Transformers

---

## 📂 Project Structure

```
AI-Customer-Support-Chatbot/
│
├── backend/
│   ├── data/
│   ├── chatbot.py
│   ├── config.py
│   ├── main.py
│   ├── rag.py
│   └── vectorstore.py
│
├── frontend/
│
├── requirements.txt
└── README.md
```

---

## 🚀 How It Works

1. Company documents are stored in the **data** folder.
2. Documents are converted into embeddings using LangChain.
3. ChromaDB stores the document vectors.
4. When a user asks a question, the chatbot retrieves the most relevant document chunks.
5. Google Gemini generates a response using the retrieved context.
6. The answer is displayed on the React frontend.

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/AI-Customer-Support-Chatbot.git
```

### Move into the Project

```bash
cd AI-Customer-Support-Chatbot
```

### Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### Create a `.env` File

```env
GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
```

### Run the Backend

```bash
uvicorn main:app --reload
```

### Run the Frontend

```bash
npm install
npm start
```

---

## 📷 Screenshots

Add screenshots of:

- Home Page
- Chat Interface
- AI Response
- Backend Running

---

## 💡 Future Improvements

- Voice-based interaction
- Multi-language support
- Chat history
- User authentication
- Admin dashboard
- Support for PDF, DOCX, and TXT documents

---

## 🎯 Learning Outcomes

This project helped me understand:

- Retrieval-Augmented Generation (RAG)
- Large Language Models (LLMs)
- LangChain
- Vector Databases
- Prompt Engineering
- FastAPI
- React Integration
- REST APIs

---

## 👨‍💻 Author

**Nihal**

If you found this project useful, feel free to ⭐ the repository.

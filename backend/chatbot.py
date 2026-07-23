from langchain_ollama import ChatOllama
from rag import retrieve_context

llm = ChatOllama(model="llama3.1")

# Stores conversation history
conversation_history = []


def ask_question(question):

    # Get relevant context from ChromaDB
    context = retrieve_context(question)

    # Build previous conversation
    history = ""

    for user_msg, bot_msg in conversation_history:
        history += f"User: {user_msg}\n"
        history += f"Assistant: {bot_msg}\n"

    prompt = f"""
You are TechNova's AI Customer Support Assistant.

Use ONLY the information provided in the company documents.

If the answer is not available in the documents, reply exactly:

"I couldn't find that information in the company documents."

Previous Conversation:
{history}

Company Documents:
{context}

Customer Question:
{question}

Answer:
"""

    response = llm.invoke(prompt)

    # Save conversation
    conversation_history.append((question, response.content))

    # Keep only the last 5 conversations
    if len(conversation_history) > 5:
        conversation_history.pop(0)

    return response.content
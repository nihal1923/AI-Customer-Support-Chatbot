from langchain_chroma import Chroma
from langchain_ollama import OllamaEmbeddings

embeddings = OllamaEmbeddings(
    model="nomic-embed-text"
)

db = Chroma(
    persist_directory="chroma_db",
    embedding_function=embeddings
)

retriever = db.as_retriever(search_kwargs={"k": 3})


def retrieve_context(question):
    docs = retriever.invoke(question)

    context = "\n\n".join([doc.page_content for doc in docs])

    return context
from langchain_community.document_loaders import PyPDFDirectoryLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_ollama import OllamaEmbeddings
from langchain_chroma import Chroma


# Load PDFs
loader = PyPDFDirectoryLoader("data")
documents = loader.load()

print("Documents loaded:", len(documents))


# Split documents into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100
)

docs = text_splitter.split_documents(documents)

print("Chunks created:", len(docs))


# Create embeddings
embeddings = OllamaEmbeddings(
    model="nomic-embed-text"
)


# Store in ChromaDB
db = Chroma.from_documents(
    documents=docs,
    embedding=embeddings,
    persist_directory="chroma_db"
)


print("Vector Database Created Successfully!")
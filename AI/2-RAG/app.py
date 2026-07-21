from fastapi import FastAPI, UploadFile, File
import shutil
from PyPDF2 import PdfReader

app = FastAPI()

@app.get("/")

def home():
    return{
        "message":"Welcome to RAG again"
    }

@app.get("/about")

def home():
    return{
        "message":"This is the content for the about"
    }

@app.get("/contact")

def contact():
    return{
        "message":"This is the contact function"
    }

@app.post("/upload")

def upload_pdf(file:UploadFile = File(...)):
    file_path = f"uploads/{file.filename}"  #The "f" is the string character to prevent mismatch

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

        return{
            "message":"PDF uploaded successfully",
            "filename":file.filename
        }
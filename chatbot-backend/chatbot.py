import os
import re
from dotenv import load_dotenv # type: ignore 
from langchain_core.prompts import ChatPromptTemplate # type: ignore 
from langchain_core.output_parsers import StrOutputParser # type: ignore 
from langchain_community.llms import ollama # type: ignore 

# Load environment variables from .env file
load_dotenv(dotenv_path=".env")

openai_api_key = os.getenv("OPENAI_API_KEY")
langchai_api_key = os.getenv("LANGCHAIN_API_KEY")

if not openai_api_key:
    raise ValueError("OPENAI_API_KEY is not set. Please set it in your .env file.")
if not langchai_api_key:
    raise ValueError("LANGCHAI_API_KEY is not set. Please set it in your .env file.")

os.environ["OPENAI_API_KEY"] = openai_api_key
os.environ["LANGCHAIN_API_KEY"] = langchai_api_key
os.environ["LANGCHAIN_TRACING_V2"] = "true"


prompt = ChatPromptTemplate.from_messages(
    [
        ("system", "You are a helpful assistant. Please respond to the user queries"),
        ("user", "Question: {question}")
    ]
)


def custom_responses(question):
    question_lower = question.lower()

    if "ceo" in question_lower or "founder" in question_lower:
        return ("Tanishq Sharma is a tech entrepreneur and the founder of ANTI AI, "
                "a company dedicated to safeguarding the world from the potential dangers of AGI.")

    if "motto" in question_lower:
        return "अन्ते सत्यं विजयते।"

    if "full form" in question_lower:
        return ("A - ARTIFICIAL\nN - NUANCES\nT - TACTICAL\nI - INFILTRATION\nAI - ARTIFICIAL INTELLIGENCE\n")

    if "vision" in question_lower or "mission" in question_lower:
        return ("Our mission is to protect and empower by managing the infiltration of artificial intelligence.")

    if "contact" in question_lower:
        return ("You can reach the Anti AI team by:\n"
                "Call Us: +91 9116665513\n"
                "Email: support@antiai.ltd")

    if "founded" in question_lower or "founder" in question_lower:
        return "Anti AI was founded in 2024 by Tanishq Sharma."

    if "team size" in question_lower:
        return "We have a team of 10-50 members."

    if "working hours" in question_lower:
        return "Our working hours are Monday-Saturday, 10 am - 7 pm."

    if "specialities" in question_lower:
        return "Our specialities include Uniqueness, Growth, and Goal-Oriented Software."

    if "headquarters" in question_lower:
        return "Our headquarters are located in Jaipur, Rajasthan, India."

    if "product" in question_lower:
        if "anti.q" in question_lower:
            return ("ANTI.Q is our flagship music player, designed to revive the charm of retro entertainment.")
        if "anti.0" in question_lower:
            return ("ANTI.0 is our pioneering Anti AI Software, specifically crafted to combat AI influence.")
        if "anti.1" in question_lower:
            return ("ANTI.1 is a Concept AI Project, aimed at disrupting the AI industry with a novel approach.")

    if "services" in question_lower:
        if "ai" in question_lower:
            return "Our AI services include chatbots, voice assistants, and AI sales bots."
        if "web" in question_lower:
            return "Our Web services include end-to-end website and app development solutions."
        if "devops" in question_lower:
            return "Our DevOps services streamline development and deployment processes."
        if "cloud" in question_lower:
            return "Our Cloud services ensure scalability and reliability for your infrastructure."

    return None  


def replace_mistral_with_anti(response_text):

    modified_response = re.sub(r'\bGemma\b', 'Anti AI Chatbot', response_text)
    modified_response = re.sub(r'Paris, France', 'Jaipur, Rajasthan, India', modified_response)
    return modified_response


def Chatbot():
    try:
 
        llm = ollama.Ollama(model="gemma2:2b")
        output_parser = StrOutputParser()
        chain = prompt | llm | output_parser

        while True:

            user_input = input("Ask your question (or type 'exit' to quit): ")

            if user_input.lower() == "exit":
                print("Goodbye!")
                break

            custom_response = custom_responses(user_input)
            if custom_response:
                print("Response:", custom_response)
            else:

                prompt_text = prompt.format(question=user_input)
                response = chain.invoke({"question": user_input})
                
         
                modified_response = replace_mistral_with_anti(response)

                print("Response:", modified_response)

    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    Chatbot()


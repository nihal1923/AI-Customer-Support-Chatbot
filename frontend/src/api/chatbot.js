const API_URL = "http://127.0.0.1:8000";

export async function askChatbot(question) {

    const response = await fetch(
        `${API_URL}/chat?question=${encodeURIComponent(question)}`
    );

    const data = await response.json();

    return data.response;
}
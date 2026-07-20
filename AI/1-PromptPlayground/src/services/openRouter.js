import axios from "axios";

const API = import.meta.env.VITE_OPENROUTER_API_KEY;

export const askAI = async (message) => {
    try {
        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
            model: 'nvidia/nemotron-3-ultra-550b-a55b:free',
            messages: message
        },
            {
                headers: {
                    Authorization: `Bearer ${API}`,
                    'Content-Type': 'application/json',
                }
            }
        )
        // Extract the text content from the response and return it
        return response.data.choices[0].message.content;
    } catch (err) {
        console.error("OpenRouter API Error:", err);
        return null; // Return null so the store knows it failed
    }
}
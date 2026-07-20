import { create } from "zustand";
import { askAI } from "../services/openRouter";

// Pass 'get' as the second parameter so we can read the current state
const chatDataStore = create((set, get) => ({
    allChatMessages: [],

    addChatMessage: async (text) => {
        // 1. Format user message correctly (use 'content' instead of 'message')
        const userMessage = {
            role: "user",
            content: text
        };

        // 2. Immediately update the UI with the user's message
        set(state => ({
            allChatMessages: [...state.allChatMessages, userMessage]
        }));

        try {
            // 3. Get the updated array of messages to send to the API
            const currentMessages = get().allChatMessages;

            // 4. Await the API call OUTSIDE of the set() function
            const aiResponseText = await askAI(currentMessages);

            if (aiResponseText) {
                const aiMessage = {
                    role: "assistant", // The AI is always the 'assistant'
                    content: aiResponseText
                };

                // 5. Call set() again to append the AI's response
                set(state => ({
                    allChatMessages: [...state.allChatMessages, aiMessage]
                }));
            }
        } catch (error) {
            console.error("Error generating AI response:", error);
        }
    }
}));

export default chatDataStore;
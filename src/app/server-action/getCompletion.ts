"use server"

import OpenAI from "openai";
const oopenai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY
});

export interface IMessageHistory {
    role: "user" | "system",
    content:string
}

export async function getCompletion(
    messageHistory: IMessageHistory[]
){
    const response = await oopenai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messageHistory
    });

    const messages = [
        ...messageHistory,
        response.choices[0].message as unknown as IMessageHistory
    ];

    return { messages, };
}

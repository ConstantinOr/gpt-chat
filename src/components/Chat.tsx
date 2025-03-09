"use client"

import { useState } from "react"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { getCompletion } from "@/app/server-action/getCompletion";



interface Message {
    role: "user" | "system",
    content: string
}

export default function Chat(){
    const [messages, setMessages] = useState<Message[]>([]);
    const [message, setMessage] = useState("");

    const onClick = async () =>{
        console.log('Click');
        const completions = await getCompletion([
            ...messages,
            {
                role: "user",
                content: message
            }
        ])
        setMessage("");
        setMessages(completions.messages);       
    }
    return (
        <div>
            {messages.map((message, key)=>(
               <div 
               key={key}
               className={`mb-5 flex flex-col ${message.role === "user" ? "items-end"  : "items-start"}`}
               >               
               <div
               className={`${message.role === "user" ? "bg-blue-500" : "bg-gray-500"} rounded-md py-2 px-8`}
               >
                {message.content}    
               </div> 
               </div>
            ))}
         <div className="flex border-t-2 bordert-t-gray-500 pt-3 mt-5">
            <Input
               className="flex-grow text-xl"
               placeholder="Question"
               value={message}
               onChange={(e)=>setMessage(e.target.value)} 
               onKeyUp={(e)=>{
                if(e.key === "Enter"){
                    onClick();
                }
               }}
            />            
            <Button onClick={onClick} className="ml-3 text-xl">
                Send
            </Button>   
         </div>  
        </div>      
    )
       
}


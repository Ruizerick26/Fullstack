import { useEffect, useState } from "react";
import io from 'socket.io-client';

const Chat = () => {  
    const [mensaje, setMensaje] = useState("")
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const newSocket = io('http://localhost:3000')
        setSocket(newSocket)
        return () => {
            newSocket.disconnect();
        };
    }, []);

    const handleMensajeChat = () => { 
        if (socket) {
            socket.emit('enviar-mensaje-fron-back', mensaje);
        } 
    }

    return (
        <div className="flex flex-col justify-evenly h-screen ">
            <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                <div className="chat-message">
                    <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Hola paciente</span></div>
                        </div>
                        <img src="https://cdn-icons-png.flaticon.com/512/2934/2934749.png" alt="My profile" className="w-14 h-14 rounded-full order-1 "/>
                    </div>
                </div>
                <div className="chat-message">
                    <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gray-700 text-white ">Hola doc, como le va?.</span></div>
                        </div>
                        <img src="https://cdn-icons-png.flaticon.com/512/2105/2105138.png" alt="My profile" className="w-14 h-14 rounded-full order-2"/>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div className="relative flex">
                    <input type="text" placeholder="Escribe tu mensaje!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-2 bg-gray-200 rounded-md py-3"
                    onChange={(e)=>setMensaje(e.target.value)}/>
                        
                        <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                            <button type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-green-800 hover:bg-green-600 focus:outline-none"
                            onClick={()=>{handleMensajeChat()}} >
                                <span className="font-bold">Send</span>
                            </button>
                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default Chat
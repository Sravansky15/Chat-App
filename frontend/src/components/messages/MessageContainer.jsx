import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import {TiMessages} from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected= false;

  return (
    <div className = 'md:min-w-[450px] flex flex-col overflow-auto'>
      {noChatSelected ? <NoChatSelected/> : (
        <div>
           <div className='bg-slate-500 px-4 py-2 mb-2'>
           <span className='label-text'>To:</span> 
           <span className='text-gray-900 font-bold'>Shiva Kumar</span>
     
           </div>git
           <Messages/>
           <MessageInput/>
           </div>
      )}
        
     
      </div>
    
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  return(
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
          <p> Welcome 👋 Shiva Kumar </p>
          <p>Select a chat to start messaging</p>
           <TiMessages className ='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
}

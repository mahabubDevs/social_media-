import React, { useEffect, useState } from 'react'
import Feeling from '../../../../svg/Feeling';
import EmojiPicker from 'emoji-picker-react';

const EmojiPickers = ({text,setText,textRef , changePart}) => {
    const [cursorPosition, setCursorPosition] = useState();
  const [picker, setPicker] = useState(false)
  

    const handleEmoji = ({emoji}) => {
        const ref = textRef.current;
        ref.focus();
        const start = text.substring(0, ref.selectionStart);
        const end = text.substring(ref.selectionStart);
        const newText = start + emoji + end;
        setText(newText);
        setCursorPosition(start.length + emoji.length)
      }
    
      useEffect(() => {
        textRef.current.selectionEnd = cursorPosition;
      }, [cursorPosition]);
  
  return (
    <div>
       <div className={`${changePart ? "flex  justify-between mt-5": "mt-5" }`}>
            <textarea
              ref={textRef}
              maxLength={150}
              value={text}
              onChange={(e) => setText(e.target.value)

              } placeholder="What's up say something"
          className="w-full min-h-24 outline-none p-2 font-gilroyMedium text-base"
        />
        {changePart && (
          <div className="cursor-pointer relative">
          <div onClick={()=>setPicker((prev)=> !prev)}>
              <Feeling/>
          </div>
          {picker && (
            <div className="absolute top-0 right-8  z-10">
              <EmojiPicker onEmojiClick={handleEmoji}/>
              
            </div>

          )}
    </div> 
             )}
        
        </div>
      {
        !changePart &&  <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 bg-gradient-to-r from-red to-purple_100 rounded-md cursor-pointer">
              
          </div>
         
              <div className="cursor-pointer relative">
              <div onClick={()=>setPicker((prev)=> !prev)}>
                  <Feeling/>
              </div>
              {picker && (
                <div className="absolute -top-[460px] -left-[315px]">
                  <EmojiPicker onEmojiClick={handleEmoji}/>
                  
                </div>

              )}
              </div>
          </div>
         }
       
    </div>
  )
}

export default EmojiPickers

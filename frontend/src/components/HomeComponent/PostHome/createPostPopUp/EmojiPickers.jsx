import React, { useEffect, useState } from 'react'
import Feeling from '../../../../svg/Feeling';
import EmojiPicker from 'emoji-picker-react';

const EmojiPickers = ({text,setText,textRef}) => {
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
  )
}

export default EmojiPickers

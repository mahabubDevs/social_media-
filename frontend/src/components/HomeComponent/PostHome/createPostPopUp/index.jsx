import React, { useEffect, useRef, useState } from "react";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import AddPost from "./AddPost";
import EmojiPickers from "./EmojiPickers";
import ImageViewer from "./ImageViewer";

const CreatePostPopUp = () => {
  
  const [text, setText] = useState("")
  const [imgbox, setImgbox] = useState(false)
  const textRef = useRef(null)
  const [imageShow, setImageShow] = useState([])
 

 
  
  return (
    <div className="absolute top-0 left-0 w-full bg-blur h-screen z-20 flex justify-center items-center">
      <div className="w-[30%] bg-white shadow-md">
        <div className="relative border-b border-[#d0d2d6] p-2">
          <h3 className="font-gilroyBold text-lg text-black text-center">
            Create Post
          </h3>
          <div className="absolute top-1 right-2" >
            <CircleCloseIcon />
          </div>
        </div>
        <div className="px-3 py-4">
          <div className="flex items-center gap-x-3">
            <div className="w-12 h-12 rounded-full bg-[#e6e5e5] "> </div>
              <h4 className="font-gilroyBold text-base text-black">
                Md Mahabub Rahman
              </h4>
          </div>
          {
            !imgbox ? (
              <>
                <EmojiPickers text={text} setText={setText} textRef={textRef} />
              <div>
                  <AddPost setImgbox={setImgbox} imgbox={ imgbox} />
              </div>
              </>
            ) : (
                <>
                  <ImageViewer
                    text={text}
                    setText={setText}
                    textRef={textRef}
                    imageShow={imageShow}
                    setImageShow={setImageShow}
                    setImgbox = {setImgbox}
                  />
                  <div>
                  
                  <AddPost setImgbox={setImgbox} imgbox={ imgbox} />
              </div>
                </>
            )
          }
             
          <div className="mt-3">
            <button className="w-full bg-[#e6e5e5] hover:text-white hover:bg-black p-2 font-gilroyExtraBold text-black text-base rounded-md">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPopUp;

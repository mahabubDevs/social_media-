import React, { useState } from "react";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import AddPost from "./AddPost";
import Feeling from "../../../../svg/Feeling";
import EmojiPicker from "emoji-picker-react";

const CreatePostPopUp = () => {
  const [picker,setPicker] = useState(false)
  return (
    <div className="absolute top-0 left-0 w-full bg-blur h-screen z-20 flex justify-center items-center">
      <div className="w-[30%] bg-white shadow-md">
        <div className="relative border-b border-[#d0d2d6] p-2">
          <h3 className="font-gilroyBold text-lg text-black text-center">
            Create Post
          </h3>
          <div className="absolute top-1 right-2">
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
            <div className="mt-5">
              <textarea placeholder="What's up say something"
                className="w-full min-h-24 outline-none p-2 font-gilroyMedium text-base" />
              
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red to-purple_100 rounded-md cursor-pointer">
              
              </div>
            <div className="cursor-pointer relative">
              <div onClick={()=>setPicker((prev)=> !prev)}>
                  <Feeling/>
              </div>
              {picker && (
                <div className="absolute -top-[460px] -left-[315px]">
                  <EmojiPicker/>
                </div>

              )}
              </div>
          </div>
          <div>
            <AddPost/>
          </div>
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

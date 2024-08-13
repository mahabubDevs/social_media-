import { Friends } from "../../../svg/Friends"
import { LiveIcon } from "../../../svg/Live"
import { Media } from "../../../svg/Media"
import Header from "./Header"


const PostHome = () => {
  return (
    <>
      <div className="mt-10 py-10 px-6 bg-[#e0e5e6] rounded-md">
        <div className="flex items-center gap-x-3 w-full p-2 bg-white rounded-full mb-6">
          <div className="w-12 h-12 rounded-full bg-black"></div>
          <input type="text" placeholder="What's up say something" className="focus:outline-none w-[95]" />
        </div>
        <div className="border-t-2 border-line_color">
          <div className="mt-7 flex gap-x-7 items-center justify-around">
            <div className="w-[33%] flex items-center gap-x-3">
              <LiveIcon />
              <span className="font-gilroyMedium text-bold">Live Video</span>
            </div>
            <div className="w-[33%] flex items-center gap-x-3">
              <Media />
              <span className="font-gilroyMedium text-bold">Live Video</span>
            </div>
            <div className="w-[33%] flex items-center gap-x-3">
              <Friends />
              <span className="font-gilroyMedium text-bold">Live Video</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostHome

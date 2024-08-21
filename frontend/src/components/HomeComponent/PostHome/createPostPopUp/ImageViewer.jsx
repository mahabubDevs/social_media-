
import { useRef } from 'react';
import { CircleCloseIcon } from '../../../../svg/CircleClose'
import { Media } from '../../../../svg/Media'
import EmojiPickers from './EmojiPickers'


const ImageViewer = ({ text, setText, textRef, imageShow, setImageShow ,setImgbox }) => {
  const choosefile = useRef(null);
  const handleImageUpload = (e) => {
    const file = Array.from(e.target.files)
    file.forEach((img) => {
      if (img.type !== "image/jpeg" && img.type !== "image/png" && img.type !== "image/webp" && img.type !== "image/gif") {
        console.log("image not found");
      }
      const renderFiles = new FileReader();
      renderFiles.readAsDataURL(img);
      renderFiles.onload = (renderImage) => {
        setImageShow((images)=>[...images, renderImage.target.result])
      }
    })
  }
  
  
  return (
    <>
      <EmojiPickers text={text} setText={setText} textRef={textRef} changePart /> 
      <div className='p-2 border border-line_color rounded-md mb-5'>
        <div className='w-full h-[350px] bg-[#ebeaea] rounded-md'>
          <input
            type="file"
            multiple
            accept='image/jpeg,image/png,image/webp,image/gif'
            className='hidden'
            ref={choosefile}
            onChange={handleImageUpload}
            
          />
          {
            imageShow && imageShow.length ? (
              <div className='relative'>
                <div className='absolute top-3 left-3 flex items-center gap-x-3 bg-white
                rounded-md p-2 cursor-pointer' onClick={()=>choosefile.current.click()}>
                  <Media />
                  <span className='font-gilroy text-sm text-black'>
                    Add Phots/videos
                  </span>
                </div>
                <div className='absolute top-2 right-3 z-10 cursor-pointer' onClick={()=>setImageShow([])}>
                  <CircleCloseIcon />
                </div>
                  <div className={`${
                imageShow.length === 1
                ? "overflow-hidden boject-cover8 w-full h-full"
                : imageShow.length === 2
                  ? " boject-cover overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                  : imageShow.length === 3 
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                    : imageShow.length === 4
                      ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                    : imageShow.length >= 5 
                      ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                      : "overflow-hidden"
              }`}>
                {imageShow.slice(0, 4).map((img, i) => (
                  <img key={i} src={img} className={` object-cover w-full h-full ${imageShow.length === 3 ?
                    "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3" : imageShow.length === 4 && 
                    "[&:nth-of-type(1)]:row-start-2 [&:nth-of-type(1)]:row-end-3"}`} alt='images'
                  />
                ))}
                  {
                    imageShow.length >= 5 && (
                      <div className='absolute bottom-[50px] right-[85px] -translate-x-[50%]
                      -translate-y-[50%] w-12 h-12 bg-white rounded-full flex justify-center items-center'>
                        <span className='font-gilroyBold text-base text-black'>
                          +{imageShow.length -4}
                        </span>
                      </div>
                    )
                  }
                </div>
              </div>
            ) : (
                <div className='relative flex items-center justify-center h-full ' >
                  <div className='absolute top-2 right-2 text-secondary_color cursor-pointer' onClick={()=>setImgbox(false)}>
                    <CircleCloseIcon/>
                  </div>
                  <div className='flex flex-col items-center cursor-pointer' onClick={()=>choosefile.current.click()}>
                    <div className='w-10 h-10 rounded-full bg-black cursor-pointer flex items-center justify-center text-white'>
                      <Media/>
                    </div>
                    <div className='mt-3'>
                      <p className='font-gilroySemibold text-base text-center'>
                          Add Photo/Videos
                      </p>
                      <p className='font-gilroySemibold text-base text-center'>
                          or drag and drop
                      </p>
                    </div>
                  </div>
                </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default ImageViewer

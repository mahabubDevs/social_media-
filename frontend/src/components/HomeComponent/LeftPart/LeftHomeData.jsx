

const LeftHomeData = ({data}) => {

  const ItemIcon = data.icon
  return (
    <div className="flex items-center gap-x-6 mb-7 hover:bg-black py-3 px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100">
      <div className="group-hover:text-white transition-all ease-linear duration-100">
        <ItemIcon/>
      </div>
      <div>
        <p className="font-gilroyMedium text-lg text-black group-hover:text-white transition-all ease-linear duration-100">{data.title}</p>
      </div>
    </div>
  )
}

export default LeftHomeData

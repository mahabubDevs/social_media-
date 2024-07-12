

const LeftAuth = ({title,description,icon}) => {
  return (
    <div>
      <div>{icon}</div>
      <h1 className='font-gilroyBold text-4xl text-primary_color 2xl:text-7xl'>{title}</h1>
      <p className='font-gilroy 2xl:text-lg text-text_color mt-3'>{description}</p>
    </div>
  )
}

export default LeftAuth



const LeftAuth = ({title,description,icon}) => {
  return (
    <div>
      <div>{icon}</div>
      <h1 className='font-gilroyBold text-7xl text-primary_color'>{title}</h1>
      <p className='font-gilroy text-lg text-text_color mt-3'>{description}</p>
    </div>
  )
}

export default LeftAuth

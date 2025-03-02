interface DescriptionProps{
  text:string
}

const Description = ({text}:DescriptionProps) =>{
  return (<p className="font-normal text-2xl text-center font-inter text-white">{text}</p>)
}

export default Description;



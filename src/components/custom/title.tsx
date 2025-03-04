interface TitleProps{
  text:string
}

const Title = ({text}:TitleProps) => {
  return (
    <h2 className="font-semibold text-xl font-inter">{text}</h2>
  )
}

export default Title
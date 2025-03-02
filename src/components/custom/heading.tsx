interface HeadingProps {
  title: String
}

const Heading = ({title}:HeadingProps)=>{

  return (<h1 className="font-inter text-white font-extrabold text-[40px] text-center">{title}</h1>)
}

export default Heading;



import Container from "./container";

interface HeadingProps {
  title: String
}

const Heading = ({title}:HeadingProps)=>{


  return (
  <Container className="mt-3">
  <h1 className="font-inter text-white font-extrabold text-2xl lg:text-4xl text-center">{title}</h1>
  </Container>  
)
}

export default Heading;




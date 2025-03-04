"use client"

import Container from "./container";

interface VideoComponentProps {
  path:string;
}

const VideoComponent = ({path}:VideoComponentProps)=>{

  return (
    <Container>
    <div className="flex items-center justify-center ">
    <video src={path} muted autoPlay loop />
    </div>
    </Container>
  )
}

export default VideoComponent;
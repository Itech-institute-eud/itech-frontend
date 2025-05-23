"use client"

import Container from "./container";

interface VideoComponentProps {
  path:string;
}

const VideoComponent = ({path}:VideoComponentProps)=>{

  return (
    <div className="flex items-center justify-center ">
    <video src={path} muted autoPlay loop  className="opacity-80"/>
    </div>
  )
}

export default VideoComponent;
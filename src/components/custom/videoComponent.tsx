"use client"
interface VideoComponentProps {
  path:string;
}

const VideoComponent = ({path}:VideoComponentProps)=>{

  return (
    <div className="flex items-center justify-center ">
    <video src={path} muted autoPlay loop />
    </div>
  )
}

export default VideoComponent;
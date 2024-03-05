
interface VideoPlayerProps {
    videoSrc: string
}

export default function VideoPlayer({ videoSrc }: VideoPlayerProps) {
    return (
        <video src={videoSrc }></video>
    
    );
}
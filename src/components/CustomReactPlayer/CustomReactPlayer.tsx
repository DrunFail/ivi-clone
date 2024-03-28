import ReactPlayer from "react-player/lazy";

interface CustomReactPlayerProps {
    videoUrl: string
}

export default function CustomReactPlayer({ videoUrl }: CustomReactPlayerProps) {
    return (
        <ReactPlayer
            controls
            width="auto"
            height="auto"
            style={{ aspectRatio: "16/9" }}
            url={videoUrl}
        />
    );
}
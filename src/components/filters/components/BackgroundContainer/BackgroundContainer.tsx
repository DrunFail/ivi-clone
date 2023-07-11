export default function BackgroundContainer({ children }: {children:React.ReactNode}) {
    return (
        <div style={{ backgroundColor:"#312b45", borderRadius: "10px", padding: "15px",position: "relative",blockSize:"100%"} }>{children}</div>
    );
}
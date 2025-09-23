import CustomReactPlayer from "../CustomReactPlayer/CustomReactPlayer";

interface TrailerTabProps {
    trailerList: string[]
}
export default function TrailerTab({ trailerList }: TrailerTabProps) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", paddingBlock: "40px" }}>
            {trailerList.map((trailer, index) =>
                <div key={index} >
                    <CustomReactPlayer videoUrl={trailer} />
                </div>
            )
            }
        </div>
    );
};



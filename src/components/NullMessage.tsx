import emptyData from "../assets/images/empty-data-placeholder.png";
interface Props {
    recentlyPlayedActive: string;
    thirdTabActive: string;
}
const NullMessage = ({recentlyPlayedActive, thirdTabActive} :Props) => {
    return (
        <div className="mt-60">
            
            {recentlyPlayedActive === "tab1" && (
                <div>erroe 1</div>
            )}
            {thirdTabActive === "tab3" && (
                <div>error 3</div>
            )}
            {recentlyPlayedActive !== "tab1" && thirdTabActive !== "tab3" && (
                <div>
                    <img src={emptyData} className="m-auto" style={{width: "100px"}}/>
                    <p>Nothing to see here. Search for an artist to start streaming</p>
                </div>
            )}
        </div>
    )
}

export default NullMessage;
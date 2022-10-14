import emptyData from "../assets/images/empty-data-placeholder.png";
type Props = {
    recentlyPlayedActive: string;
    thirdTabActive: string;
}
const NullMessage = ({recentlyPlayedActive, thirdTabActive} :Props) => {
    return (
        <div className="grid items-center">
            <div>
            
            {recentlyPlayedActive === "tab1" && (
                <div className="grid items-center">
                    <p>Start streaming to see a list of your recently played items.</p>
                </div>
            )}
            {thirdTabActive === "tab3" && (
                <div><a href="https://open.spotify.com/playlist/2hHAUjDTHeFXPGBY7SAq1n" target="_blank">Create your playlists</a> to see them here.</div>
            )}
            {recentlyPlayedActive !== "tab1" && thirdTabActive !== "tab3" && (
                <div className="grid items-center">
                    <div>
                        <img src={emptyData} className="m-auto" style={{width: "100px"}}/>
                        <p>Search for an artist to start streaming</p>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default NullMessage;
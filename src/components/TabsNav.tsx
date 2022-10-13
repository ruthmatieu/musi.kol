// import this comp in searchresults
// import search results content here
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import DisplaySearchResults from "./TabContent/DisplaySearchResults";
import RecentlyPlayed from "./TabContent/RecentlyPlayed";
import ThirdTab from "./TabContent/ThirdTab";

type Props = {
    artists: any[];
    token: string;
    searchArtists: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    recentlyPlayed: any[];
    setSearchKey: Dispatch<SetStateAction<string>>;
}


const TabsNav = ({
    artists, 
    token, 
    searchArtists, 
    setSearchKey, 
    recentlyPlayed
} : Props) => {
    const [activeTab, setActiveTab] = useState("tab1");

    const displayRecentlyPlayedTab = () => {
        setActiveTab("tab1")
    };

    const displaySearchFormTab = () => {
        setActiveTab("tab2")
    };

    const displayThirdTab = () => {
        setActiveTab("tab3")
    };
    return (
        <div className="Tabs h-auto mx-auto my-2 py-4 px-2 text-black rounded-lg" style={{width: "80%", minHeight: "400px"}}>
            <ul className="nav flex items-center justify-between border border-white border-solid rounded-full" style={{width: "60%", margin: "0 auto 2rem"}}>
                <li
                    className={`w-1/3 p-2 text-center ${activeTab === "tab1" ? "active" : ""}`}
                    
                    onClick={displayRecentlyPlayedTab}
                >Recently Played</li>
                <li
                    className={`w-1/3 p-2 text-center ${activeTab === "tab2" ? "active" : ""}`}
                    onClick={displaySearchFormTab}
                >Search</li>
                <li
                    className={`w-1/3 p-2 text-center ${activeTab === "tab3" ? "active" : ""}`}
                    onClick={displayThirdTab}
                >Third Tab</li>
            </ul>
        <div className="outlet">
            {/* {activeTab === "tab1" ? <RecentlyPlayed/> : <DisplaySearchResults artists={artists} token={token} searchArtists={searchArtists} setSearchKey={setSearchKey}/>} */}
            {activeTab === "tab1" && <RecentlyPlayed token={token} recentlyPlayedActive={activeTab} thirdTabActive={activeTab} recentlyPlayed={recentlyPlayed}/>}
            {activeTab === "tab2" && <DisplaySearchResults artists={artists} token={token} searchArtists={searchArtists} setSearchKey={setSearchKey} thirdTabActive={activeTab} recentlyPlayedActive={activeTab}/>}
            {activeTab === "tab3" && <ThirdTab token={token} thirdTabActive={activeTab} recentlyPlayedActive={activeTab}/>}
        </div>
    </div>
    )
}

export default TabsNav;


import { useState, FormEvent, useEffect } from "react";
import axios from "axios";
import useSpotify from "../../hooks/useSpotify";
import bgImage from "../../assets/images/mass-people-concert.png";
import RecentlyPlayed from "../../components/TabContent/RecentlyPlayed";
import DisplaySearchResults from "../../components/TabContent/DisplaySearchResults";
import ThirdTab from "../../components/TabContent/ThirdTab";

const Home = () => {
    const [token, AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE] = useSpotify();

    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState<any[]>([]);
    const [recentlyPlayed, setRecentlyPlayed] = useState<any[]>([]);

    const [activeTab, setActiveTab] = useState("tab2");

    const displayRecentlyPlayedTab = () => {
        setActiveTab("tab1")
    };

    const displaySearchFormTab = () => {
        setActiveTab("tab2")
    };

    const displayThirdTab = () => {
        setActiveTab("tab3")
    };


    const searchArtists = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "album"
            }
        })
        setArtists(data.albums.items)
    }

    const getRecentlyPlayed = async () => {
        //e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/me/player/recently-played", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        setRecentlyPlayed(data);
    }
    
    console.log('recently played: ',recentlyPlayed)

    useEffect(() => {
        getRecentlyPlayed();
    },[])

    return (
        <div className={`homepage text-center text-stone-200 ${!token ? "grid items-center h-screen": ""} ${artists.length=== 0 ? "h-screen" : "h-full"}`} style={{backgroundImage: !token ? `url(${bgImage})` : 'none'}}>
            <div className={`${token ? "md:flex" : ""}`}>
            {token ? (
                <div className="md:w-1/4 md:h-screen" style={{backgroundColor: "#11111F"}}>
                    
                        <div className="Tabs h-auto mx-auto text-black">
                        <ul className="nav flex md:flex-col items-center md:items-start">
                            <li
                                className={`text-white w-1/3 p-3 text-center cursor-pointer md:w-full ${activeTab === "tab1" ? "active" : ""}`}
                                
                                onClick={displayRecentlyPlayedTab}
                            >Recently Played</li>
                            <li
                                className={`text-white w-1/3 p-3 text-center cursor-pointer md:w-full ${activeTab === "tab2" ? "active" : ""}`}
                                onClick={displaySearchFormTab}
                            >Search</li>
                            <li
                                className={`text-white w-1/3 p-3 text-center cursor-pointer md:w-full ${activeTab === "tab3" ? "active" : ""}`}
                                onClick={displayThirdTab}
                            >My Playlists</li>
                        </ul>
                    
                </div>
                    
                </div>
                ) : ""}
                
                <div className={`${token ? "md:w-3/4 h-screen" : ""}`} style={{backgroundColor: `${token ? "#1C1E31":""}`}}>
                    {!token ?  
                        (<><h1 className="text-6xl font-bold sm:text-8xl">musi.kol</h1><p className="mb-6">Start streaming your favorites now</p></>): ""}
                    {!token ? 
                            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                                <button className="border border-gray-300 rounded-full py-4 px-10 duration-200 hover:bg-stone-200 hover:text-black hover:duration-200">Login to Spotify</button>
                            </a>
                        : ""
                    }
                    <br/>
                        
                    {token ? (
                        <div className="outlet">
                            {activeTab === "tab1" && <RecentlyPlayed token={token} recentlyPlayedActive={activeTab} thirdTabActive={activeTab} recentlyPlayed={recentlyPlayed}/>}
                            {activeTab === "tab2" && <DisplaySearchResults artists={artists} token={token} searchArtists={searchArtists} setSearchKey={setSearchKey} thirdTabActive={activeTab} recentlyPlayedActive={activeTab}/>}
                            {activeTab === "tab3" && <ThirdTab token={token} thirdTabActive={activeTab} recentlyPlayedActive={activeTab}/>}
                        </div>
                        ): 
                        ""
                    }
                </div>
             </div>
        </div>
    )
};

export default Home;
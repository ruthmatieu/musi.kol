import React, { useState, FormEvent } from "react";
import axios from "axios";
import useSpotify from "../../hooks/useSpotify";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../SearchResults";
import bgImage from "../../assets/images/mass-people-concert.png";

const Home = () => {
    const [token, AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE] = useSpotify();

    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState<any[]>([]);


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
        console.log(data.albums.items)
        setArtists(data.albums.items)
    }

    return (
        <div className={`homepage text-center text-stone-200 ${!token ? "grid items-center h-screen": ""} ${artists.length=== 0 ? "h-screen" : "h-full"}`} style={{backgroundImage: !token ? `url(${bgImage})` : 'none'}}>
                <div>
                    {!token ?  
                    (<><h1 className="text-6xl font-bold sm:text-8xl">musi.kol</h1><p className="mb-6">Start streaming your favorites now</p></>): ""}
                    {!token ? 
                        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                            <button className="border border-gray-300 rounded-full py-4 px-10 duration-200 hover:bg-stone-200 hover:text-black hover:duration-200">Login to Spotify</button>
                        </a>
                    : ""
                    }
                    <br/>
                    
                    {token ? <SearchResults artists={artists} token={token} searchArtists={searchArtists} setSearchKey={setSearchKey}/> : ""}
                </div>
        </div>
    )
};

export default Home;
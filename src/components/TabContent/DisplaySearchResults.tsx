import { Dispatch, FormEvent, SetStateAction } from "react";
import ErrorMessage from "../ErrorMessage";
import SearchForm from "../SearchForm";
type Props = {
    artists: any[];
    token: string;
    searchArtists: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    setSearchKey: Dispatch<SetStateAction<string>>;
    thirdTabActive: string;
    recentlyPlayedActive: string;
}
const DisplaySearchResults = ({artists,token,searchArtists,setSearchKey, thirdTabActive, recentlyPlayedActive}:Props) => {
    console.log(artists)
    return(
        <div>
            {token ? <SearchForm searchArtists={searchArtists} setSearchKey={setSearchKey}/> : ""}
            {artists.length !== 0 ? 
                <div className="flex flex-wrap mt-10">
                    {artists.map(artist => (
                        <div key={artist.id} className="border border-gray-300 w-60 m-auto mb-10">
                            <img src={artist.images[0].url}/>
                            <div className="bg-white rounded-t-xl">
                                <div className="p-4">
                                    <p>{artist.name}</p>
                                    <p>Released: {artist.release_date}</p>
                                </div>
                                <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
                                    <button className="my-6 mx-10 border border-gray-300 rounded-full bg-stone-200 text-black py-2 px-5 duration-200 hover:bg-blue-200 hover:duration-200">Stream Now</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                : 
                <ErrorMessage recentlyPlayedActive={recentlyPlayedActive} thirdTabActive={thirdTabActive}/>
            }
        </div>
    )
}

export default DisplaySearchResults;
import emptyData from "../../assets/images/empty-data-placeholder.png";
type Props = {
    artists: any[];
}

const SearchResults = ({artists}:Props) => {
    console.log(artists)
    return (
        <div className="grid items-center">
            {artists.length !== 0 ? 
                <div className="flex flex-wrap mt-10">
                    {artists.map(artist => (
                        <div key={artist.id} className="border border-gray-300 w-60 m-auto mb-10 text-black">
                            <img src={artist.images[0].url} alt={artist.name} style={{zIndex: "-1"}}/>
                            <div className="bg-white rounded-t-xl" style={{zIndex: "1"}}>
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
                <div className="mt-10">
                    <img src={emptyData} alt="" className="m-auto" style={{width: "100px"}}/>
                    <p>Nothing to see here. Search for an artist to start streaming.</p>
                </div>
            }
        </div>
    )
}
export default SearchResults;

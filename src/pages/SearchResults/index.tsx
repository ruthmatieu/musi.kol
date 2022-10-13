import { Dispatch, FormEvent, SetStateAction } from "react";
import TabsNav from "../../components/TabsNav";
type Props = {
    artists: any[];
    token: string;
    searchArtists: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    recentlyPlayed: any[];
    setSearchKey: Dispatch<SetStateAction<string>>;
}

const SearchResults = ({artists, token, searchArtists, setSearchKey, recentlyPlayed} :Props) => {

    return (
        <div className="grid items-center">
            
            <TabsNav artists={artists} token={token} searchArtists={searchArtists} setSearchKey={setSearchKey} recentlyPlayed={recentlyPlayed}/>
            
        </div>
    )
}
export default SearchResults;

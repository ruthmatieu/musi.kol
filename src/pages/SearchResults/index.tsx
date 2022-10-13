import { Dispatch, FormEvent, SetStateAction } from "react";
import TabsNav from "../../components/TabsNav";
type Props = {
    artists: any[];
    token: string;
    searchArtists: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    setSearchKey: Dispatch<SetStateAction<string>>;
}

const SearchResults = ({artists, token, searchArtists, setSearchKey} :Props) => {

    return (
        <div className="grid items-center">
            
            <TabsNav artists={artists} token={token} searchArtists={searchArtists} setSearchKey={setSearchKey}/>
            
        </div>
    )
}
export default SearchResults;

import { Dispatch, FormEvent, SetStateAction } from "react";

type Props = {
    searchArtists: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    setSearchKey: Dispatch<SetStateAction<string>>;
};

const SearchForm = ({searchArtists, setSearchKey}:Props) => {

    return (
        <form onSubmit={searchArtists} className="mt-24">
            <span className="bg-white py-4 px-10 rounded-full">
                <input 
                    type="text"
                    placeholder="i.e. BTS"
                    onChange={e => setSearchKey(e.target.value)}
                />
                <button type="submit">Go</button>
            </span>
        </form>
    )
}

export default SearchForm;
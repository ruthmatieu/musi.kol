import { Routes, Route, Link } from "react-router-dom";
import useSpotify from "./hooks/useSpotify";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Logout from "./pages/Logout";

type Props = {
    artists: any[];
}

const App = ({artists}:Props) => {
    const [token] = useSpotify();

    return (
        <div>
            <header className="relative">
                {token ? 
                    <div className="flex justif-between">
                        <Link to="/"><p className="text-stone-200 text-2xl font-bold absolute left-0 my-6 mx-10">musi.kol</p></Link>
                        <Logout token={token}/> 
                    </div>
                : ""}
            
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-account" element={<SearchResults artists={artists}/>} />
            </Routes>
        </div>
    )
}

export default App;
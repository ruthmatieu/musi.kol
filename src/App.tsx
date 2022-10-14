import { Routes, Route, Link } from "react-router-dom";
import useSpotify from "./hooks/useSpotify";
import Home from "./pages/Home";
import Logout from "./pages/Logout";

const App = () => {
    const [token] = useSpotify();

    return (
        <div>
            <header className="nav relative" style={{backgroundColor: `${token ? "#11111F":""}`, height: `${token ? "90px":""}`}}>
                {token ? 
                    <div className="flex justif-between">
                        <Link to="/"><p className="text-stone-200 text-2xl font-bold absolute left-0 my-6 mx-10">musi.kol</p></Link>
                        <Logout token={token}/> 
                    </div>
                : ""}
            
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App;
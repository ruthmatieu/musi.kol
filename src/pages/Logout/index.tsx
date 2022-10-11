import { useState } from "react";

type Props = {
    token: string;
};

const Logout = ({ token }:Props) => {
    const [, setResetToken] = useState(token);

    const logout = () => {
        setResetToken("");
        window.localStorage.removeItem("token");
        console.log("logged out")
    };

    return (
        <button onClick={logout} className="absolute right-0 my-6 mx-10 border border-gray-300 rounded-full bg-stone-200 py-2 px-5 duration-200 hover:bg-blue-200 hover:text-black hover:duration-200">Logout</button>
    )
}

export default Logout;
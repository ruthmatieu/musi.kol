import ErrorMessage from "../ErrorMessage";

type Props = {
    token: string;
    thirdTabActive: string;
    recentlyPlayedActive: string;
}

const ThirdTab = ({token, thirdTabActive, recentlyPlayedActive}: Props) => {
    return (
        <div>
            {!token ? <div></div> : <ErrorMessage thirdTabActive={thirdTabActive} recentlyPlayedActive={recentlyPlayedActive}/>}
        </div>
    )
}

export default ThirdTab;
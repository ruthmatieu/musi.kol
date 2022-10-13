import ErrorMessage from "../ErrorMessage";

type Props = {
  token: string;
  thirdTabActive: string;
  recentlyPlayedActive: string;
}

const RecentlyPlayed = ({token, recentlyPlayedActive, thirdTabActive}: Props) => {
    return (
      <div>
       {!token ? <div></div> : <ErrorMessage recentlyPlayedActive={recentlyPlayedActive} thirdTabActive={thirdTabActive}/>}
    </div>
    )
}

export default RecentlyPlayed;
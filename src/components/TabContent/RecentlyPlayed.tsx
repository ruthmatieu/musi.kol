import { FormEvent } from "react";
import ErrorMessage from "../NullMessage";

type Props = {
  token: string;
  thirdTabActive: string;
  recentlyPlayedActive: string;
  recentlyPlayed: any[];
}

const RecentlyPlayed = ({
  token, 
  recentlyPlayedActive, 
  thirdTabActive, 
  recentlyPlayed
}: Props) => {
    return (
      <div>
       {!token ? <div></div> : <ErrorMessage recentlyPlayedActive={recentlyPlayedActive} thirdTabActive={thirdTabActive}/>}
    </div>
    )
}

export default RecentlyPlayed;
import { use } from "react"
import Firend from "./Firend";

export default function Firends({friendsPromise}) {

    const friends = use(friendsPromise)
    // console.log(friends);

    return (
        <div className="card">
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Firend key={friend.id} friend={friend}></Firend>)
            }
        </div>
    )
}
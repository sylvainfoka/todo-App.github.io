import {useParams} from "react-router-dom"

function ProfilePage() {
    const {userTag} = useParams()
    return <h1>{userTag} Page !</h1> 
}

export default ProfilePage
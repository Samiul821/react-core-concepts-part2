export default function Firend ({friend}) {
    console.log(friend);
    const {name, username, email, phone} = friend

    return(
        <div className="card2">
            <h3>Name: {name}</h3>
            <h3>username: {username}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}
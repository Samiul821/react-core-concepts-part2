import { useState } from "react"

export default function Bowler () {
    const counterStyle = {
        border: '2px solid #ff6b81',
        borderRadius: '10px',
        marginBottom: '20px',
        padding: '10px',
    }

    // const btnStyle = {
    //     marginRight: '10px'
    // }
    const [ball, setBall] = useState(6);
    const [countball, setCountball] = useState(0)

    const handleBall = () => {
        if(ball > 0) {
            const updateBall = Math.max(0, ball -1);
            setBall(updateBall)
            const countBall = countball + 1
            setCountball(countBall)
        }
    }

    return (
        <div style={counterStyle}>
           <h3>Player: Bangla Bowler</h3>
           <h2>Ball: {ball}</h2>
           <p>Ball count: {countball}</p>
           <button onClick={handleBall}>Blowing</button>
        </div>
    )
}
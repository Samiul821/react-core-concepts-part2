import { useState } from "react"

export default function Batsman () {
    const counterStyle = {
        border: '2px solid #ff6b81',
        borderRadius: '10px',
        marginBottom: '20px',
        padding: '10px',
    }

    const btnStyle = {
        marginRight: '10px'
    }

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0)
    const [four, setFour] = useState(0)

    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns)
    }

    const handleFour = () => {
        const updateRuns = runs + 4;
        const updateFour = four + 1;
        setFour(updateFour)
        setRuns(updateRuns)
    }
    
    const handleSix = () => {
        const updateRuns = runs + 6;
        const updateSixs = sixes +1;
        setSixes(updateSixs)
        setRuns(updateRuns)
    }
    return (
        <div style={counterStyle}>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            <p><small>Four: {four}</small></p>
            {
                runs > 50 && <p>You score: 50</p>
            }
            <h2>Score: {runs}</h2>
            <button onClick={handleSingle} style={btnStyle}>Singles</button>
            <button onClick={handleFour} style={btnStyle}>Four</button>
            <button onClick={handleSix} style={btnStyle}>Six</button>
        </div>
    )
}
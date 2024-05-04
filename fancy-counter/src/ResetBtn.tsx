export default function ResetBtn ({ resetCount }) {
    return <button onClick={()=>resetCount(0)} className="counter-button reset-btn">Reset</button>
}
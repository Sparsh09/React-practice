export default function Counter ({counterValue}) {
    return <div className="counter-value">
        <h3 onClick={() => {
            console.log("Click");
        }}>{counterValue}</h3>
    </div>
}
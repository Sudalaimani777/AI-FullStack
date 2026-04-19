export default function Die({number, backgroundColor, hold, id}) {
    return (
        <button style={{backgroundColor: backgroundColor}} onClick={() => hold(id)}>{number}</button>
    )
}
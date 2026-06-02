

const Counter = (props) => {

    const {count, incCount, decCount} = props;


  return (
    <>
        <section>
            <h3>{count}</h3>
            <button onClick={incCount}>+</button>
            <button onClick={decCount}>-</button>
        </section>
    </>
  )
}

export default Counter
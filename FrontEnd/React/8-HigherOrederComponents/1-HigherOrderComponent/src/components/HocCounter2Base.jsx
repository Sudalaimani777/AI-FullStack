import { HigherOrderComponent } from "./HigherOrderComponent";

const HocCounter2Base = ({ count, handleClick }) => {

  return (
    <section>
      <h1>HOC Counter 2</h1>
      <h3>Count {count}</h3>
      <button onClick={handleClick}>Inc</button>
    </section>
  );
};


export const HocCounter2 = HigherOrderComponent(HocCounter2Base);
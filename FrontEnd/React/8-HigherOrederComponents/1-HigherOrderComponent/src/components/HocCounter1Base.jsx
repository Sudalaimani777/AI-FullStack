import { HigherOrderComponent } from "./HigherOrderComponent";

const HocCounter1Base = ({ count, handleClick }) => {
  return (
    <section>
      <h1>HOC Counter 1</h1>
      <h3>Count {count}</h3>
      <button onClick={handleClick}>Inc</button>
    </section>
  );
};

export const HocCounter1 = HigherOrderComponent(HocCounter1Base);
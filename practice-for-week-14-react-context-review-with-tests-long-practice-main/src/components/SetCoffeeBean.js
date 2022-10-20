import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
  const { setCoffeeBeanId, coffeeBean } = useContext(CoffeeContext);
  let a;
  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        value={coffeeBean.id}
        onChange={(e) => setCoffeeBeanId(e.target.value)}
        name="coffee-bean"
      >
        {coffeeBeans.map((bean) => (
          <option key={bean.id} value={bean.id}>
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SetCoffeeBean;

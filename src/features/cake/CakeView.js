import { useSelector, useDispatch } from "react-redux";
//actions
import { actions } from "./cakeSlice";

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of cakes: {numOfCakes}</h1>
      <button onClick={() => dispatch(actions.added(3))}>Add Cake</button>
      <button onClick={() => dispatch(actions.ordered())}>Order Cake</button>
    </div>
  );
}

export default CakeView;

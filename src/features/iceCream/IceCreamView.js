import { useSelector, useDispatch } from "react-redux";
import { actions } from "./iceCreamSlice";

function IceCreamView() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Ice Creams: {numOfIceCreams}</h1>
      <button onClick={() => dispatch(actions.added(5))}>Add IceCreams</button>
      <button onClick={() => dispatch(actions.ordered())}>
        Order IceCreams
      </button>
    </div>
  );
}

export default IceCreamView;

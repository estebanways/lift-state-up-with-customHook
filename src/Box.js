import { useCounterState } from './customHook';

function Box(props) {

  return (
    <div>
      <p>{props.name}</p>
      <p>contador: {props.count}</p>
      <button onClick={props.handleSubmit}>Click me!</button>
    </div>
  );
}

export default Box;

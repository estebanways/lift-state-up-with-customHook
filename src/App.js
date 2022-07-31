import './App.css';
import Box from './Box';
import { useCounterState } from './customHook';

function App() {
  const {count, handleSubmit} = useCounterState(0);
  return (
    <div className="App">
    <Box
      name="Box 1"
      count={count}
      handleSubmit={handleSubmit}
    />
    <Box
      name="Box 2"
      count={count}
      handleSubmit={handleSubmit}
    />
    </div>
  );
}

export default App;

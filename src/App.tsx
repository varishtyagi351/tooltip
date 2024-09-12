import './App.css';
import Tooltip from './components/tooltip';


function App() {
  return (
    <>
      {/* Pass the button as the children to the Tooltip component */}
      <Tooltip text="This is the text inside the tooltip.">
        <button>Hover Me</button>
      </Tooltip>
    </>
  );
}

export default App;


import './App.css';
import Todolist from './components/Todolist';
function App() {
  const state = [
    {
      task: 'Clean up bedroom'
    },
    {
      task: 'Buy some milk'
    }
    ,
    {
      task: 'Jogging'
    }
    ,
    {
      task: 'Learn React'
    }
    ,
    {
      task: 'Doing Exercises'
    }
  ];
  return (
    <div className="App">
      <div className="App-header">
        <input placeholder='Enter your task here...' className='header'></input>
        <div className='list'>
          <Todolist todo={state} />
        </div>
        <div className='footer'>
          <span>5 tasks left</span>
          <span>MindX todolist</span>
        </div>
      </div>
    </div>
  );
}

export default App;

import logo from './svg/logo.svg'
import './App.css'
import startSAI from './services/openAI'

function App() {
  startSAI()
  return (
    <div className="App">
      {process.env.REACT_APP_NAME}
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

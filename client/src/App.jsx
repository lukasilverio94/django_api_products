
import './App.css'
import axios from 'axios'
import Products from './assets/Products'
function App() {
  // Default URL axios
  axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

  return (
    <>
      <Products/>
    </>
  )
}

export default App

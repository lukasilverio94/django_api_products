import axios from "axios";
import Homepage from "./pages/Homepage";
function App() {
  // Default URL axios
  axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

  return (
    <>
      <Homepage />
    </>
  );
}

export default App;

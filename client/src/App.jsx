import axios from "axios";
import Homepage from "./pages/Homepage";
import EditProduct from "./pages/EditProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // Default URL axios
  axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/edit-product/:productId"
          element={<EditProduct />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

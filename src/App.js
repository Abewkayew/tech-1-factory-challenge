
import './App.css';
import { Dashboard, Membership } from './components';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/membership" element={<Membership />}></Route>
    </Routes>
  );
}

export default App;

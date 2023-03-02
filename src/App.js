import { Route, Routes } from 'react-router-dom';
import CarDetails from './components/CarDetails';
import Cars from './components/Cars';
import AddCar from './components/AddCar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/add-car" element={<AddCar />} />
      </Routes>
    </div>
  );
}

export default App;

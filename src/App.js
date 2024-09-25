import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; 
import { Ejercicio1 } from './Ejercicio1';
import { Ejercicio2 } from './Ejercicio2';
import { Ejercicio3 } from './Ejercicio3';

const App = () => {
  return (
    <Provider store={store}> 
      <Router>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <h1 className="text-3xl font-bold mb-6">Giselle Rodriguez - Frontend Challenge</h1>
          <nav className="mb-4">
            <Link to="/ejercicio1" className="mx-2 text-blue-600 hover:underline">Ejercicio 1</Link>
            <Link to="/ejercicio2" className="mx-2 text-blue-600 hover:underline">Ejercicio 2</Link>
            <Link to="/ejercicio3" className="mx-2 text-blue-600 hover:underline">Ejercicio 3</Link>
          </nav>
          <Routes>
            <Route path="/ejercicio1" element={<Ejercicio1 />} />
            <Route path="/ejercicio2" element={<Ejercicio2 />} />
            <Route path="/ejercicio3" element={<Ejercicio3 />} />
            <Route path="*" element={<Navigate to="/ejercicio3" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

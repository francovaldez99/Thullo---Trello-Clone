import { Routes,Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage";
import Espaciodetrabajo from "./components/Espaciodetrabajo/Espaciodetrabajo";
import Navbar from "./components/Navbar/Navbar";
import { useLocation } from 'react-router-dom';
import Tablero from "./components/Tablero/Tablero";

function App() {
  const location = useLocation();
  
  return (
<>
{location.pathname!=="/" && <Navbar/>}
<Routes>
<Route path="/" element={<Landingpage/>}/>
<Route path="/espacio-de-trabajo" element={<Espaciodetrabajo/>}/>
<Route path="/tablero" element={<Tablero/>}/>

</Routes>

</>
  );
}

export default App;

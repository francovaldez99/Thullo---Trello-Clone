import { useNavigate } from "react-router-dom"

function Espaciodetrabajo() {
    const navigate=useNavigate()
  return (
    <div className="bg-slate-800 pb-8">
    <button onClick={()=>{navigate("/tablero")}}
    className="btn">ir a tablero</button>
    </div>
  )
}

export default Espaciodetrabajo
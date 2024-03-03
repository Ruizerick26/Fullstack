import { useContext } from "react"
import AuthContext from "../../context/AuthProvider"

export const CardPerfilPaciente = () => {
    const { auth } = useContext(AuthContext)
    return (
        <div className="bg-white border border-slate-200 h-auto p-4 
                        flex flex-col items-center justify-between shadow-xl rounded-lg">

            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/4715/4715329.png" alt="img-client" className="m-auto " width={120} height={120} />
            </div>
            <div className="self-start">
                <b>Nombre del Paciente:</b><p className="inline-block ml-3">{auth.nombre}</p>
            </div>
            <div className="self-start">
                <b>Nombre del Propietario:</b><p className="inline-block ml-3">{auth.propietario}</p>
            </div >
            <div className="self-start">
                <b>Email del Propietario:</b><p className="inline-block ml-3">{auth.emailP}</p>
            </div>
            <div className="self-start">
                <b>Celular del Propietario:</b><p className="inline-block ml-3">{auth.celular}</p>
            </div>
            <div className="self-start">
                <b>Convencional del Propietario::</b><p className="inline-block ml-3">{auth.convencional}</p>
            </div>
        </div>
    )
}
import logoDog from '../assets/dog-hand.webp'
import { Link } from 'react-router-dom'
import Mensaje from '../componets/Alertas/Mensaje'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Restablecer = () => {
    const { token } = useParams();
    const [mensaje, setMensaje] = useState({})
    const navigate = useNavigate();
	const [tokenback, setTokenBack] = useState(false)
    
	const verifyToken = async()=>{
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/recuperar-password/${token}`
            const respuesta = await axios.get(url)
						setTokenBack(true)
            setMensaje({respuesta:respuesta.data.msg,tipo:true})
        } catch (error) {
            setMensaje({respuesta:error.response.data.msg,tipo:false})
        }
    }
    useEffect(() => {
        verifyToken()
    }, [])

        const [form, setForm] = useState({
                password:"",
                confirmpassword:""
            })

        const handleChange = (e) => {
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                })
            }

        const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/nuevo-password/${token}`
            const respuesta = await axios.post(url,form)
            setForm({})
            setMensaje({respuesta:respuesta.data.msg,tipo:true})
						setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (error) { 
            setMensaje({respuesta:error.response.data.msg,tipo:false})
        }
    }


    return (
        <div className="flex flex-col items-center justify-center">

        {Object.keys(mensaje).length > 0 && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}
			<h1 className="text-3xl font-semibold mb-2 text-center uppercase  text-gray-500">Bienvenido de nuevo</h1>
      <small className="text-gray-400 block my-4 text-sm">Por favor ingresa tu información</small>
      <img className="object-cover h-80 w-80 rounded-full border-4 border-solid border-slate-600" src={logoDog} alt="image description" />
      {tokenback &&
          <form className='w-full' onSubmit={handleSubmit}>
              <div className="mb-1">
                  <label className="mb-2 block text-sm font-semibold">Contraseña</label>
                  <input type="password" placeholder="Ingresa tu contraseña nueva" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                      value={form.password || ""}
                      name='password'
                      onChange={handleChange}
                  />
                  <label className="mb-2 block text-sm font-semibold">Confirmar contraseña</label>
                  <input type="password" placeholder="Reingresa tu contraseña nueva" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                      value={form.confirmpassword || ""}
                      name='confirmpassword'
                      onChange={handleChange}
                  />
              </div>
              <div className="mb-3">
                  <button className="bg-gray-600 text-slate-300 border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-gray-900 hover:text-white">Enviar
                  </button>
              </div>
          </form>
      }

        </div>
    )
}

export default Restablecer

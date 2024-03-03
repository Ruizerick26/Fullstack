import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import Mensaje from '../componets/Alertas/Mensaje'
import { useForm } from 'react-hook-form';


export const Register = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const [form, setform] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
        email: "",
        password: ""
    })
    const [mensaje, setMensaje] = useState({})

    const handleChange = (e) => {
            setform({...form,
                [e.target.name]:e.target.value
            })
    }
    const onSubmit = async(e) => { 
        //e.preventDefault()
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/registro`
            const respuesta = await axios.post(url,form)
            setMensaje({respuesta:respuesta.data.msg,tipo:true})
            setform({})
        } catch (error) {
            setMensaje({respuesta:error.response.data?.errors[0].msg,tipo:false})
        }
    }

    return (
        <>
            <div className="bg-white flex justify-center items-center w-1/2">

                <div className="md:w-4/5 sm:w-full">

                    {Object.keys(mensaje).length>0 && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}
                    <h1 className="text-xl font-semibold mb-2 text-center uppercase  text-gray-500">Bienvenido</h1>
                    <small className="text-gray-400 block my-4 text-xs">Ingrese su información</small>

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="mb-3">
                            <label className="mb-2 block text-xs font-semibold" htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name='nombre'
                            {...register("nombre", {required : true})}
                            value={form.nombre || ""} onChange={handleChange}
                            placeholder="Ingresa tu nombre" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"/>
                            {errors.nombre?.type === 'required' && <p className="text-gray-400 my-2 text-xs">Campo requerido</p>}
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-xs font-semibold" htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" name='apellido'
                            {...register("apellido",{required: true})}
                            value={form.apellido || ""} onChange={handleChange}
                            placeholder="Ingresa tu apellido" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"/>
                            {errors.apellido?.type === 'required' && <p className="text-gray-400 my-2 text-xs">Campo requerido</p>}
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-xs font-semibold" htmlFor="direccion">Dirección</label>
                            <input type="text" id="direccion" name='direccion'
                            {...register("direccion", {required: true})}
                            value={form.direccion || ""} onChange={handleChange}
                            placeholder="Ingresa tu dirección" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"/>
                            {errors.direccion?.type === 'required' && <p className="text-gray-400 my-2 text-xs">Campo requerido</p>}
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-xs font-semibold" htmlFor="telefono">Teléfono:</label>
                            <input type="tel" id="telefono"  name='telefono'
                            {...register("telefono",{required: true})}
                            value={form.telefono || ""} onChange={handleChange}
                            placeholder="Ingresa tu teléfono" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"/>
                            {errors.telefono?.type === 'required' && <p className="text-gray-400 my-2 text-xs">Campo requerido</p>}
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-xs font-semibold" htmlFor="email">Email:</label>
                            <input type="email" id="email" name='email'
                            {...register("email",{required: true})}
                            value={form.email || ""} onChange={handleChange}
                            placeholder="Ingresa tu email" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"/>
                            {errors.email?.type === 'required' && <p className="text-gray-400 my-2 text-xs">Campo requerido</p>}
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-xs font-semibold" htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name='password'
                            {...register("password",{required:true})}
                            value={form.password || ""} onChange={handleChange}
                            placeholder="********************" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"/>
                            {errors.password?.type === 'required' && <p className="text-gray-400 my-2 text-xs">Campo requerido</p>}
                        </div>

                        <div className="mb-3">
                            <button className="bg-gray-500 text-slate-300 border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-gray-900 hover:text-white text-sm"  >Registrar
                            </button>
                        </div>
                    </form>

                    <div className="mt-5 text-xs border-b-2 py-4 ">
                    </div>
                    
                    <div className="mt-3 text-xs flex justify-between items-center">
                        <p>¿Ya tienes una cuenta?</p>
                        <Link to="/login" className="py-2 px-5 bg-gray-500 text-slate-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 ">Ingresar</Link>
                    </div>



                </div>

            </div>

            <div className="w-1/2 h-screen bg-[url('/public/images/dogregister.jpg')] 
            bg-no-repeat bg-cover bg-center sm:block hidden
            ">
            </div>
        </>
    )
}

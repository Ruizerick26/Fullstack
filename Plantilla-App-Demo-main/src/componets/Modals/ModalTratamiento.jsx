import { useContext, useState } from "react"
import TratamientosContext from "../../context/TratamientosProvider"


const ModalTratamiento = ({ idPaciente }) => {
    const {setModal, handleModal, registrarTratamientos} = useContext(TratamientosContext)

    const [form, setform] = useState({
        nombre: "",
        descripcion: "",
        prioridad: "",
        paciente:idPaciente
    })

    const handleChange = (e) => {
        setform({...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        registrarTratamientos(form)
        setModal(false)
    }


    return (
        <div className="lg:w-2/4 lg:h-3/5 bg-gray-800 bg-opacity-100 top-1/4 left-1/3 fixed sticky-0 rounded-lg overflow-y-scroll ">
            <p className='text-white uppercase font-bold text-lg text-center mt-4'>Tratamientos</p>
            <form className='p-10' onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor='nombre:'
                        className='text-white uppercase font-bold text-sm'>Nombre: </label>
                    <input
                        id='nombre'
                        type="text"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                        placeholder='nombre del tratamiento'
                        name='nombre'
                        value={form.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                <label
                    htmlFor='descripcion:'
                    className='text-white uppercase font-bold text-sm'>Descripción: </label>
                <textarea
                    id='descripcion'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='Descripción del tratamiento'
                    name='descripcion'
                    value={form.descripcion}
                    onChange={handleChange}
                />
                </div>

                <div>
                <label
                    htmlFor='prioridad:'
                    className='text-white uppercase font-bold text-sm'>Prioridad: </label>
                    <select
                        id='prioridad'
                        name='prioridad'
                        value={form.prioridad}
                        onChange={handleChange}
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'>
                        <option value="">--- Seleccionar ---</option>
                        <option value="Baja">Baja</option>
                        <option value="Media">Media</option>
                        <option value="Alta">Alta</option>
                    </select>

                </div>

                <div>
                    <label
                        className='text-white uppercase font-bold text-sm'>ID Paciente: </label>
                    <input
                        type="text"
                        disabled
                        value={idPaciente}
                        className='border-2 w-full p-2 mt-2 placeholder-gray-200 bg-slate-300 rounded-md mb-5'
                        name='paciente'
                        onChange={handleChange}
                    />
                </div>
                <div className='flex justify-center gap-5'>
                    <input
                    type="submit"
                    className='bg-green-700 px-6 
                    text-slate-300 rounded-lg 
                    hover:bg-green-900 cursor-pointer'
                    value='Registrar' />

                    <button className="sm:w-auto leading-3 text-center text-white px-6 py-4 rounded-lg bg-red-700 hover:bg-red-900"
					onClick={handleModal}>Cancelar</button>
                </div>

            </form>

        </div>
    )
}

export default ModalTratamiento
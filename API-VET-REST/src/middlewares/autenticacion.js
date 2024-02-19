import jwt from 'jsonwebtoken'
import Veterinario from '../models/veterinario.js'
import Paciente from '../models/Paciente.js'

const verificarAutenticacion = async (req,res,next)=>{

//VALIDAR SI SE ESTA ENVIANDO EL TOKEN
if(!req.headers.authorization) return res.status(404).json({msg:"Lo sentimos, debes proprocionar un token"})    
    //Destrusestructurar token
    const {authorization} = req.headers
    try {
        //verificar el token recuperado con el almacenado
        const {id,rol} = jwt.verify(authorization.split(' ')[1],process.env.JWT_SECRET)
        //verificar rol
        if (rol==="veterinario"){
            //obtener usuario
            req.veterinarioBDD = await Veterinario.findById(id).lean().select("-password")
            next()
        }
        else{
            req.pacienteBDD = await Paciente.findById(id).lean().select("-password")
            next()
        }
    } catch (error) {
        //capturar errores y presentarlos
        const e = new Error("Formato del token no válido")
        return res.status(404).json({msg:e.message})
    }
}

export default verificarAutenticacion
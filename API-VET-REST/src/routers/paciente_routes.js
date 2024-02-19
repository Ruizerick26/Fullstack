import {Router} from 'express'
const router = Router()
import {
    actualizarPaciente,
    detallePaciente,
    eliminarPaciente,
    listarPacientes,
    registrarPaciente,
    loginPaciente,
    perfilPaciente 
} from "../controllers/paciente_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";

router.post('/paciente/login',loginPaciente)
router.get('/paciente/perfil',verificarAutenticacion,perfilPaciente)
router.get("/pacientes",verificarAutenticacion,listarPacientes);
router.get("/paciente/:id",verificarAutenticacion, detallePaciente);
router.post("/paciente/registro", verificarAutenticacion,registrarPaciente);
router.put("/paciente/actualizar/:id", verificarAutenticacion,actualizarPaciente);
router.delete("/paciente/eliminar/:id", verificarAutenticacion,eliminarPaciente);
export default router
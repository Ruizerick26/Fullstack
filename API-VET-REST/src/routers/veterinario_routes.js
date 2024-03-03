import {Router} from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'
import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";
import { validacionVeterinario } from '../middlewares/validacionVeterinario.js';

//rutas
const router = Router()


//publicas 
router.post("/login", login);
router.post("/registro",validacionVeterinario, registro);
router.get("/confirmar/:token", confirmEmail);
router.get("/veterinarios", listarVeterinarios);
router.post("/recuperar-password", recuperarPassword);
router.get("/recuperar-password/:token", comprobarTokenPasword);
router.post("/nuevo-password/:token", nuevoPassword);


//privadas
router.get("/perfil",verificarAutenticacion, perfil);
router.put('/veterinario/actualizarpassword',verificarAutenticacion,actualizarPassword)
router.get("/veterinario/:id",verificarAutenticacion ,detalleVeterinario);
router.put("/veterinario/:id",verificarAutenticacion ,actualizarPerfil);


export default router
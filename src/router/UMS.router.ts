import {Router} from "express";
import { createUMS, getAllUMS, getUMSById, getUMSByEmail,
     getUMSByAge,
     getUMSByRple,
     checkPassAndEmil,
     updatePass,
     JYear,
     getJy
     } from "../controler/UMS.controler";
const router = Router()

router.post('/', createUMS )
router.get('/', getAllUMS )
router.get('/:id', getUMSById )
router.post('/byEmail', getUMSByEmail )
router.post('/byage', getUMSByAge )
router.post('/byRole', getUMSByRple )
router.post('/check', checkPassAndEmil )
router.put('/:id', updatePass )
router.post('/jy/:id', JYear )
router.post('/jy', getJy )

export default router
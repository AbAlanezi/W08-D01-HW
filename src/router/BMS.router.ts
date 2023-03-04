import {createBMS, getBMS, createBook, getBooks, getLoans, createLoan, getLoan, getAllBUserLoanBook} from '../controler/BMS.controler'
import validate from '../middileware/validate'
import {BMStyeps} from '../zodSchema/zod.BMS'
import Router from 'express'

const router = Router()

router.post('/', createBMS)
router.get('/', getBMS)
router.post('/book', createBook)
router.get('/book', getBooks)
router.get('/loans', getLoans)
router.post('/loan', createLoan)
router.get('/loan',validate(BMStyeps), getLoan)
router.post('/loan2', getAllBUserLoanBook)


export default router
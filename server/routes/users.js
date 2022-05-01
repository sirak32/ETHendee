import express  from "express";
import passport from "passport";
import {displayAll,registerOfficer,checkRole,registerSupplier,loginAdmin,loginSupplier,loginOfficer,displayDashboard, userLogin, userAuth} from '../controllers/users.js'
const router = express.Router()

/** *
 *  @DESC registration routes for different 
 */
router.post('/supplier-registration', registerSupplier)
router.post('/officer-registration', registerOfficer)


/** *
 * @DESC login routes for different 
 */
router.post('/supplier-login', async (req, res) => {
   await userLogin(req.body, 'supplier', res)
})
router.post('/admin-login', async (req, res) => {
   await userLogin(req.body, 'admin', res)
})
router.post('/officer-login', async (req, res) => {
   await userLogin(req.body, 'officer', res)
})
// router.post('/supplier-login',loginSupplier)

/** *
 * @DESC registration routes for different 
 */

router.get('/admin-dashboard', passport.authenticate("jwt-bearer", {
   session: false
}), checkRole(['admin']), displayDashboard)

router.get('/officer-dashboard', passport.authenticate("jwt-bearer", {
   session: false
}), checkRole(['officer']), displayDashboard)

router.get('/supplier-dashboard', passport.authenticate("jwt-bearer", {
   session: false
}), checkRole(['supplier']), displayDashboard)

router.get('/all', displayAll)
export default router

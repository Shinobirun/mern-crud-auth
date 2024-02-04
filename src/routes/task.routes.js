import {Router} from 'express'
import {authRequire} from '../middlewares/validateToken.js';
import {getTasks, getTask, createTask, updateTask, deleteTask} from '../controllers/task.controllers.js'

const router= Router();

router.get('/task',authRequire,getTasks )
router.post('/task/',authRequire, createTask)
router.delete('/task/:id',authRequire, deleteTask)
router.get('/task/:id',authRequire,getTask)
router.put('/task/:id',authRequire, updateTask)

export default router
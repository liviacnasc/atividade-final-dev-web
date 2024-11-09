import express from 'express';
import TurmasController from '../controllers/turmas.js';
import AlunosController from '../controllers/alunos.js';

const turmasRouter = express.Router();

const turmasController = new TurmasController();
const alunosController = new AlunosController();

turmasRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await turmasController.getTurmas();

    res.status(statusCode).send({success, statusCode, body});
})

turmasRouter.post('/', async (req, res) => {
    const { success, statusCode, body } = await turmasController.addTurma(req.body);

    res.status(statusCode).send({ success, statusCode, body });
})

turmasRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await turmasController.deleteTurma(req.params.id);

    res.status(statusCode).send({ success, statusCode, body});
})

turmasRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await turmasController.updateTurma(req.params.id, req.body);

    res.status(statusCode).send({ success, statusCode, body });
})

export default turmasRouter;

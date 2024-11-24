import express from 'express';
import AlunosController from '../controllers/alunos.js';

const alunosRouter = express.Router();

const alunosController = new AlunosController();

alunosRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await alunosController.getAlunos();

    res.status(statusCode).send({success, statusCode, body});
})

alunosRouter.post('/adicionar-aluno', async (req, res) => {
    const { success, statusCode, body } = await alunosController.addAluno(req.body);

    res.status(statusCode).send({ success, statusCode, body });
})

alunosRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await alunosController.deleteAluno(req.params.id);

    res.status(statusCode).send({ success, statusCode, body});
})

alunosRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await alunosController.updateAluno(req.params.id, req.body);

    res.status(statusCode).send({ success, statusCode, body });
})

alunosRouter.get('/:id', async (req, res) => {
    const { success, statusCode, body } = await alunosController.getAlunoById(req.params.id);

    res.status(statusCode).send({ success, statusCode, body });
})

export default alunosRouter;

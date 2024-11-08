import express from 'express';
import UsersController from '../controllers/users.js';

const usersRouter = express.Router();

const usersController = new UsersController();

usersRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await usersController.getUsers();

    res.status(statusCode).send({success, statusCode, body});
})

usersRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await usersController.deleteUser(req.params.id);

    res.status(statusCode).send({ success, statusCode, body});
})

usersRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await usersController.updateUser(req.params.id, req.body);

    res.status(statusCode).send({ success, statusCode, body });
})

export default usersRouter;

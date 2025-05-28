import express, { Express } from 'express';
import { getHomepage, getCreateUserPage, postCreateUser } from '../controllers/user.controllers';
const router = express.Router();
const webRoutes = (app: Express) => {
    router.get('/', getHomepage);
    router.get('/create-user', getCreateUserPage);
    router.post('/handle-create-user', postCreateUser);
    app.use('/', router);
}
export default webRoutes;

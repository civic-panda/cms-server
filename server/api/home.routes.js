import { Router } from 'express';
import * as HomeController from '../controllers/home.controller';

const router = new Router();

router.route('/posts').get(HomeController.getPosts);
router.route('/users').get(HomeController.getUsers);

export default router;

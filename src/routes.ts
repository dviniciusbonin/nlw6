import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController()
const listUserSenderComplimentsController = new ListUserSenderComplimentsController()
const listTagController = new ListTagController()

const listUserController = new ListUserController()

router.post('/auth', authenticateUserController.handle);

router.post('/users', ensureAuthenticate, createUserController.handle);

router.get('/users', ensureAuthenticate, ensureAdmin, listUserController.handle)

router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle);

router.get('/tags', ensureAuthenticate, listTagController.handle)

router.post('/compliments', ensureAuthenticate, createComplimentController.handle);

router.get('/users/compliments/send', ensureAuthenticate, listUserSenderComplimentsController.handle)

router.get('/users/compliments/received', ensureAuthenticate, listUserReceivedComplimentsController.handle)


export { router }
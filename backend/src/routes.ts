import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlerwares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreatComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlerwares/enrureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const creatComplimentController = new CreatComplimentController();
const listUserReceiverComplimentController = new ListUserReceiverComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagController = new ListTagController();
const listUsersController = new ListUserController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, creatComplimentController.handle);
router.get("/users/complements/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/complements/receiver", ensureAuthenticated, listUserReceiverComplimentController.handle);
router.get("/tags", ensureAuthenticated, listTagController.handle)
router.get("/ListeUsers", ensureAuthenticated, listUsersController.handle);

export {router};
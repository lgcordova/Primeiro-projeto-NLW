import { EntityRepository, Repository } from "typeorm"
import { User } from "../entities/User.js";


@EntityRepository(User)
export class UserRepositories extends Repository<User>{}


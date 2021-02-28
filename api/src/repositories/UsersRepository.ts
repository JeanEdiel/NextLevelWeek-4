import { EntityRepository, Repository } from "typeorm";
import { UserModel } from "../models/UserModel";

@EntityRepository(UserModel)
class UsersRepository extends Repository<UserModel> { }

export { UsersRepository };

import { EntityRepository, Repository } from "typeorm";
import { SurveyUserModel } from "../models/SurveyUserModel";

@EntityRepository(SurveyUserModel)
class SurveysUsersRepository extends Repository<SurveyUserModel> { }

export { SurveysUsersRepository };

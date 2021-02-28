import { EntityRepository, Repository } from "typeorm";
import { SurveyModel } from "../models/SurveyModel";

@EntityRepository(SurveyModel)
class SurveysRepository extends Repository<SurveyModel> { }

export { SurveysRepository };

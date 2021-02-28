import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController
{

    // http://localhost:3333/answers/5?u=f1fdd181-abc0-4ba0-8ad4-ac92684529a8
    /**
     * Route Params => Parametros que compoe a rota "/"
     * routes.get('/answers/:value')
     *
     * Query Params => Paramtros utilizados para busca, paginacao, *não obrigatórios* "?"
     * chave=valor
     */

    async execute(request: Request, response: Response)
    {
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });

        if (!surveyUser) {
            throw new AppError("Survey User does not exists!");
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.status(200).json(surveyUser);
    }
}

export { AnswerController };

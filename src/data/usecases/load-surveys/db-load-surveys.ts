import { LoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys-repository'
import { SurveyModel } from '@/domain/models/survey'
import { LoadSurveys } from '@/domain/usecases/load-surveys'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveyRespository: LoadSurveysRepository) {}

  async load (): Promise<SurveyModel[]> {
    const surveys = await this.loadSurveyRespository.loadAll()
    return surveys
  }
}

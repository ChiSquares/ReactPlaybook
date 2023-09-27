import { DataResponseModel, QuestionQueryParams, StartSurveyModel, SurveyConsentModel, SurveyItemModel, SurveyModel, SurveyResponse, SurveyTakerModel } from '@/models';
import { PROJECT_SERVICE, QUESTIONNAIRE_SERVICE, SURVEY_SERVICE } from '../api-url';
import { getDeviceId } from './device-helper-service';
import HttpService from './http-service';

const getSurveyInfo = async (id: number): Promise<DataResponseModel<SurveyModel>> => {
    var response = await HttpService.baseHttp(PROJECT_SERVICE).get<DataResponseModel<SurveyModel>>(`Projects/GetSurveyInfo/${id}`);

    return response.data as DataResponseModel<SurveyModel>;
}

const getSurveyConsent = async (id: number, lang?: string): Promise<DataResponseModel<SurveyConsentModel>> => {
    var response = await HttpService.baseHttp(QUESTIONNAIRE_SERVICE).get<DataResponseModel<SurveyConsentModel>>(`Projects/GetSurveyConsents/${id}&lang=${lang}`);

    return response.data as DataResponseModel<SurveyConsentModel>;
}

const startSurvey = async (model: StartSurveyModel): Promise<DataResponseModel<SurveyTakerModel>> => {
    if (model) {
        model.deviceId = await getDeviceId();
        model.channel = 'SurveyWeb';
    }

    var response = await HttpService.baseHttp(SURVEY_SERVICE).post<DataResponseModel<SurveyTakerModel>>(`SurveyResponses/StartSurvey`, model);
    return response.data as DataResponseModel<SurveyTakerModel>;
}

const getSurveyItem = async (surveyId: number, lastQuestionId?: string, isPrevious?: boolean): Promise<DataResponseModel<SurveyItemModel>> => {
    const query: QuestionQueryParams = {
        surveyId,
        lastQuestionId,
        isPrevious
    };

    let queryString = HttpService.buildQueryString(query);
    let endpoint = `Questions/GetSurveyItem`;
    let separator = queryString == '' ? '' : endpoint.includes('?') ? '&' : '?';
    var response = await HttpService.baseHttp(QUESTIONNAIRE_SERVICE).get<DataResponseModel<SurveyItemModel>>(`${endpoint}/${separator}${queryString}`);
    return response.data as DataResponseModel<SurveyItemModel>;
}

const addResponse = async (model: SurveyResponse): Promise<DataResponseModel<SurveyTakerModel>> => {
    if (model) {
        model.deviceId = await getDeviceId();
        model.channel = 'SurveyWeb';
    }

    var response = await HttpService.baseHttp(SURVEY_SERVICE).post<DataResponseModel<SurveyTakerModel>>(`SurveyResponses/AddResponse`, model);
    return response.data as DataResponseModel<SurveyTakerModel>;
}

const SurveyService = { 
    getSurveyInfo,
    getSurveyConsent,
    startSurvey,
    getSurveyItem,
    addResponse
}

export default SurveyService;
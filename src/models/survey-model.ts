import { QuestionModel } from "./question-model";

export class SurveyModel {
    public id: number;
    public title: string;
    public uniqueID: string;
    public description: string;
    public targetEndDate: Date | string;
    public country: string;
    public language: string;
    public requireConsent: boolean; // Set to true when user Accpet consent
    public status: string;
}

export class SurveyConsentModel {
    public surveyId: number;
    public title: string;
    public content: string;
}

export class StartSurveyModel {
    public projectid: number;
    public participantId: string; // Invitation Id
    public sessionKey: string;
    public country: string;
    public language: string;
    public acceptConsent: boolean; // Set to true when user Accpet consent
    public above18: boolean; // Set to true when user Accpet consent
    public channel?: string;
    public deviceId?: string;
    public refererSource: string;
}

export class SurveyTakerModel {
    public projectid: number;
    public participantId: string; // Invitation Id
    public sessionKey: string;
    public country: string;
    public language: string;
    public lastQuestionId: string; // ID of the last answered question
    public channel?: string;
    public deviceId?: string;
}

export class SurveyResponse {
    public sessionId: string;
    public question: QuestionModel;
    public answers: Array<AnswerModel> = [];
    public channel?: string;
    public deviceId?: string;
}

export class AnswerModel
{
    public questionId: string;
    public optionId: string;
    public optionValue: string;
    public valueFormat: string; // | number | boolean;
    public label: string;
    public anchor: number;
    public unit: string; // in case the response has unit value
    public mediaUrl: string;
    public mediaType: string;
}

export class SurveyItemModel {
    public question: QuestionModel;
    public position: number;
    public total: number;
    public hasPrevious: number;
    public hasNext: number;
}

import { QuestionModel } from "./question-model";

export class SurveyTakerModel {
    public projectid: number;
    public participantId: string; // Invitation Id
    public sessionKey: string;
    public country: string;
    public language: string;
    public lastQuestionId: string; // ID of the last answered question
    public channel: string;
    public deviceId: string;
}

export class SurveyResponse {
    public sessionId: string;
    public question: QuestionModel;
    public answers: Array<AnswerModel> = [];
    public channel: string;
    public deviceId: string;
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

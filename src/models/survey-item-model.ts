import { QuestionModel } from "./question-model";

export class SurveyItemModel {
    
    public question: QuestionModel;
    public position: number;
    public total: number;

    public hasPrevious: number;

    public hasNext: number;
}

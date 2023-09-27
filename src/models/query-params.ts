
export class QuestionQueryParams
{
    public surveyId: number;
    public lastQuestionId?: string; // Indicate the last selected question
    public isPrevious?: boolean; // indicate if to fetch previous question
}

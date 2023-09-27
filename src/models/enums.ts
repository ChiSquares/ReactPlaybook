export enum ProjectStatusEnum {
    Initiated,
    Pending,
    Ongoing,
    Completed,
    Published,
    Archived,
    Cancelled,
    CLosed
}

export enum QuestionTypeEnum {
    // Single Response
    MCQ = 'MCQ',
    LikertScale = 'LikertScale',
    SlidingScale = 'SlidingScale',
    Matrix = 'Matrix',
    Yes_Or_No = 'Yes_Or_No',
    // Multiple Response
    MultipleResponse = 'MultipleResponse',
    // Item Matching Question
    ItemToOptionMatching = 'ItemToOptionMatching',
    SingleValueText = 'SingleValueText',
    MultiLineText = 'MultiLineText',
    Multimedia = 'Multimedia',
    SimpleRanking = 'SimpleRanking',
    DiscreteChoice = 'DiscreteChoice',
    RandomizedTrial = 'RandomizedTrial',
    AB_Test = 'AB_Test',
    //Open Ended Questions
    OneValueText = 'OneValueText'
    //Randomized Allocation

}

export enum QuestionBodyType {
    Header = 'Header',
    Footer = 'Footer'
}

export const QuestionTypeList = new Map<QuestionTypeEnum | number, string>([
    [QuestionTypeEnum.MCQ, 'MCQ'],
    [QuestionTypeEnum.LikertScale, 'Likert Scale'],
    [QuestionTypeEnum.SlidingScale, 'Sliding Scale'],
    [QuestionTypeEnum.Matrix, 'Matrix'],
    [QuestionTypeEnum.Yes_Or_No, 'Yes/No'],
    [QuestionTypeEnum.MultipleResponse, 'Multiple Responses'],
    [QuestionTypeEnum.SingleValueText, 'Single Value Textr'],
    [QuestionTypeEnum.MultiLineText, 'Multi-Line Text Response'],
    [QuestionTypeEnum.Multimedia, 'Multimedia Response (audio, video, photo)'],
    [QuestionTypeEnum.SimpleRanking, 'Simple Rank Ordering'],
    [QuestionTypeEnum.DiscreteChoice, 'Discrete Choice Experiment'],
    [QuestionTypeEnum.RandomizedTrial, 'Randomized Trial'],
    [QuestionTypeEnum.AB_Test, 'A/B Test of survey question'],
    [QuestionTypeEnum.OneValueText, 'One-Value Text Response'],
    [QuestionTypeEnum.ItemToOptionMatching, 'Item-to-option matching'],
]);

export enum SurveyTypeEnum {
    CrossSectional = 'CrossSectional',
    Longitudinal = 'Longitudinal'
}

export const SurveyTypeList = new Map<SurveyTypeEnum | number, string>([
    [SurveyTypeEnum.CrossSectional, 'Cross-Sectional'],
    [SurveyTypeEnum.Longitudinal, 'Longitudinal']
]);

export enum FollowUpInterval
{
    Month = 1,
    Year
}

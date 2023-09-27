import { BaseStringModel } from "./base-model";
import { QuestionTypeEnum, QuestionBodyType } from "./enums";

export class QuestionModel extends BaseStringModel {
	projectId?: number; //  foreign key to the Project ID
	userId?: number; //  foreign key to the user ID
	questionType: QuestionTypeEnum | string;
	questionText: string;
	instructions?: string; // Additional Instructions
	label?: string;
	required?: boolean;
	position?: number; // Question Position
	media?: QuestionMediaModel[] = [];
	// Options (MCQ, Linkert Scale, Yes/No, Multiple Responses, One Value Text, Simple Rank Ordering)
	options?: QuestionOptionModel[] = [];
	// SlidingScale
	slidingScale?: SlidingScaleOptionModel;
	// Matrix
	// matrix?: MatrixOptionModel;

	setting?: QuestionSettingModel;
}

export class QuestionOptionModel {
	id?: number;
	questionId?: number;
	optionValue?: string;
	displayText?: string; // for display only
	label?: string;
	anchor?: number; // Order,
	color?: string;
	unit?: string; // in case the response has unit value
	hasMedia?: boolean;
	media?: QuestionMediaModel; // in case the response has a media
}

export class SlidingScaleOptionModel {
	id?: number;
	questionId?: number;
	min: number;
	max: number;
	step: number;
	initial: number;
	// Tags
	minTag: string;
	maxTag: string;
}

export class MatrixOptionModel {
	id?: number;
	questionId?: number;
	label?: string;
	row?: string;
	limit?: number;
}

export class QuestionMediaModel {
	mediaType?: "image" | "audio" | "video" | "document" | "others" | string; // type of media
	mediaName: string;
	mediaUrl: string;
	mediaSize: number;
	mediaFormat: string; // File extension
	position: "left" | "right" | "center";
}

export class QuestionSettingModel {
	id?: number;
	questionId?: number;
	// MCQ and Others
	isMultipleOption?: boolean;
	optionLimit: number;
	rotateOptions: boolean;


	// Linkert Scale
	linkertScalePoint: number;
	linkertScaleColor: boolean;
	linkertScaleReverse: boolean;

	// Media Response Options
	responseMediaType: string; // same as QuestionMediaModel.mediaType

	// Matrix
	matrixRowCount?: number;
	matrixColumns?: Array<string> = [];

	// Item to option matching
	useMediaAsOption: boolean;
}

export class QuestionMenuModel {
	title: string;
	questionTypes?: QuestionSubTypeModel[] = [];
	expanded?: boolean;
}

export class QuestionSubTypeModel {
	questionType?: QuestionTypeEnum | QuestionBodyType | string;
	icon?: any;
	description?: string;
	selected?: boolean;
	header?: string;
}

export type ScaleOption = {
	scale: number;
	label: string[];
	colors: string[];
	title: string;
};

export const ScaleOptionList: ScaleOption[] = [
	{
		scale: 4,
		label: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
		colors: ["#B715B7", "#D36FD3", "#749EE2", "#3F7AD8"],
		title: "4 point scale",
	},
	{
		scale: 4.5,
		label: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
		colors: ["#B715B7", "#D36FD3", "#749EE2", "#3F7AD8"],
		title: "4 point scale with Don't Know",
	},
	{
		scale: 5,
		label: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
		colors: ["#B715B7", "#D36FD3", "#FFFFFF", "#749EE2", "#3F7AD8"],
		title: "5 point scale",
	},
	{
		scale: 5.5,
		label: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
		colors: ["#B715B7", "#D36FD3", "#FFFFFF", "#749EE2", "#3F7AD8"],
		title: "5 point scale with Don't Know",
	},
	{
		scale: 7,
		label: ["Strongly Disagree", "Disagree", "Somewhat Disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly Agree"],
		colors: ["#B715B7", "#D36FD3", "#E5A9E5", "#FFFFFF", "#9FBCEB", "#749EE2", "#3F7AD8"],
		title: "7 point scale",
	},
	{
		scale: 7.5,
		label: ["Strongly Disagree", "Disagree", "Somewhat Disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly Agree"],
		colors: ["#B715B7", "#D36FD3", "#E5A9E5", "#FFFFFF", "#9FBCEB", "#749EE2", "#3F7AD8"],
		title: "7 point scale with Don't Know",
	},
	{
		scale: 10,
		label: ["Strongly Disagree", "Disagree", "Somewhat Disagree", "Slightly Disagree", "Neutral", "Slightly Agree", "Somewhat Agree", "Agree", "Strongly Agree"],
		colors: ["#B715B7", "#D36FD3", "#E5A9E5", "#EEC8EE", "#FFFFFF", "#C8D9F4", "#9FBCEB", "#749EE2", "#3F7AD8"],
		title: "10 point scale",
	},
	{
		scale: 10.5,
		label: ["Strongly Disagree", "Disagree", "Somewhat Disagree", "Slightly Disagree", "Neutral", "Slightly Agree", "Somewhat Agree", "Agree", "Strongly Agree"],
		colors: ["#B715B7", "#D36FD3", "#E5A9E5", "#EEC8EE", "#FFFFFF", "#C8D9F4", "#9FBCEB", "#749EE2", "#3F7AD8"],
		title: "10 point scale with Don't Know",
	},
];

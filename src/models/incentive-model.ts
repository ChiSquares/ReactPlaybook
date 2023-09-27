import { BaseModel } from "./base-model";

export class IncentiveModel extends BaseModel{
    projectId: number;
    participantId: string;
    participantEmail: string;
}

export class PayoutModel extends BaseModel{
    ProjectId?: number;
    StartDate?: Date;
    EndDate?: Date;
    SearchKeyword?: string;
    PageNumber: number;
    PageSize: number;
}
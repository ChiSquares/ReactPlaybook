export class ResponseModel {
    status?: boolean;
    message?: string;
    code?: number;
    errors?: Record<string, string[]>; // any[] = [];
}

export class DataResponseModel<T> extends ResponseModel {
    data?: T;
}

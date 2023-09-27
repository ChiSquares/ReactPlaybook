import { INCENTIVES_SERVICE } from '../api-url';
import HttpService from './http-service';
import { DataResponseModel, ResponseModel } from '@/models';
import { IncentiveModel, PayoutModel } from '@/models/incentive-model';

const basePath = 'Incentives';

const enrollIncentive = async (incentive: IncentiveModel): Promise<ResponseModel> => {

    var response = await HttpService.baseHttp(INCENTIVES_SERVICE).post<ResponseModel>(`${basePath}/Enroll`, incentive);

    return response.data as ResponseModel;
}

const payoutsIncentive = async (payouts: PayoutModel): Promise<DataResponseModel<ResponseModel>> => {
    var response = await HttpService.baseHttp(INCENTIVES_SERVICE).get<DataResponseModel<ResponseModel>>(`${basePath}/Payouts`,payouts);
    return response.data as DataResponseModel<ResponseModel>;
}


const getIncentive = async (id: number): Promise<DataResponseModel<ResponseModel>> => {
    var response = await HttpService.baseHttp(INCENTIVES_SERVICE).get<DataResponseModel<ResponseModel>>(`${basePath}/Payouts/${id}`);
    return response.data as DataResponseModel<ResponseModel>;
}

const IncentiveService = {
    enrollIncentive,
    getIncentive,
    payoutsIncentive,
}

export default IncentiveService;
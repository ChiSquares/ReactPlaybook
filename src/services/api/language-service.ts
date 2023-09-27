import { CountryModel, LanguageModel } from '@/models';
import { CONFIG_SERVICE } from '../api-url';
import HttpService from './http-service';

const basePath = 'languages';

const getLanguageList = async (): Promise<LanguageModel[]> => {
    var response = await HttpService.baseHttp(CONFIG_SERVICE).get<LanguageModel[]>(`${basePath}`);
    return response.data as LanguageModel[] || [];
}

const getByCountry = async (countryCode: string): Promise<LanguageModel[]> => {
    var response = await HttpService.baseHttp(CONFIG_SERVICE).get<LanguageModel[]>(`${basePath}?countryCode=${countryCode}`);
    return response.data as LanguageModel[] || [];
}

const LanguageService = { 
    getLanguageList, 
    getByCountry
}

export default LanguageService;
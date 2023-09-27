import { CountryModel } from '@/models';
import { CONFIG_SERVICE } from '../api-url';
import HttpService from './http-service';

const basePath = 'countries';
const APIkey:string = '234y15rhun5465t23423yj57sdfyhnu' 
const getCountryList = async (): Promise<CountryModel[]> => {
    var response = await HttpService.baseHttp(CONFIG_SERVICE).get<CountryModel[]>(`${basePath}`);
    return response.data as CountryModel[] || [];
}

const getCountryByCode = async (code: string): Promise<CountryModel> => {
    var response = await HttpService.baseHttp(CONFIG_SERVICE).get<CountryModel>(`${basePath}/GetByCode/${code}`);

    return response.data as CountryModel;
}

const getCountryByPosition = async (latitude: number, longitude: number): Promise<CountryModel> => {
    let url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
    console.log(url);
    return null as any;
}

const CountryService = { 
    getCountryList, 
    getCountryByCode,
    getCountryByPosition
}

export default CountryService;
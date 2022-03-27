import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from "axios";

interface IAxiosConfig {
    baseURL: string;
    headers?: any;
    timeout: number;
}

const axiosConfig: IAxiosConfig = {
    baseURL: 'https://dororodoroddo.github.io/static/',
    timeout: 30000,
}


export default class AxiosApi {
    private static instance: AxiosInstance;

    public static getInstance () { 
        if (!AxiosApi.instance){
            new this()
        }
        return AxiosApi.instance 
    }

    private constructor () {
        AxiosApi.instance = axios.create(axiosConfig);

        AxiosApi.instance.interceptors.request.use(
            function (config: AxiosRequestConfig) {
                console.log(config);
                
                return config;
            },
            function (error: AxiosError) {
                return Promise.reject(error);
            }
        )

        AxiosApi.instance.interceptors.response.use(
            function (config: AxiosResponse) {
                console.log(config);
                return config;
            },
            function (error: AxiosError) {
                return Promise.reject(error);
            }
        )
    } 

}
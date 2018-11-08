import http from './request';

export const GetCitiesList = () => {
    return http('get', 'cities');
}
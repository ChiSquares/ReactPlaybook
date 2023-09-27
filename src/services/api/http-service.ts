import { ApisauceInstance, create } from 'apisauce';

// define the api
const baseHttp = (baseUrl: string, ignoreAuth: boolean = false, isUpload: boolean = false): ApisauceInstance => {
  const api = create({
    baseURL: baseUrl,
    headers: {
      Accept: 'application/json' // 'text/plain'
    },
  });

  // Request interceptor for API calls
  api.axiosInstance.interceptors.request.use(
    async config => {
      const headers = (config.headers);
      // headers['Content-Type'] = (isJson) ? 'application/json' : 'multipart/form-data';
      if (isUpload) {
        headers['Content-Type'] = 'multipart/form-data';
      } else {
        headers['Content-Type'] = 'application/json';
      }

      if (!ignoreAuth) {
        const jwtoken = localStorage.getItem('_csq_surveyToken'); // AuthData.getAccessToken();
        if (jwtoken) {
          headers['Authorization'] = `Bearer ${jwtoken}`;
        }
        // }
      }

      config.headers = headers;
      return config;
    },
    error => {
      Promise.reject(error);
    });

  // Response interceptor for API calls
  api.axiosInstance.interceptors.response.use((response) => {
    return response
  }, async function (error) {
    // const originalRequest = error.config;
    // if (!ignoreAuth && (error.response.status === 403 && !originalRequest._retry)) {
    //   originalRequest._retry = true;
    //   const token = AuthData.getAccessToken();
    //   const refresh_token = AuthData.getRefreshToken();
    //   const accessToken = await AuthService.reissueNewToken(token, refresh_token);
    //   if (accessToken) {
    //     api.axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
    //     return api.axiosInstance(originalRequest);
    //   }
    // }

    // TODO: Handle other errors
    return Promise.reject(error);
  });

  return api;
}

const buildQueryString = (query?: any): string => {
  let queryString = '';
  if (query) {
    queryString = Object.keys(query)
      .filter((x) => query[x] != null && query[x] != undefined && query[x] != 'null' && query[x] != '')
      .map((key) => {
        if (Array.isArray(query[key])) {
          var param = '';
          query[key].forEach((item: any) => {
            param = `${param}${encodeURIComponent(key)}` + '=' + encodeURIComponent(item) + '&';
          });
          return param;
        } else {
          return (encodeURIComponent(key) + '=' + encodeURIComponent(query[key]));
        }
      })
      .join('&');
  }
  return queryString;
}

const HttpService = {
  baseHttp,
  buildQueryString
};

export default HttpService;

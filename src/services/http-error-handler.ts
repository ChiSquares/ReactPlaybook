import { ResponseModel } from "@/models/response-model";

export const handleHttpError = (error: any): ResponseModel => {
    var response: ResponseModel = {
      status: false
    };
    if (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
  
        response = error.response.data as ResponseModel || {};
        if (response?.code) {
          response.code = error.response.status;
        }
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        response.message = error.request.responseText || error.request.statusText;
        response.code = error.request.status;
        // console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        response.message = error.message;
        // console.log('Error', error.message);
      }
      console.log(error.config);
    }
  
    if (!response?.message) {
      response.message = 'Unknown error occured. Please try again';
    }
  
    return response;
  }
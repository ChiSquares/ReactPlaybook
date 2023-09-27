import {configureStore} from '@reduxjs/toolkit';
import surveyReducer from './SurveySlice';

export default configureStore({
    reducer: {
        survey: surveyReducer
    }
  })
import { useDispatch } from 'react-redux';
import { setSurvey } from '../config/SurveySlice';

function useSetSurvey() {
    const dispatch = useDispatch();
    
    const addSurveyToStore = (surveyInfo) => {
        dispatch(setSurvey(surveyInfo));
    };
    return { addSurveyToStore };
}

export default useSetSurvey;
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handleHttpError } from '../utils/httpError';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../config/SurveySlice';
import useLoading from './useLoading';
import useSetSurvey from './useSetSurvey';
import useSetSessionId from './useSetSessionId';

function useStartSurvey() {
    const loading = useLoading();
    const addSurvey = useSetSurvey();
    const navigate = useNavigate();
    const sessionId = useSetSessionId()

    const validateSurvey = async (surveyId: number) => {
        try {
            loading.startLoading();

            const response = await SurveyService.getSurveyInfo(surveyId);

            if (response?.status) {
                addSurvey.addSurveyToStore(response?.data);
                sessionId.addSessionId(response?.data?.sessionKey);

                return response?.data
            } else {
                toast.error(response?.message);
            }
            loading.stopLoading();
            
        } catch (error) {
            const response = handleHttpError(error);
            if (response?.code === 404) {
                navigate('/404');
            }
            toast.error(response?.message);
            loading.stopLoading();
            
        }
    };

    return { validateSurvey };
}

export default useStartSurvey;
//validate survey - params: surveyId, participantId, language
//welcome page - start survey, call method from hook - api to start survey if success, store in store
//change language - change language in store
//response: session

import { useDispatch } from 'react-redux';
import { setSession } from '../config/SurveySlice';

function useSetSessionId() {

  const dispatch = useDispatch();
    
  const addSessionId = (sessionId: string) => {
        dispatch(setSession(sessionId));
        return ;
    }
    return { addSessionId };
}

export default useSetSessionId;
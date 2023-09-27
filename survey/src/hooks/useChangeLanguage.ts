import { useDispatch } from 'react-redux';
import { setChangeLanguage } from '../config/SurveySlice';


function useChangeLanguage(){
    const dispatch = useDispatch();

    const changeLanguage = (language) => {
        dispatch(setChangeLanguage(language));
    }
   return { changeLanguage };
}

export default useChangeLanguage;
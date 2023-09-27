import { useDispatch } from 'react-redux';
import { setIsLoading } from '../config/SurveySlice';

function useLoading() {
    const dispatch = useDispatch();

  const startLoading = () => {
    dispatch(setIsLoading(true));
  };

  const stopLoading = () => {
    dispatch(setIsLoading(false));
  };

  return { startLoading, stopLoading };
}

export default useLoading;
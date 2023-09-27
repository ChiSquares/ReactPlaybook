import { useSelector } from "react-redux";

function useSurvey() {
  return useSelector((state) => state.survey);
}

export default useSurvey;
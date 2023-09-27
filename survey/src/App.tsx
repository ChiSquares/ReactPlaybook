import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useSurvey from './hooks/useSurvey'
import useStartSurvey from './hooks/useStartSurvey';
import { useEffect } from 'react';

function App() {
  const survey = useStartSurvey();
  const [searchParams] = useSearchParams();
  let surveyId = searchParams.get("survey") as string;
  //const participantId = searchParams.get("participantId");
  
  useEffect(() => {
    let ignore = false;
    const response = survey.validateSurvey(surveyId)
    return () => {
      ignore = true;
    };
  },[])

  
  return (
    <>
      <h2>Hi</h2>
    </>
  )
}

export default App

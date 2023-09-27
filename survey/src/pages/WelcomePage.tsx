import { useEffect } from 'react';
import useSurvey from '../hooks/useSurvey'
import useStartSurvey from '../hooks/useStartSurvey';

function WelcomePage() {

    //console.log({survey})
  return (
    <div>
        <h1>Welcome to the survey!</h1>
        <p>
            I love Surveys
        </p>
    </div>
  )
}

export default WelcomePage

import { SurveyContextProvider, useSurveyContext } from '@/context/context';
import { useSearchParams, useNavigate } from 'react-router-dom';
import React, { Fragment, Suspense, lazy } from 'react';
import Loader from '../others/loader';
import { CountryModel, SurveyModel, SurveyTakerModel } from '@/models';

const WelcomePage = lazy(() => import('./welcome-page'));
const ConsentPage = lazy(() => import('./consent-page'));
const QuestionPage = lazy(() => import('./question-page'));

const SurveyPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()

  return (
    <SurveyContextProvider searchParams={searchParams} navigate={navigate}>
      <SurveyPageContent />
    </SurveyContextProvider>
  );
};

const SurveyPageContent = () => {
  
  const { activePage, survey, setActivePage, changeLanguage, participantId, language, userCountry, setUserCountry } = useSurveyContext();

        // Flow:
        // - Launch Survey Page (activePage = welcome)
        // - Confirm your age category (Adult or Minor). Skip this if the survey does not target a mixed audience.
        // - Display Consent form
        // - Participants accept the consent and proceed to the question.

        // On the question page
        // - display screener prompt (if available)
        // - display the first question.
        // - accept the participants answer and save the response. Then show the next question.
        // - if the accepted answers matches any of the inclusion criteria, skipped pattern and or quota, analyze the response and route to the appropriate section or exit according to the matched condition.
        // Upon the last question submission, check for incentive availability and allow the users to claim their incentive.
        // If it's a longitudinal survey, allow the user to opt in for a follow-up.
        // On the set follow page, resend the survey link to the eligible participants.
        // Please let me know if I am missing something?

  return (
    <div className="background-body">
      <Suspense fallback={<Loader spinner={true} />}>
        <Fragment>
          {survey && (
            <>
              {activePage === 'welcome' && (
                <WelcomePage
                  survey={survey}
                  setActivePage={setActivePage}
                  changeLanguage={changeLanguage}
                  participantId={participantId}
                  language={language}
                  userCountry={userCountry}
                  // setUserCountry={setUserCountry}
                />
              )}
              {activePage === 'consent' && (
                <ConsentPage
                  survey={survey}
                  setActivePage={setActivePage}
                  changeLanguage={changeLanguage}
                  participantId={participantId}
                  language={language}
                  userCountry={userCountry}
                  setUserCountry={setUserCountry}
                />
              )}
              {activePage === 'question' && (
                <QuestionPage
                  survey={survey}
                  setActivePage={setActivePage}
                  changeLanguage={changeLanguage}
                  participantId={participantId}
                  language={language}
                  userCountry={userCountry}
                  setUserCountry={setUserCountry}
                />
              )}
            </>
          )}
        </Fragment>
      </Suspense>
    </div>
  );
};

export default React.memo(SurveyPage);

export type surveyProps = {
  survey: SurveyModel | undefined | null;
  setActivePage: Function;
  changeLanguage: Function;
  participantId?: string | undefined | null;
  language?: string | undefined | null;
  userCountry?: CountryModel;
  setUserCountry: Function;
  setSurvey?: Function;
  session?: SurveyTakerModel;
}
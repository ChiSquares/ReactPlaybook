import { CountryModel, SurveyModel, SurveyTakerModel } from "@/models";
import SurveyService from "@/services/api/survey-service";
import { handleHttpError } from "@/services/http-error-handler";
import { useRef, useReducer, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export type SurveyProps = {
    survey: SurveyModel;
    participantId?: string;
    language?: string;
    userCountry?: CountryModel;
    session?: SurveyTakerModel;
}

export interface ActionProps {
    type: string;
    payload?: SurveyProps;
}

const useSurvey = () => {

    // survey url
    // {baseUrl}/survey/{surveyId}/?participantId=qwuhjasbjnma&lang=e

    const navigate = useNavigate();
    const [searchParams] = useSearchParams(); // http://localhost:5173/?survey=61&participantId=101&lang=en
    let sid = searchParams.get("survey") as string;
    const participantId = searchParams.get("participantId");
    const [language, setLanguage] = useState<string>(searchParams.get("lang") ?? "en");
    const [userCountry, setUserCountry] = useState<CountryModel>();
    const [survey, setSurvey] = useState<SurveyModel>();
    const [loading, setLoading] = useState<boolean>(true);

    const cache = useRef({});

    useEffect(() => {
        let ignore = false;

        const validateSurvey = async (surveyId: number) => {
            try {
                setLoading(true);
                const response = await SurveyService.getSurveyInfo(surveyId);

                if (response?.status) {
                    setSurvey(response?.data);
                } else {
                    toast.error(response?.message);
                }
                setLoading(false);
            } catch (error) {
                let response = handleHttpError(error);
                if (response?.code === 404) {
                    navigate('/404');
                }
                toast.error(response?.message);
                setLoading(false);
            }
        }

        if (!ignore) {
            if (!isNumber(sid)) {
                setLoading(false);
                toast.error("Invalid Survey");
                navigate("/404");
                return;
            }

            validateSurvey(Number(sid));
        }

        return () => {
            ignore = true;
        };
    }, []);

    useEffect(() => {
        if (language) {
            var queryParams = new URLSearchParams(window.location.search); // or new URL(window.location.search).searchParams;
            queryParams.set("lang", language);
            // console.log("lang", language);
        }
    }, [language]);

    const changeLanguage = (lang: string) => {
        if (lang) {
            setLanguage(lang);
        }
    }

    return { survey, language, changeLanguage, participantId, loading, setLoading, userCountry, setUserCountry };
};

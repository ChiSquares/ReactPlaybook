import { createSlice } from '@reduxjs/toolkit';

export const surveySlice = createSlice({
    name: 'survey',
    initialState: {
        survey: null,
        changeLanguage: 'en' ,
        participantId: null,
        userCountry: null,
        session: null,
        activePage: 'welcome',
        isLoading: false,
    } ,
    reducers: {
        setSurvey: (state, action) => {
            state.survey = action.payload;
        },
        setChangeLanguage: (state, action) => {
            state.changeLanguage = action.payload;
        },
        setParticipantId: (state, action) => {
            state.participantId = action.payload;
        },
        setUserCountry: (state, action) => {
            state.userCountry = action.payload;
        },
        setSession: (state, action) => {
            state.session = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const {setSurvey, setChangeLanguage, setSession, setParticipantId, setUserCountry, setIsLoading } = surveySlice.actions;

export default surveySlice.reducer;

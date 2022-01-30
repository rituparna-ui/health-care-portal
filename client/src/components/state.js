import { createGlobalState } from 'react-hooks-global-state';
const initialState = { LoggedIn: false,loggedInUser:'',token:'' };
const { setGlobalState,useGlobalState } = createGlobalState(initialState);

export  {useGlobalState,setGlobalState}
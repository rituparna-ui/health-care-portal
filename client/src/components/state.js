import { createGlobalState } from 'react-hooks-global-state';
const initialState = { LoggedIn: false,loggedInUser:'',token:'',jwtToken:'' };
const { setGlobalState,useGlobalState } = createGlobalState(initialState);

export  {useGlobalState,setGlobalState}
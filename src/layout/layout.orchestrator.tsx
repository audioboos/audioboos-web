import React from 'react'

import { useSettingsQuery } from "../store/api";
import Error500Page from '../pages/error/500Page';
import SetupPage from '../pages/setup/SetupPage'
import LoginPage from '../pages/old/auth/LoginPage';

function StartupPage (){
   const [data: user, {loading, errro}] = useProfileQuery();
   React.useEffect(() => {
   }, []);
if (loading){
    return (<div>Loading...</div>)
}
if (user && user.name) {
    return (<LoginPage />)
}
return (<NotLoggedIn />);
}



import {Helmet, HelmetProvider } from "react-helmet-async";

import FORM_LOGIN from "components/page-specific/login/form-login";



export default function LOGIN_PAGE() {

    return (
        <>
            <HelmetProvider>

                    <Helmet>
                        <title>Form - Login</title>
                    </Helmet>

                    {/* Component */}
                    <FORM_LOGIN />

                
            </HelmetProvider>
        </>
    )
}


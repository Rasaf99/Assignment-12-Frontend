import {Helmet, HelmetProvider } from "react-helmet-async";

import FORM_SIGNUP from "components/page-specific/signup/form-signup";


export default function SIGNUP_PAGE() {

    return (
        <>
            <HelmetProvider>

                    <Helmet>
                        <title>Form - Signup</title>
                    </Helmet>

                    {/* Component */}
                    <FORM_SIGNUP />

                
            </HelmetProvider>
        </>
    )
}
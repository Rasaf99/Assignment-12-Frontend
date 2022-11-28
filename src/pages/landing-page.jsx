import {Helmet, HelmetProvider } from "react-helmet-async";

import LANDING from "components/page-specific/landing/landing";
import MAIN_LAYOUT from "components/layout/main-layout";


export default function LANDING_PAGE() {

    return (
        <>
            <HelmetProvider>

                    <Helmet>
                        <title>Landing Page</title>
                    </Helmet>

                  <MAIN_LAYOUT>
                    {/* Component */}
                    <LANDING />
                  </MAIN_LAYOUT>

                
            </HelmetProvider>
        </>
    )
}
import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";
import PROFILE from "components/page-specific/profile/profile";



// ✅ service page
export default function PROFILE_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>My Profile</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <PROFILE />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}
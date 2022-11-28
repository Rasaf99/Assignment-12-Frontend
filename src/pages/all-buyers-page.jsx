import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";
import ALL_BUYERS from "components/page-specific/all-buyers/all-buyers";



// ✅ service page
export default function ALL_BUYERS_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>All Users</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <ALL_BUYERS />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}
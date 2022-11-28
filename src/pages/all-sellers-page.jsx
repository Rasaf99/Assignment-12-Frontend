import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";
import ALL_SELLERS from "components/page-specific/all-sellers/all-sellers";



// ✅ service page
export default function ALL_SELLERS_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>All Users</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <ALL_SELLERS />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}
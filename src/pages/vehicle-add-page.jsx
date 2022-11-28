import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";

import VEHICLE_ADD from "components/page-specific/vehicle-add/vehicle-add";


// ✅ service page
export default function VEHICLE_ADD_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Vehicle - Add</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <VEHICLE_ADD />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}
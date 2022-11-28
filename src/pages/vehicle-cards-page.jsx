import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";
import VEHICLE_CARDS from "components/page-specific/vehicle-cards/vehicle-cards";



// ✅ service page
export default function VEHICLE_CARDS_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Vehicle Cards</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <VEHICLE_CARDS />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}
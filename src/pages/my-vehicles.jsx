import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";
import MY_VEHICLES from "components/page-specific/my-vehicles/my-vehicles";




// ✅ service page
export default function MY_VEHICLES_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>My Vehicles</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <MY_VEHICLES />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}
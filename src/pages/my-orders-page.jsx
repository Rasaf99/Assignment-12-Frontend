import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";
import MY_ORDERS from "components/page-specific/my-orders/my-orders";


// ✅ service page
export default function MY_ORDERS_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>My Orders</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <MY_ORDERS />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}
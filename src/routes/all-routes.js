import { createBrowserRouter } from "react-router-dom";



//route protection component
import ONLY_NOT_LOGGED_IN from "./only-not-logged-in";
import ONLY_LOGGED_IN from "./only-logged-in";
import ONLY_ADMIN from "./only-admin";
import ONLY_SELLER from "./only-seller";
import ONLY_BUYER from "./only-buyer";


// pages
import LANDING_PAGE from "pages/landing-page";
import SIGNUP_PAGE from "pages/signup-page";
import LOGIN_PAGE from "pages/login-page";
import NOT_FOUND_PAGE from "pages/not-found-page";
import PROFILE_PAGE from "pages/profile-page";
import VEHICLE_ADD_PAGE from "pages/vehicle-add-page";
import VEHICLE_CARDS_PAGE from "pages/vehicle-cards-page";
import MY_VEHICLES_PAGE from "pages/my-vehicles";
import ALL_SELLERS_PAGE from "pages/all-sellers-page";
import ALL_BUYERS_PAGE from "pages/all-buyers-page";
import MY_ORDERS_PAGE from "pages/my-orders-page";
import BLOG_PAGE from "pages/blog-page";






// all routes
const allRoutes = createBrowserRouter([


    /* ✅✅ Page for everyone ✅✅  */

    /* 🚀 Landing Page */
    {
        path: "/",
        element: < LANDING_PAGE />,
    },


    /* 🚀 Not Found Page */
    {
        path: "*",
        element: <NOT_FOUND_PAGE />,
    },


    /* 🚀 Blog Page */
    {
        path: "/blog",
        element: <BLOG_PAGE />,
    },


    /* ✅✅ Page for only not logged-in user ✅✅  */

    /* 🚀  Signup Page */
    {
        path: "/signup",
        element: (

            <ONLY_NOT_LOGGED_IN>
                <SIGNUP_PAGE />
            </ONLY_NOT_LOGGED_IN>
        )
    },



    /* 🚀 Login Page */
    {
        path: "/login",
        element: (

            <ONLY_NOT_LOGGED_IN>
                <LOGIN_PAGE />
            </ONLY_NOT_LOGGED_IN>
        )
    },


    /* ✅✅ Page for only logged-in user ✅✅  */


    /* 🚀 Profile Page */
    {
        path: "/profile",

        element: (
            <ONLY_LOGGED_IN>
                <PROFILE_PAGE />
            </ONLY_LOGGED_IN>
        )
    },



    /* 🚀 Vehicle Cards */
    {
        path: "/vehicle/cards",

        element: (
            <ONLY_LOGGED_IN>
                <VEHICLE_CARDS_PAGE />
            </ONLY_LOGGED_IN>
        )
    },



    /* ✅✅ Page for only buyers ✅✅  */

        /* 🚀 my orders Page */
        {
            path: "/vehicle/orders",
    
            element: (
                <ONLY_BUYER>
                    <MY_ORDERS_PAGE />
                </ONLY_BUYER>
            )
        },
    




    /* ✅✅ Page for only admins ✅✅  */

    /* 🚀 All buyers Page */
    {
        path: "/all-buyers",

        element: (
            <ONLY_ADMIN>
                <ALL_BUYERS_PAGE />
            </ONLY_ADMIN>
        )
    },

    /* 🚀 All sellers Page */
    {
        path: "/all-sellers",

        element: (
            <ONLY_ADMIN>
                <ALL_SELLERS_PAGE />
            </ONLY_ADMIN>
        )
    },






    /* ✅✅ Page for only sellers ✅✅  */


    /* 🚀 Vehicle Add Page */
    {
        path: "/vehicle/sell",

        element: (
            <ONLY_SELLER>
                <VEHICLE_ADD_PAGE />
            </ONLY_SELLER>
        )
    },



    /* 🚀 MY POST */
    {
        path: "/vehicle/mine",

        element: (
            <ONLY_SELLER>
                <MY_VEHICLES_PAGE />
            </ONLY_SELLER>
        )
    },








]);



export default allRoutes
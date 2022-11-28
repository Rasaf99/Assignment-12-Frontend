
import { Helmet, HelmetProvider } from "react-helmet-async";


import MAIN_LAYOUT from "components/layout/main-layout";
import BLOG from "components/page-specific/blog/blog";



export default function BLOG_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Blog</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <BLOG />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}
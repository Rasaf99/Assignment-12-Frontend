// react hook
import { useEffect } from "react";

import { Avatar, Box, Typography } from "@mui/material"
import userAxios from "api/user";
import useAuthContext from "hook/context/use-auth-context"
import useAxios from "hook/use-axios"
import ORDER_CARD from './order-card/order-card'


import { ERROR_TEXT, LOADING_SPINNER } from "components/reusable/for-any-project"
import bookNowAxios from "api/book-now";


// ✅
export default function MY_ORDERS() {

    //  useAuthContext() hook 
    const { user } = useAuthContext()


    // useAxios() hook

    const { isSuccess, isError, isLoading, successResponse, errorResponse, axiosRequest } = useAxios()


    const fetchOrder= ()=> {

        axiosRequest({
            axiosInstance: bookNowAxios,
            method: 'GET',
            url: `/buyer/${user?.id}`,
            configurationObj: {
                headers: {
                    'Authorization': `Bearer ${user?.token}`,
                }
            }

        })

    }

    


    useEffect(() => {

        // try to fetch data only when there is user.id  
        if (user) {

            fetchOrder()
        }





        // eslint-disable-next-line
    }, [user])




    // ✅
    return (
        <div>

            {

                /*  Immediately invoked anonymous function */
                (() => {

                    if (isLoading) {
                        return (
                            <LOADING_SPINNER />
                        )
                    }

                    else if (isError) {
                        return (

                            <ERROR_TEXT text='Something is wrong.' />
                        )
                    }


                    else if (isSuccess) {

                        return (
                            <>
                              
                              <h4 style={{textAlign:'center', margin:'1rem'}}>My Orders</h4>

                               <ORDER_CARD successResponse={successResponse} refetch={fetchOrder}/>


                               </>
                        )
                    }




                })()  /* End: Immediately invoked anonymous function */

            }



        </div>
    )
}
// react hook
import { useEffect } from "react";

import { Avatar, Box, Typography } from "@mui/material"
import userAxios from "api/user";
import useAuthContext from "hook/context/use-auth-context"
import useAxios from "hook/use-axios"



import { ERROR_TEXT, LOADING_SPINNER } from "components/reusable/for-any-project"


// ✅
export default function PROFILE() {

    //  useAuthContext() hook 
    const { user } = useAuthContext()


    // useAxios() hook

    const { isSuccess, isError, isLoading, successResponse, errorResponse, axiosRequest } = useAxios()



    useEffect(() => {



        // try to fetch data only when there is user.id  
        if (user) {
            axiosRequest({
                axiosInstance: userAxios,
                method: 'GET',
                url: `/${user?.id}`,
                configurationObj: {
                    headers: {
                        'Authorization': `Bearer ${user?.token}`,
                    }
                }

            })
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

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center', alignItems: 'center', margin: '1rem', backgroundColor: 'background.variation', padding: '1rem' }}>

                                <Avatar src={successResponse.user.photoURL} alt={successResponse.user.email} />
                                <Typography> Username: {successResponse.user.username}</Typography>
                                <Typography> ID: {successResponse.user._id}</Typography>
                                <Typography> Email: {successResponse.user.email}</Typography>


                            </Box>

                        )
                    }




                })()  /* End: Immediately invoked anonymous function */

            }



        </div>
    )
}
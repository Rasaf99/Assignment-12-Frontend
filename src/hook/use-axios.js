import { useState, useEffect } from "react";
import useAuthContext from "./context/use-auth-context";



/* 🔖 I have understood this hook from dave gray's video (https://youtu.be/NqdqnfzOQFEa), also copied the code from his repo(https://github.com/gitdagray/react_hooks_axios/tree/main/src).  In the video, the hook's name was 'useAxiosFunction', I have named it 'useAxios'. The hook returns a function, in the video, this function's  name was 'axiosFetch', I have named it 'axiosRequest'. I haven't changed anything else.  */


const useAxios = () => {

    const { user } = useAuthContext()

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [successResponse, setSuccessResponse] = useState(null)
    const [errorResponse, setErrorResponse] = useState(null)



    const [controller, setController] = useState();

    const axiosRequest = async (configObj) => {

        const {
            axiosInstance,
            method,
            url,
            body = {},
            configurationObj = {},
        } = configObj;


        try {

            /* 🔖 step-1, setting the isLoading state to boolean true */
            setIsLoading(true)

            /* 🔖 step-2, we will try to execute some code */

            //AbortController
            const ctrl = new AbortController();
            setController(ctrl);

            //making the request

            /* 🔖 Let's understand the following syntax with an example
            

             ✨ Example (Suppose, there is 'authAxios' instance)

               const res = await authAxios.post('/', {

                 "email": "rasaf@gmail.com",
                 "password": "aA#12345",

                 headers: { 'Content-Type': 'application/json',}

               })


             ✨ Above code's confusional part:

             - Here, email & password are part of backend's req.body  
             
             - You  can see the email, password and headers property are in the same object.

             - Wrong Syntax:  
               {
                 body: { "email": "rasaf@gmail.com", "password": "aA#12345" }
                 headers: { 'Content-Type': 'application/json',}
               }

             - Right Syntax: 

               {
                "email": "rasaf@gmail.com", 
                "password": "aA#12345" 

                 headers: { 'Content-Type': 'application/json'}
               }


              ✨ The following syntax's explanation:

               - The 'body' will hold all the property of the body

                 body: {
                        "email": "rasaf@gmail.com", 
                        "password": "aA#12345" 
                 }


                - The 'configurationObj' will hold headers, params, etc.

                configurationObj: {

                    headers: { 'Content-Type': 'application/json',}
                }
    
            */

                
            const res = await axiosInstance[method.toLowerCase()](url, {

                ...body,

                ...configurationObj,

                signal: ctrl.signal
            });





            /*🔖 step-3, if no error occurs while running the above code, we will change some state. */
            console.log('😃 Request is successful..', res)

            setSuccessResponse(res.data)
            setIsSuccess(true)
            setIsError(false)
            setErrorResponse(null)
        }


        /*🔖 step-4, if error occurs while running the step-2's code, step-3 will not automatically execute. Then, we will change some state in the catch {} */
        catch (err) {
            console.log('😑 Request is not successful..', err.response)

            setErrorResponse(err.response.data)
            setIsError(true)
            setIsSuccess(false)
            setSuccessResponse(null)

        }

        finally {
            /*🔖 step-5,  at the end, setting the isLoading state to boolean false */

            setIsLoading(false)
        }

    }

    useEffect(() => {

        // useEffect cleanup function
        return () => controller && controller.abort();

    }, [controller]);

    return { isSuccess, isError, isLoading, successResponse, errorResponse, axiosRequest };
}

export default useAxios
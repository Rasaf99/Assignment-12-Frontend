import { useTheme } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





// ✅ functional component
export default function SHOW_TOAST({ infoMsg, SuccessMsg, warningMsg, errorMsg }) {


    const theme = useTheme()


    return (
        <>

            {
                (() => {

                    if (infoMsg) {

                        return (

                            toast.info(infoMsg)

                        )
                    }

                    else if (SuccessMsg) {

                        return (

                            toast.success(SuccessMsg)

                        )
                    }


                    else if (warningMsg) {

                        return (

                            toast.warning(SuccessMsg)

                        )
                    }


                    else if (errorMsg) {

                        return (

                            toast.error(errorMsg)

                        )
                    }

                    else {
                        return null
                    }

                })()
            }



            {/* ToastContainer */}
            {theme.palette.mode === 'dark' ?

                <ToastContainer theme='dark' position='bottom-right' autoClose={6000} />

                :

                <ToastContainer position='bottom-right' autoClose={6000} />
            }



        </>
    )
}
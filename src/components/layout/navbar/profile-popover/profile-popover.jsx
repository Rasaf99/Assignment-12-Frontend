// hook
import { useState } from "react";

// custom hook
import useAuthContext from "hook/context/use-auth-context";



// components
import { Avatar, Popover } from "@mui/material";

import POPOVER_CONTENT from "./popover-content/popover-content";
import { toast } from "react-toastify";





// ✅ functional component
export default function PROFILE_POPOVER() {


    const [showPopover, SetShowPopover] = useState(null);

    const handleClick = (event) => {
        SetShowPopover(event.currentTarget);
    }

    const handleClose = () => {
        SetShowPopover(null);
    }


    // AuthContext
    const { user, dispatch } = useAuthContext()



    // handleLogout function
    const handleLogout = () => {

        // dispatch logout action 
        dispatch({ type: 'LOGOUT' })

        // remove the user from the local storage
        localStorage.removeItem('user')

        toast.error('You are logged out')

    }


    return (

        <>

            <Avatar onClick={handleClick} src={user?.photoURL} alt={user?.email} />



            <Popover
                open={Boolean(showPopover)}
                anchorEl={showPopover}
                onClose={handleClose}

                anchorOrigin={{
                    vertical: 42,
                    horizontal: 'center',
                }}

                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}>


                <POPOVER_CONTENT handleLogout={handleLogout} />


            </Popover>

        </>

    )
}
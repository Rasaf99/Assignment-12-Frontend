import { LocalSeeOutlined } from "@mui/icons-material";
import { createContext, useReducer, useEffect} from "react";


export const AuthContext = createContext()



// reducer function of useReducer hook
export const authReducer = (state, action) => {

    switch (action.type) {

        case 'LOGIN':
          return {user: action.payload}

        case 'LOGOUT': 
          return {user:null}

        default:
            return state  
    }


}




// ✅ functional component
export default function AUTH_CONTEXT_PROVIDER({children}) {


    /* 🔖 Current setup vs Previous setup and the problem with the previous setup

    
      ✨ Current setup ✨

        const user = JSON.parse(localStorage.getItem('user'))

        // initialState of useReducer
        const initialState = {
            user: user? user : null
        }

        // useReducer
        const [state, dispatch] = useReducer(authReducer, initialState)
    

     
      ✨ Previous setup ✨


        // initialState of useReducer
        const initialState = {
            user: null
        }

        // useReducer
        const [state, dispatch] = useReducer(authReducer, initialState)


        // 🔖 at the initial render of of this 'AUTH_CONTEXT_PROVIDER', we want to check the local storage to find out that there is a 'user' property or not. If there is a user property, that will mean that a user is already logged in. So, we would dispatch the 'LOGIN' action. 

        useEffect( ()=> {

            const user = JSON.parse(localStorage.getItem('user'))

            if(user) {
            dispatch({type:'LOGIN', payload: user})
            }

        }, [])


        ✨ Problem with the previous setup ✨

         Previously, we were updating the initial state by dispatching 'LOGIN' action inside the  the useEffect hook. The useEffect was running when the component was rendering.

         So, just when the component hasn't been fully rendered, for a split second, the useReducer's state's value used to be the initial state value which we have set. So, the 'user' property's value used be null for a split second. It was happening even when someone is already logged in.

         And just after the split second, when the component's render is finish, the useReducer's state's value would be the updated value which comes from the localStorage. But the split second was the problem.

         Because in another component when I will need user's value to make a request at the component render time with useEffect, I will get the value of the user and my request will fail. Because I would only have the 'user' value if AuthContext.Provider renders fully.
    */

      
         const user = JSON.parse(localStorage.getItem('user'))

         // initialState of useReducer
         const initialState = {
             user: user? user : null,
             
         }
 
         // useReducer
         const [state, dispatch] = useReducer(authReducer, initialState)
     




    console.log('🐸 AuthContext state', state)


 
    // ✅ jsx
    return (

        <AuthContext.Provider  value={{...state, dispatch}}>

           {children}
        
        </AuthContext.Provider>

    )



}
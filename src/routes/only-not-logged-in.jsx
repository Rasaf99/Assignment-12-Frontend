// custom hook
import useAuthContext from 'hook/context/use-auth-context'

// router
import { Navigate } from 'react-router-dom'



// ✅ functional component
export default function ONLY_NOT_LOGGED_IN({ children }) {

  // AuthContext
  const { user } = useAuthContext()

 
  //  if not logged in, can access the desired page
  if (!user) {
    return children
  }


  // if logged in, redirecting to the landing page
  return (

    <Navigate to='/' />
  )

}



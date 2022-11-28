// custom hook
import useAuthContext from 'hook/context/use-auth-context'

// router
import { Navigate, useLocation } from 'react-router-dom'



// ✅ functional component
export default function ONLY_LOGGED_IN({ children }) {

  // AuthContext
  const { user } = useAuthContext()

  // router
  const location = useLocation()

  
  // if  logged in, can access the desired page
  if (user && user.id) {
    return children
  }

  // if not logged in, redirecting to the login page
  return (

    <Navigate to='/login' state={{ from: location }} replace />
  )

}



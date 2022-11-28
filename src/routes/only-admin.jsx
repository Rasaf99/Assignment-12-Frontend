// custom hook
import useAuthContext from 'hook/context/use-auth-context'

// router
import { Navigate, useLocation } from 'react-router-dom'



// ✅ functional component
export default function ONLY_ADMIN({ children }) {

  // AuthContext
  const { user } = useAuthContext()

  // router
  const location = useLocation()

  
  // if logged in & role is admin, can access the desired page
  if (user && user.role === 'admin') {
    return children
  }

  // if logged in but role is not admin, redirecting to the home page
 else if (user && user.role !== 'admin') {

    <Navigate to='/' />

  }

  
  // if not logged in, redirecting to the login page
  return (

    <Navigate to='/login' state={{ from: location }} replace />
  )

}



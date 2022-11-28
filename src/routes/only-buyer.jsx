// custom hook
import useAuthContext from 'hook/context/use-auth-context'

// router
import { Navigate, useLocation } from 'react-router-dom'



// ✅ functional component
export default function ONLY_BUYER({ children }) {

  // AuthContext
  const { user } = useAuthContext()

  // router
  const location = useLocation()

  
  // if logged in & role is buyer, can access the desired page
  if (user && user.role === 'buyer') {
    return children
  }

  // if logged in but role is not buyer, redirecting to the home page
 else if (user && user.role !== 'buyer') {

    <Navigate to='/' />

  }

  
  // if not logged in, redirecting to the login page
  return (

    <Navigate to='/login' state={{ from: location }} replace />
  )

}



import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({ children }) {
  const userStore = useSelector((store) => store.UserReducer);
  //console.log(userStore, children);

  if (!userStore.isAuth) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

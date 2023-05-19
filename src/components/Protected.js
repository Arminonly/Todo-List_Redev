import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const auth = localStorage.getItem('token');
  if (!auth) {
    return <Navigate to={'/registry'} />;
  }
  return children;
};

export default Protected;

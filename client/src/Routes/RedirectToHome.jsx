import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RedirectToHomepage = () => {
  const history = useHistory();

  useEffect(() => {
      history.push('/home');
  }, [history]);

  return null;
};

export default RedirectToHomepage;

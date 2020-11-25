import React, { useEffect } from 'react';

import { Center, Spinner } from '@chakra-ui/react';
import { useQueryCache } from 'react-query';
import { useHistory } from 'react-router-dom';

import { useAuthContext } from '@/app/auth/AuthContext';

export const PageLogout = () => {
  const { updateToken } = useAuthContext();
  const history = useHistory();
  const queryCache = useQueryCache();

  useEffect(() => {
    updateToken(null);
    queryCache.clear();
    history.push('/');
  }, [updateToken, queryCache, history]);

  return (
    <Center flex="1">
      <Spinner />
    </Center>
  );
};

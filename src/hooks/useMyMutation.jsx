import { useMutation } from '@tanstack/react-query'
import useAuth from './useAuth';

function useMyMutation() {
  const mutation = useMutation(...arguments);
  const { logout } = useAuth(...arguments);
// eslint-disable-next-line 
  if (mutation.error && mutation.error.message == 401){
    logout()
  }

  return mutation;
}

export default useMyMutation;

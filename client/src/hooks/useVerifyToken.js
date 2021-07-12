import { useQueryParams } from './useQueryParams';
import { verifyToken } from '../utils';

export const useVerifyToken = () => {
  const { token } = useQueryParams();

  const verify = actionType => async () => {
    const { action, error, strategy } = await verifyToken(token);

    return {
      action,
      error: action != actionType ? 'Invalid action' : error,
      strategy,
    };
  };

  return verify;
};

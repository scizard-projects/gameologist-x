import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

type ActionCreator = (...args: any) => any;

export function useReduxAction<AC extends ActionCreator>(actionCreator: AC) {
  const dispatch = useDispatch();

  return useMemo(
    () =>
      (...args: AC extends (...args: infer Args) => any ? Args : any[]) => {
        dispatch(actionCreator(...(args as any[])));
      },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [actionCreator],
  );
}

// https://github.com/devhubapp/devhub/blob/6e31725a63f42986eb040153aec7eb11723b8289/packages/components/src/hooks/use-redux-action.ts

import {
  IUser,
  IUserAction,
  UserActionType,
  defaultUserContext
} from './types';
import { createContext, Dispatch } from 'react';

export const userReducer = (state: IUser, action: IUserAction) => {
  switch (action.type) {
    case UserActionType.SET_USER: {
      return {
        ...(action.payload as IUser)
      };
    }
    default:
      return state;
  }
};

export const UserContext = createContext<{
  state: IUser;
  dispatch: Dispatch<IUserAction>;
}>({
  state: defaultUserContext,
  dispatch: () => null
});

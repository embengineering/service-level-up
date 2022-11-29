import createTheme from '@mui/material/styles/createTheme';

export interface IUser {
  displayName: string;
  email: string;
}

export const defaultUserContext: IUser = {
  displayName: '',
  email: ''
};

export interface IUserAction {
  type: UserActionType;
  payload?: IUser | undefined;
}

export enum UserActionType {
  SET_USER
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

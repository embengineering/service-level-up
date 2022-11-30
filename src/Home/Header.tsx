import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  signOut
} from 'firebase/auth';
import { useSnackbar } from 'notistack';
import { useContext, useEffect } from 'react';
import { IUser, UserActionType } from '../types';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import { UserContext } from '../userContext';
import { firebaseApp } from '../firebaseConfig';

const Header = () => {
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  const { enqueueSnackbar } = useSnackbar();

  const { state: userState, dispatch: userDispatch } = useContext(UserContext);

  const setUser = (user: IUser | undefined) => {
    userDispatch({
      type: UserActionType.SET_USER,
      payload: user
    });
  };

  const retrieveAuthAsync = async () => {
    if (userState?.email) return;

    try {
      const result = await getRedirectResult(auth);

      if (!result) {
        return;
      }
      setUser({
        displayName: result.user.displayName as string,
        email: result.user.email as string
      });
    } catch (err) {
      enqueueSnackbar('Error authenticating with Google.');
    }
  };

  const handleLoginClick = async () => {
    await signInWithRedirect(auth, provider);
  };

  const handleLogoutClick = async () => {
    await signOut(auth);
    setUser(undefined);
    window.sessionStorage.clear();
  };

  useEffect(() => {
    if (userState?.email) {
      window.sessionStorage.setItem('auth', JSON.stringify(userState));
    }
  }, [userState]);

  useEffect(() => {
    const stringifyUserInfo = window.sessionStorage.getItem('auth');

    if (stringifyUserInfo) {
      const userInfo: IUser = JSON.parse(stringifyUserInfo);
      setUser(userInfo);
    } else {
      retrieveAuthAsync();
    }
  }, []);

  return (
    <header>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: 'flex-end',
            backgroundColor: '#000'
          }}
        >
          {userState?.email ? (
            <Button
              endIcon={<LockIcon />}
              color="inherit"
              onClick={handleLogoutClick}
            >
              Logout
            </Button>
          ) : (
            <Button
              endIcon={<LoginIcon />}
              color="inherit"
              onClick={handleLoginClick}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { UserContext } from './userContext';

export default () => {
  const { state: userState } = useContext(UserContext);

  return (
    <main>
      <Stack sx={{ padding: '2rem', textAlign: 'center' }}>
        {userState?.displayName ? (
          <Typography variant="h3">{`Welcome, ${userState?.displayName}`}</Typography>
        ) : (
          <Typography variant="h3">{'Welcome to Service Level Up!'}</Typography>
        )}
      </Stack>
    </main>
  );
};

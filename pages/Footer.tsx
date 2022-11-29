import Stack from '@mui/material/Stack';

export default () => {
  return (
    <footer>
      <Stack
        sx={{
          position: 'absolute',
          top: 'auto',
          bottom: 0,
          backgroundColor: '#000',
          color: 'gray',
          textAlign: 'center',
          padding: '2rem',
          width: '100%'
        }}
      >
        <a
          href="https://www.embengineering.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright ©️ 2022 EMB Engineering
        </a>
      </Stack>
    </footer>
  );
};

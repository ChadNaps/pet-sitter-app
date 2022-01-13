import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useStyles from './LoginForm/useStyles';
import { useSnackBar } from '../../context/useSnackbarContext';
import login from '../../helpers/APICalls/login';
import { useAuth } from '../../context/useAuthContext';

interface DemoButtonProps {
  demoEmail: string;
  demoPassword: string;
}

const DemoButton: React.FC<DemoButtonProps> = ({ demoEmail, demoPassword }) => {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const demoLogin = () => {
    login(demoEmail, demoPassword).then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      }
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        marginTop: 4,
        fontSize: 20,
      }}
    >
      <Button
        type="submit"
        size="large"
        variant="contained"
        className={classes.demo}
        disableElevation
        onClick={demoLogin}
        sx={{ backgroundColor: '#f89c9b' }}
      >
        Demo
      </Button>
    </Box>
  );
};

export default DemoButton;

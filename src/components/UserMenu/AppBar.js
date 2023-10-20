import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from './AuthNav';
import authSelectors from '../../Redux/auth/auth-selectors';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    margin: 0,
    fontWeight: 500,
    fontSize: 22,
    padding: 12,
    color: '#80A6FF',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
}

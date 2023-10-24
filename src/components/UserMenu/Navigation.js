import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';

const styles = {
  container: {
    display: 'flex',
  },
  linkHome: {
    marginRight: 250,
    fontWeight: 500,
    fontSize: 22,
    color: '#002266',
  },
  linkContacts: {
    marginRight: 40,
    fontWeight: 500,
    fontSize: 22,
    color: '#002266',
  },
  activeLink: {
    color: '#002266',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav style={styles.container}>
      <NavLink to="/" style={styles.linkHome}>
        Home
      </NavLink>

      {isLoggedIn && (
        <>
          <div style={styles.container}>
            <NavLink to="/contacts" style={styles.linkContacts}>
              Contacts
            </NavLink>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;

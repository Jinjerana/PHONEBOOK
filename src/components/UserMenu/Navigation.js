import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';
import UserMenu from './UserMenu';

const styles = {
  link: {
    marginRight: 276,
    fontWeight: 500,
    fontSize: 22,
    color: '#80A6FF',
  },
  activeLink: {
    color: '#FF6600',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activestyle={styles.activeLink}>
        Home
      </NavLink>

      {isLoggedIn &&
        (<NavLink
          to="/contacts"
          exact
          style={styles.link}
          activestyle={styles.activeLink}
        >
          Contacts
        </NavLink>)(
          <NavLink>
            <UserMenu />
          </NavLink>
        )}
    </nav>
  );
};

export default Navigation;

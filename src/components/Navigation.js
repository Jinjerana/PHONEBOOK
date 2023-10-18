import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    fontSize: 52,
    padding: 12,
    textAlign: 'center',
    color: '#80A6FF',
  },
  activeLink: {
    color: '#FF6600',
  },
};

const Navigation = () => {
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Заметки
    </NavLink>
  </nav>;
};

export default Navigation;

import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    gap: 40,
  },
  link: {
    display: 'flex',
    fontWeight: 500,
    fontSize: 22,
    color: '#80A6FF',
  },
  activeLink: {
    color: '#FF6600',
  },
};

export default function AuthNav() {
  return (
    <div style={styles.container}>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}

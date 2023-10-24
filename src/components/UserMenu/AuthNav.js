import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    gap: 40,
    margin: 0,
  },
  link: {
    display: 'flex',
    fontWeight: 500,
    fontSize: 22,
    color: '#002266',
  },
};

export default function AuthNav() {
  return (
    <div style={styles.container}>
      <NavLink to="/register" style={styles.link}>
        Registration
      </NavLink>
      <NavLink to="/login" style={styles.link}>
        Login
      </NavLink>
    </div>
  );
}

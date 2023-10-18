import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../Redux/auth/auth-operations';
import authSelectors from 'Redux/auth/auth-selectors';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Привет, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Уйти
      </button>
    </div>
  );
}

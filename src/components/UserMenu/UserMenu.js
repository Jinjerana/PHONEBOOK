import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../Redux/auth/auth-operations';
import authSelectors from 'Redux/auth/auth-selectors';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 500,
    fontSize: 22,
    color: '#80A6FF',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Hallo, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Go out
      </button>
    </div>
  );
}

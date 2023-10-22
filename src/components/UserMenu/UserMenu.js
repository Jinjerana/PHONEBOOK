import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../Redux/auth/auth-operations';
import authSelectors from 'Redux/auth/auth-selectors';

const styles = {
  container: {
    display: 'flex',
    gap: 40,
    alignItems: 'center',
  },
  name: {
    display: 'flex',
    fontWeight: 500,
    fontSize: 22,
    color: '#80A6FF',
  },
  button: {
    fontWeight: 500,
    fontSize: 18,
    height: 30,
    width: 100,
    cursor: 'pointer',
    borderRadius: 5,
    borderColor: '#80A6FF',
    color: '#80A6FF',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Hallo, {name}</span>
      <button
        style={styles.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Go out
      </button>
    </div>
  );
}

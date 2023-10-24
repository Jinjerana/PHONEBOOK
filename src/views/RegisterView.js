import authOperations from 'Redux/auth/auth-operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
    fontSize: 22,
    color: '#002266',
  },
  input: {
    height: 30,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#002266',
  },
  button: {
    fontWeight: 700,
    fontSize: 22,
    height: 40,
    cursor: 'pointer',
    borderRadius: 5,
    borderColor: '#002266',
    color: '#002266',
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={styles.container}>
      <h1>Registration</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input
            style={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Email
          <input
            style={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            style={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" style={styles.button} onSubmit={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}

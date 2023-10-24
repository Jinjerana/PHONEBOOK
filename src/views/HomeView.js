const styles = {
  hello: {
    width: 200,
    marginLeft: 15,
    color: '#002266',
  },
};

const HomeView = () => {
  return (
    <p style={styles.hello}>
      Hallo there! It's time to start compiling your professional phonebook.
      Register and let`s go!
    </p>
  );
};

export default HomeView;

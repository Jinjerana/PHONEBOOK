import homeImage from '../views/image/homeImage.jpg';

const HomeView = () => {
  return (
    <img
      src={homeImage}
      alt="img"
      width=""
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        margin: '0 auto',
      }}
    />
  );
};

export default HomeView;

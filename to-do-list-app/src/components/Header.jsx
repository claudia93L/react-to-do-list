import { Link } from 'react-router-dom';

const Header = ({ path }) => {
  return (
    <header className='w-screen flex mb-3 pt-5'>
      <Link to={path}>
        <img
          className='w-3 ml-3 object-contain'
          src='../../src/assets/icons/left-arrow.png'
          alt=''
        />
      </Link>
    </header>
  );
};

export default Header;

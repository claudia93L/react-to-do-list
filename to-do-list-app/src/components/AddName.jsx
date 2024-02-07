import { useRef } from 'react';
import { setUsername } from '../reducers/usernameReducer';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';

const AddName = () => {
  const userNameRef = useRef();
  const dispatch = useDispatch();
  const usernameRedux = useSelector((state) => state.username.username);

  const handleClick = () => {
    if (userNameRef.current.value !== '') {
      dispatch(setUsername(userNameRef.current.value));
      userNameRef.current.value = '';
    }
  };

  return (
    <div className='text-center'>
      <h2>
        Welcome...
        {!usernameRedux ? (
          <span>
            <input
              type='text'
              ref={userNameRef}
              className='border border-indigo-300 rounded-full px-2 mr-3 w-24 opacity-75 ml-3'
              defaultValue={usernameRedux}
              placeholder='your name'
            />
            <Button
              onClick={handleClick}
              className='bg-indigo-300 rounded-full text-white transition ease-in-out hover:bg-indigo-400 p-2'
            >
              <img
                className='w-4'
                src='../src/assets/icons/edit.png'
                alt='Search icon'
              />
            </Button>
          </span>
        ) : (
          <span> {usernameRedux}!</span>
        )}
      </h2>
    </div>
  );
};

export default AddName;

import Button from './Button';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='flex justify-center flex-col'>
      <div className='m-14 '>
        <img
          className='w-52 mx-auto '
          src='../src/assets/to-do-gif.gif'
          alt='Illustration gif of a person filling out a giant to-do-list.'
        />
        <div className='text-center text-slate-700'>
          <h1 className='mt-12 mb-5 text-3xl'>Your To-Do-List</h1>
          <p className='mb-10 text-sm'>
            Easily manage your daily tasks, stay organized, and make the most of
            your day with our To-Do List app. Get started now!
          </p>
          <Link to={'/todolist'}>
            <Button className='bg-indigo-500 rounded-lg py-2 px-3 text-white transition ease-in-out hover:bg-indigo-600 hover:scale-90'>
              <span className='flex justify-end'>
                Get started
                <img
                  className='w-3 ml-3 object-contain'
                  src='../../src/assets/icons/right-arrow.png'
                  alt=''
                />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

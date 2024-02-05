import Button from './Button';
import style from './Main.module.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div
      className={` flex justify-center flex-col ${style.backgroundColor} min-h-screen min-w-screen`}
    >
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
            <Button
              className={
                'bg-indigo-600 rounded-md py-2 px-4 text-white transition ease-in-out hover:bg-indigo-700 hover:scale-90'
              }
            >
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

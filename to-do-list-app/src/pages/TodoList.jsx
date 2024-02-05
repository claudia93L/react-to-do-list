import { useNavigate } from 'react-router';
import AddName from '../components/AddName';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const ToDoList = () => {
  /* fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json)); */

  return (
    <div className='my-5 mx-auto px-10'>
      <AddName></AddName>
      <h3>Tasks</h3>
      <p className='text-sm'>
        Create your categorised task boards.{' '}
        <Button className='bg-indigo-300 rounded-full text-white transition ease-in-out hover:bg-indigo-400 p-2'>
          <img
            className='w-5'
            src='../../src/assets/icons/add.png'
            alt='Plus icon'
          />
        </Button>
      </p>
    </div>
  );
};

export default ToDoList;

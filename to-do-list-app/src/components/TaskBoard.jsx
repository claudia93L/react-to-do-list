import Task from './Task';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { addTask } from '../reducers/tasksReducer';

const TaskBoard = () => {
  const dispatch = useDispatch();
  const tasksRedux = useSelector((state) => state.tasks.tasks);
  const taskNameRef = useRef();

  const generateRandomID = () => Math.floor(Math.random() * 10000);

  const checkID = () => {
    let randomID = generateRandomID();

    tasksRedux.forEach((task) => {
      if (task.id === randomID) {
        randomID = generateRandomID();
      }
    });
    return randomID;
  };

  const handleClick = () => {
    if (taskNameRef.current.value !== '') {
      dispatch(
        addTask({
          id: checkID(),
          name: taskNameRef.current.value,
          todos: [],
        })
      );
      taskNameRef.current.value = '';
    }
  };

  return (
    <div>
      <p className='text-sm'>Create your task boards.</p>
      <input type='text' placeholder='Task name' ref={taskNameRef} />
      <Button
        className='bg-indigo-300 rounded-full text-white transition ease-in-out hover:bg-indigo-400 p-2'
        onClick={handleClick}
      >
        <img
          className='w-5'
          src='../../src/assets/icons/add.png'
          alt='Plus icon'
        />
      </Button>

      <Task></Task>
    </div>
  );
};

export default TaskBoard;

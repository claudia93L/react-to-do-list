import { useSelector } from 'react-redux';
import Button from './Button';

const Task = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div
            style={{ backgroundColor: task.color }}
            className='py-5 px-2 rounded'
            key={task.id}
          >
            <h1>{task.name}</h1>
            <Button className='bg-green-400 rounded-full text-white transition ease-in-out hover:bg-green-500 p-2 border border-green-900'>
              <img
                className='w-5'
                src='../../src/assets/icons/edit.png'
                alt='Edit icon'
              />
            </Button>

            <Button className='bg-red-400 rounded-full text-white transition ease-in-out hover:bg-red-500 p-2 border border-red-900'>
              <img
                className='w-5'
                src='../../src/assets/icons/delete.png'
                alt='Delete icon'
              />
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Task;

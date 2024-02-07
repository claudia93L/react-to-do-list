import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import { useRef } from 'react';
import { addTodoToTask, removeTodoFromTask } from '../reducers/tasksReducer';

const Todo = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const { taskID } = useParams();
  const task = tasks.find((task) => task.id === parseInt(taskID));
  const dispatch = useDispatch();
  const todoDescRef = useRef();

  const toDos = task ? task.todos : [];

  const handleAdd = () => {
    if (todoDescRef.current.value !== '') {
      dispatch(
        addTodoToTask({
          taskId: parseInt(taskID),
          todoDesc: todoDescRef.current.value,
        })
      );

      todoDescRef.current.value = '';
    }
  };

  const handleDelete = (todoIndex) => {
    dispatch(
      removeTodoFromTask({ taskId: parseInt(taskID), todoIndex: todoIndex })
    );
  };

  return (
    <>
      <div className='my-5 px-10 flex flex-col justify-center '>
        <Header path='/todolist'></Header>
        {task && (
          <div
            key={task.id}
            className='h-50 rounded p-3 flex justify-center flex-col opacity-80'
            style={{ backgroundColor: task.color }}
          >
            <h3 className='text-2xl text-center'>{task.name}</h3>
            <span>
              <input
                ref={todoDescRef}
                type='text'
                className='h-6 px-3 rounded-full mt-1  opacity-75 mr-3'
                placeholder='Add new task'
              ></input>
              <Button
                onClick={handleAdd}
                className='bg-indigo-300 rounded-full text-white transition ease-in-out hover:bg-indigo-400 p-2'
              >
                <img
                  className='w-3'
                  src='../../src/assets/icons/add.png'
                  alt='Edit icon'
                />
              </Button>
            </span>
            <div className='list-none mx-0 flex flex-col'>
              {toDos.map((todo, index) => (
                <div className='flex flex-row justify-between' key={index}>
                  <span>
                    <input
                      className='rounded-full'
                      type='checkbox'
                      name={todo}
                      value={todo}
                    />
                    <label htmlFor={todo}>{todo}</label>
                  </span>
                  <Button onClick={() => handleDelete(index)}>
                    <img
                      className='w-4'
                      src='../../src/assets/icons/delete.png'
                      alt='Delete icon'
                    />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Todo;

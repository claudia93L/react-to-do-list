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
      <div className='my-5 px-10 flex flex-col'>
        <Header path='/todolist'></Header>
        {task && (
          <div
            key={task.id}
            className='h-50 rounded p-3 flex-col opacity-80'
            style={{ backgroundColor: task.color }}
          >
            <h3 className='text-2xl text-center'>{task.name}</h3>
            <span className='flex flex-row justify-end mb-2'>
              <input
                ref={todoDescRef}
                type='text'
                className='h-6 px-3 rounded-full mt-1 opacity-65 mr-3 w-full'
                placeholder='Add new task'
              ></input>
              <Button
                onClick={handleAdd}
                className='bg-indigo-300 rounded-full text-white transition ease-in-out hover:bg-indigo-400 p-2'
              >
                <img
                  className='w-3'
                  src='../../src/assets/icons/add.png'
                  alt='Add icon'
                />
              </Button>
            </span>
            <div className='list-none mx-0 flex flex-col'>
              {toDos.map((todo, index) => (
                <div className='flex flex-row justify-between my-1' key={index}>
                  <span>
                    <li>{todo}</li>
                    {/*  <input
                      className='rounded-full bg-transparent checked:bg-indigo-800 focus:bg-indigo-800 border border-white active:bg-indigo-800'
                      type='checkbox'
                      name={todo}
                      value={todo}
                    />
                    <label htmlFor={todo}>{todo}</label> */}
                  </span>
                  <Button className='mr-1' onClick={() => handleDelete(index)}>
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

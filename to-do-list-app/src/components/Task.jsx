import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import { editTask, deleteTask } from '../reducers/tasksReducer';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Task = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editTaskId, setEditTaskId] = useState(null);
  const newTaskNameRef = useRef(null);

  const handleEdit = (taskId) => {
    setEditTaskId(taskId); // Imposta l'ID del task attualmente in modifica
  };

  const handleSave = (taskId) => {
    if (newTaskNameRef.current && newTaskNameRef.current.value !== '') {
      dispatch(
        editTask({
          taskId: editTaskId,
          taskName: newTaskNameRef.current.value,
        })
      );
      setEditTaskId(null); // Deseleziona il task corrente
    }
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div
            style={{ backgroundColor: task.color }}
            className='py-2 px-2 rounded flex justify-evenly rounded'
          >
            <Link to={`/todolist/${task.id}`}>
              {editTaskId !== task.id ? (
                <span className='w-40 mt-1 px-2 '>{task.name}</span>
              ) : (
                <input
                  ref={newTaskNameRef}
                  type='text'
                  defaultValue={task.name}
                  disabled={editTaskId !== task.id} // disabilita l'input se non è in modifica
                  className='h-6 px-3 rounded-full mt-1 w-40 opacity-75'
                ></input>
              )}
            </Link>

            {editTaskId !== task.id ? (
              <Button
                onClick={() => handleEdit(task.id)}
                className='bg-yellow-400 rounded-full text-white transition ease-in-out hover:bg-yellow-500 p-2 border border-yellow-600'
              >
                <img
                  className='w-3'
                  src='../../src/assets/icons/edit.png'
                  alt='Edit icon'
                />
              </Button>
            ) : (
              <Button
                onClick={() => handleSave(task.id)}
                className='bg-green-400 rounded-full text-white transition ease-in-out hover:bg-green-500 p-2 border border-green-900'
              >
                <img
                  className='w-3'
                  src='../../src/assets/icons/check.png'
                  alt='Edit icon'
                />
              </Button>
            )}

            <Button
              onClick={() => handleDelete(task.id)}
              className='bg-red-400 rounded-full text-white transition ease-in-out hover:bg-red-500 p-2 border border-red-900'
            >
              <img
                className='w-3'
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

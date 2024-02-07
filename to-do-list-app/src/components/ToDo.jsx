import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from './Header';

const Todo = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const { taskID } = useParams();
  const task = tasks.find((task) => task.id === parseInt(taskID));

  return (
    <>
      <div className='my-5 px-10 flex flex-col justify-center'>
        <Header path='/todolist'></Header>
        {task && (
          <div key={task.id}>
            funziono! l'id dall'url l'id filtrato è {task.id}
          </div>
        )}
      </div>
    </>
  );
};

export default Todo;

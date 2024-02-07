import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from './Header';

const Todo = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskID = useParams();

  return (
    <>
      <Header path='/todolist'></Header>
      {tasks.map((task) => {
        task.id ===
          taskID(
            <div>
              funziono! l'id dall'url è {taskID} l'id filtrato è {task}
            </div>
          );
      })}
    </>
  );
};

export default Todo;

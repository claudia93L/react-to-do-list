import { useSelector } from 'react-redux';

const Task = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <h1 key={task.id}>
            {task.id}. {task.name}
          </h1>
        );
      })}
    </div>
  );
};

export default Task;

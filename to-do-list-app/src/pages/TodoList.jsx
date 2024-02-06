import AddName from '../components/AddName';
import TaskBoard from '../components/TaskBoard';

const ToDoList = () => {
  return (
    <div className='my-5 mx-auto px-10'>
      <div className='name-section'>
        <AddName></AddName>
        <h3>Tasks</h3>
      </div>

      <div className='task-board'>
        <TaskBoard></TaskBoard>
      </div>
    </div>
  );
};

export default ToDoList;

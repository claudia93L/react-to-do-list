import AddName from '../components/AddName';
import Header from '../components/Header';
import TaskBoard from '../components/TaskBoard';

const ToDoList = () => {
  return (
    <div className='my-5 px-10 flex flex-col justify-center'>
      <Header></Header>
      <div className='name-section'>
        <AddName></AddName>
      </div>
      <h3>Tasks</h3>
      <div className='task-board'>
        <TaskBoard></TaskBoard>
      </div>
    </div>
  );
};

export default ToDoList;

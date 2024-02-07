import AddName from '../components/AddName';
import Header from '../components/Header';
import TaskBoard from '../components/TaskBoard';

const ToDoList = () => {
  return (
    <div className='my-5 px-10 flex flex-col justify-center'>
      <Header path='/'></Header>
      <div className='name-section'>
        <AddName></AddName>
      </div>

      <div className='task-board mx-auto'>
        <h3 className='text-xl'>Tasks</h3>
        <TaskBoard></TaskBoard>
      </div>
    </div>
  );
};

export default ToDoList;

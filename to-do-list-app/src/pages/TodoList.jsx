import AddName from '../components/AddName';
import Header from '../components/Header';
import TaskBoard from '../components/TaskBoard';

const ToDoList = () => {
  return (
    <div className='mb-5 px-10 flex flex-col h-screen'>
      <Header path='/'></Header>
      <div className='name-section'>
        <AddName></AddName>
      </div>

      <div className='task-board mx-auto mt-4'>
        <h3 className='text-lg text-gray-700'>Tasks</h3>
        <TaskBoard></TaskBoard>
      </div>
    </div>
  );
};

export default ToDoList;

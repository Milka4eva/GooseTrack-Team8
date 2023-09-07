import  Modal  from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';


export const TaskModal = ({ onClose, status, ...data }) => {  
  return (
    <Modal onClose={onClose}>      
      <TaskForm data={data} onClose={onClose} status={status}/>                      
    </Modal>
  );     
};

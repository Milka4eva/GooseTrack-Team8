import { Formik, Form} from 'formik';
import { AddBtn, CancelBtn, Container, Flex, TaskInput, TimeInput, Lable, Plus, Close, RadioGroup, StartWrapper, Text, RadioName, RadioButton } from './TaskForm.styled';
import {addTaskOperation, editTaskOperation } from '../../redux/calendar/calendar.operations';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';



const TaskForm = ({ onClose, ...data }) => {
  const dispatch = useDispatch();

  const editForm = data? true : false;

  const status = data?.status || 'To do';  

  const initialValues = {
    title: data?.title || '',
    start: data?.start || '',
    end: data?.end || '',
    priority: data?.priority || 'Low',
  };

const { currentDay: date } = useParams();
  
  const handleSubmit = values => {
    if (!editForm) {
      const payload = { ...values, date, status };
      dispatch(addTaskOperation(payload));
      onClose();
    } else {
      const payload = { ...values, date, status, _id: data._id };
      dispatch(editTaskOperation(payload));
      onClose();
    }
  };
 
  return (
      <Container>
       <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
          handleSubmit(values);
        }}
    >
     {({ values, handleChange, setFieldValue }) => (
          <Form>
            <Lable htmlFor="title">Title</Lable>
            <TaskInput type="text" name="title" placeholder="Task text" value={values.title} onChange={handleChange}/>
            <Flex>
            <StartWrapper>
              <Lable htmlFor="start"><Text>Start</Text></Lable>
            <TimeInput type="time" name="start" value={values.start} onChange={handleChange}/>
            </StartWrapper>
            <div>
             <Lable htmlFor="end" ><Text>End</Text></Lable>
            <TimeInput type="time" name="end" value={values.end} onChange={handleChange}/> 
           </div>
            </Flex>
          <RadioGroup  role="group" aria-labelledby="my-radio-group">
               {['Low', 'Medium', 'High'].map(priority => (
                <RadioName  key={priority}>
                  <RadioButton
                    type="radio"
                    value={priority}
                    name="priority"
                    checked={values.priority === priority}
                    onChange={() => {
                      setFieldValue('priority', priority);
                    }}
                  />
                  {priority}
                </RadioName>
              ))}
            </RadioGroup>
            <Flex>
              {!editForm ? (<AddBtn>
                <Plus>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1.167v11.666M1.167 7h11.666"/></svg>
               </Plus>
                Add 
              </AddBtn>) : (
                  <AddBtn>
                <Plus>
           <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" fill="none"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m2.375 16.125 4.162-1.6c.266-.103.4-.154.524-.221.11-.06.216-.128.315-.205.112-.087.213-.188.414-.39l8.46-8.459a2.121 2.121 0 0 0-3-3l-8.46 8.46c-.201.201-.302.302-.389.414-.077.1-.145.205-.205.315-.067.125-.118.258-.22.524l-1.601 4.162Zm0 0 1.544-4.013c.11-.287.165-.431.26-.497a.375.375 0 0 1 .284-.06c.114.021.222.13.44.348l1.694 1.694c.218.218.327.327.348.44a.375.375 0 0 1-.06.284c-.066.095-.21.15-.497.26l-4.013 1.544Z"/></svg>

               </Plus>
                Edit
              </AddBtn>
              )}
             
            <CancelBtn onClick={onClose}> Cancel</CancelBtn>
          </Flex> 
        </Form>
        )}
      </Formik>
      <Close>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/></svg>
      </Close>
     
      </Container>
    )
}
export default TaskForm;
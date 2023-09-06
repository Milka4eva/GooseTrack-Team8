import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  TaskListContainer,
  TaskContainer,
  TaskText,
  UserFoto,
  StatusContainer,
  UserContainer,
  StatusText,
  SubContainer,
  IconContainer,
  SvgButton,
  SvgIcon,
  MainContainer,
} from './TaskCardList.styled';
import Icon from '../../images/cartIcon.svg';
import { selectTasks } from '../../redux/calendar/calendar.selectors';
import useAuth from 'hooks/useAuth';
import { deleteTaskOperation } from '../../redux/calendar/calendar.operations';

const TaskCardList = () => {
  const userTasks = useSelector(selectTasks);
  const load = useSelector(state => state.calendar.isLoading);
  const { user } = useAuth();
  const location = useLocation();
  const pageDate = location.pathname.slice(14);
  const dispatch = useDispatch();

  const currentTask = userTasks
    .filter(userTasks => userTasks.date === pageDate)
    .sort(sortForStatus);

  function sortForStatus(a, b) {
    if (a.priority === 'high') {
      return 1;
    }
    if (b.priority === 'low') {
      return 0;
    }
    return -1;
  }

  const colorStatus = status => {
    switch (status) {
      case 'low':
        return ' #72C2F8;';

      case 'medium':
        return ' #F3B249;';

      case 'high':
        return ' #EA3D65;';

      default:
        break;
    }
  };

  console.log(load);
  const defUser = require('../../images/defUser.jpg');
  return (
    <MainContainer>
      {!load && (
        <TaskListContainer>
          <ul>
            {currentTask.map(({ _id, title, priority }) => (
              <li key={_id}>
                <TaskContainer>
                  <TaskText>{title}</TaskText>
                  <SubContainer>
                    <UserContainer>
                      {user.avatarUrl ? (
                        <UserFoto src={user.avatarUrl} alt="userFoto" />
                      ) : (
                        <UserFoto src={defUser} alt="userFoto" />
                      )}
                      <StatusContainer $status={colorStatus(priority)}>
                        <StatusText>{priority}</StatusText>
                      </StatusContainer>
                    </UserContainer>
                    <IconContainer>
                      <SvgButton>
                        <SvgIcon>
                          <use href={Icon + '#arrow'} />
                        </SvgIcon>
                      </SvgButton>

                      <SvgButton>
                        <SvgIcon>
                          <use href={Icon + '#pencil'} />
                        </SvgIcon>
                      </SvgButton>

                      <SvgButton
                        onClick={() => dispatch(deleteTaskOperation(_id))}
                      >
                        <SvgIcon>
                          <use href={Icon + '#trash'} />
                        </SvgIcon>
                      </SvgButton>
                    </IconContainer>
                  </SubContainer>
                </TaskContainer>
              </li>
            ))}
          </ul>
        </TaskListContainer>
      )}
    </MainContainer>
  );
};

export default TaskCardList;

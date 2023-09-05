import { Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import {
  MainContainer,
  FormContainer,
  Title,
  LabelInput,
  SpanInputEmail,
  SpanInputPass,
  EmailInput,
  ButtonSubmit,
  ButtonSignup,
  SignupContainer,
  ErrorMsg,
  CorrectMsg,
  PasswordInput,
  GusContainer,
  IconButtonSubmit,
  Iconinput,
  IconButtonSubmitSpan,
} from './LoginForm.styled';
import { login } from '../../redux/auth/auth-operations';
import Icon from '../../images/icons.svg';
import useAuth from 'hooks/useAuth';

const userShema = object({
  email: string().email('This is an ERROR email').required(),
  password: string().min(6).max(16).required(),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [isHidenGus] = useMediaQuery('(min-width: 1440px)');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userErr } = useAuth();


  useEffect(() => {
    if (userErr) {
      toast.error('Not valid email or password');
    }
  }, [userErr]);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage name={name} render={msg => <ErrorMsg>{msg}</ErrorMsg>} />
    );
  };

  return (
    <MainContainer>
      <div>
        <FormContainer>
          <Title>Log In</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={userShema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <LabelInput htmlFor="email">
                  <SpanInputEmail
                    $errEmail={
                      errors.email && touched.email
                        ? '#E74A3B'
                        : touched.email
                        ? '#3CBC81'
                        : '#111'
                    }
                  >
                    Email
                  </SpanInputEmail>

                  <EmailInput
                    autoComplete="off"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    $errEmail={
                      errors.email && touched.email
                        ? ' 1px solid #E74A3B'
                        : touched.email
                        ? '1px solid #3CBC81'
                        : '1px solid rgba(220, 227, 229, 0.6)'
                    }
                  />
                  {errors.email && touched.email ? (
                    <Iconinput>
                      <use href={Icon + '#EmailError'} />
                    </Iconinput>
                  ) : touched.email ? (
                    <Iconinput>
                      <use href={Icon + '#EmailDone'} />
                    </Iconinput>
                  ) : null}

                  {errors.email && touched.email ? (
                    <FormError name="email" />
                  ) : touched.email ? (
                    <CorrectMsg>This is an CORRECT email</CorrectMsg>
                  ) : null}
                </LabelInput>

                <LabelInput htmlFor="password">
                  <SpanInputPass
                    $errPass={
                      errors.password && touched.password
                        ? '#E74A3B'
                        : touched.password
                        ? '#3CBC81'
                        : '#111'
                    }
                  >
                    Password
                  </SpanInputPass>

                  <PasswordInput
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    $errPass={
                      errors.password && touched.password
                        ? ' 1px solid #E74A3B'
                        : touched.password
                        ? '1px solid #3CBC81'
                        : '1px solid rgba(220, 227, 229, 0.6)'
                    }
                  />
                  {errors.password && touched.password ? (
                    <Iconinput>
                      <use href={Icon + '#EmailError'} />
                    </Iconinput>
                  ) : touched.password ? (
                    <Iconinput>
                      <use href={Icon + '#EmailDone'} />
                    </Iconinput>
                  ) : null}

                  <FormError name="password" />
                </LabelInput>
                <ButtonSubmit type="submit">
                  <span> Log In</span>
                  <IconButtonSubmitSpan>
                    <IconButtonSubmit>
                      <use href={Icon + '#logIn'} />
                    </IconButtonSubmit>
                  </IconButtonSubmitSpan>
                </ButtonSubmit>
              </Form>
            )}
          </Formik>
        </FormContainer>

        <SignupContainer>
          <ButtonSignup type="button" onClick={() => navigate('/register')}>
            Sign Up
          </ButtonSignup>
        </SignupContainer>
      </div>
      {isHidenGus && (
        <GusContainer>
          <img
            src={require('../../images/loginGus.png')}
            alt="rocket-gus"
            height={521}
            width={368}
          />
        </GusContainer>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </MainContainer>
  );
};

export default LoginForm;

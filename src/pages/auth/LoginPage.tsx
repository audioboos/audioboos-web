import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { AlertWidget } from '../../components/widgets';
import { AlertWidgetType } from '../../components/widgets/alert-widget.component';
import authService from '../../services/api/authService';
import { login } from '../../store/auth';
import { useAuthQuery } from '../../store/redux/api';

const LoginPage = () => {
  console.log('Layout', 'Im a login page');

  const history = useHistory();
  const { data, refetch } = useAuthQuery();
  const dispatch = useDispatch();
  const [error, setError] = React.useState<string>();
  const doLogin = async (email: string, password: string) => {
    const result = await authService.login(email, password);
    if (result) {
      refetch();
      dispatch(login());
      history.push('/');
    } else {
      setError('Unable to log you in at this time');
    }
  };

  return (
    <div className="flex justify-center pt-28">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Login To Your Account
        </div>
        <div className="flex gap-4 item-center">
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            <svg
              width={20}
              height={20}
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
            Facebook
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            <svg
              width={20}
              height={20}
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
            </svg>
            Google
          </button>
        </div>
        <div className="mt-8">
          <Formik
            initialValues={{
              email: 'fergal.moran+audioboos@gmail.com',
              password: 'secret',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required'),
            })}
            onSubmit={async (data) => {
              await doLogin(data.email, data.password);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }: any) => (
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="flex flex-col mb-2">
                  <div className="relative flex ">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm rounded-l-md">
                      <svg
                        width={15}
                        height={15}
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                      </svg>
                    </span>
                    <input
                      type="email"
                      id="login-email"
                      autoComplete="audioboos-current-email"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-r-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <div className="relative flex ">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm rounded-l-md">
                      <svg
                        width={15}
                        height={15}
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                      </svg>
                    </span>
                    <input
                      type="password"
                      id="login-password"
                      autoComplete="audioboos-current-password"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-r-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Your password"
                    />
                  </div>
                </div>
                <div className="flex items-center mb-6 -mt-4">
                  <div className="flex ml-auto">
                    <a
                      href="/auth/forgotpassword"
                      className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
                    >
                      Forgot Your Password?
                    </a>
                  </div>
                </div>
                <div className="flex w-full">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  >
                    Login
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="mt-4 mb-4">
          {error && <AlertWidget text={error} allowDismiss={false} type={AlertWidgetType.Error} />}
        </div>
        <div className="flex items-center justify-center mt-6">
          <a
            href="/auth/register"
            target="_blank"
            className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            <span className="ml-2">You don't have an account?</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import authService from '../../../services/api/authService';
import { logout } from '../../../store/auth';
import { useAuthQuery } from '../../../store/redux/api';

const Authentication = () => {
  const history = useHistory();
  const { data, refetch } = useAuthQuery();
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="relative my-2">
        <button
          onClick={async () => {
            const result = await authService.logout();
            if (result) {
              refetch();
              dispatch(logout());
              setTimeout(() => {
                console.log('Authentication', "Fair enough, I'm a bad person");
                window.location.reload();
              }, 1000);
            }
          }}
          className="px-5 py-2 text-xs text-gray-600 transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded focus:outline-none hover:bg-gray-300"
        >
          Logout
        </button>
      </div>
    </React.Fragment>
  );
};

export default Authentication;

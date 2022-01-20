import React from 'react';
import { createPopper } from '@popperjs/core';
import { Link } from 'react-router-dom';
import authService from '../../services/api/authService';
import { logout } from '../../store/auth';
import { useDispatch } from 'react-redux';
import { useAuthQuery } from '../../store/redux/api';

const UserDropdown = () => {
  // dropdown props
  const { refetch } = useAuthQuery();
  const dispatch = useDispatch();

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<HTMLAnchorElement>();
  const popoverDropdownRef = React.createRef<HTMLDivElement>();
  const openDropdownPopover = () => {
    createPopper(
      btnDropdownRef.current as HTMLAnchorElement,
      popoverDropdownRef.current as HTMLDivElement,
      {
        placement: 'bottom-start',
      }
    );
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="block text-blueGray-500"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-12 h-12 text-sm text-white rounded-full bg-blueGray-200">
            <img
              alt="..."
              className="w-full align-middle border-none rounded-full shadow-lg"
              src="/assets/images/team-1-800x800.jpg"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <Link
          to="/me"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Profile
        </Link>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
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
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default UserDropdown;

import React from 'react';
import { useForm } from 'react-hook-form';
import { MdNavigateNext } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';
import { IconButton } from '../../components/widgets';
import SetupAddLibrary from './SetupAddLibrary';
import SetupCreateAdminUser from './SetupCreateAdminUser';

interface ISetupProps {
  siteName?: string;
  adminUser?: string;
  adminPassword?: string;
  adminPasswordConfirm?: string;
  libraryPath?: string;
}

const SetupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISetupProps>({
    defaultValues: {
      siteName: 'Argle Bargle',
      adminUser: 'fergal.moran+audioboos@gmail.com',
      adminPassword: 'secret',
      adminPasswordConfirm: 'secret',
    },
  });

  let setupInfo: ISetupProps = {};
  const [stage, setStage] = React.useState(0);
  const _handleNext = (data: any) => {
    console.log('SetupPage', '_handleNext', data);
    if (stage === 0) {
      console.log('SetupPage', 'setupInfo', setupInfo);
      setupInfo = { ...setupInfo, ...data };
      console.log('SetupPage', 'setupInfoPost', setupInfo);
      setStage(1);
    } else if (stage === 1) {
      alert("Let's Go!");
    } else {
    }
  };
  return (
    <div className="flex flex-col justify-center min-h-screen px-6 bg-gray-100">
      <div className="-mt-28 sm:mx-auto sm:w-full sm:max-w-md">
        <img className="h-10 mx-auto" src={logo} alt="Header logo" />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-700">
          Welcome to Audioboos...
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600 max-w">Let's get ready!</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-6 py-8 bg-white rounded-lg shadow sm:px-10">
          <form className="mb-0 space-y-6" onSubmit={handleSubmit((data) => _handleNext(data))}>
            {stage === 0 && <SetupCreateAdminUser register={register} />}
            {stage === 1 && <SetupAddLibrary />}
            <div>
              <IconButton text="Next" iconRight={true} fullWidth={true}>
                <MdNavigateNext className="h-8" />
              </IconButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;

import React from 'react';
import { useForm } from 'react-hook-form';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { IconButton } from '../../components/widgets';
import { InitialSettings } from '../../models';
import settingsService from '../../services/api/settingsService';
import SetupAddLibrary from './SetupAddLibrary';
import SetupSiteInfo from './SetupSiteInfo';

interface ISetupRouteParams {
  stage: string;
}
const SetupPage = () => {
  let { stage } = useParams<ISetupRouteParams>();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InitialSettings>({
    defaultValues: {
      siteName: 'Argle Bargle',
      adminUser: 'fergal.moran+audioboos@gmail.com',
      adminPassword: 'secret',
      adminPasswordConfirm: 'secret',
      libraryPath: '/home/fergalm/working/audioboos-library',
    },
  });

  let setupInfo: InitialSettings = {};
  const _handlePrevious = async (data: any) => {
    if (stage === 'library') {
      stage = 'first';
      await __processStage(data);
    }
  };
  const _handleNext = async (data: any) => {
    if (stage === 'first') {
      stage = 'library';
      await __processStage(data);
    } else if (stage === 'library') {
      stage = 'post';
      await __processStage(data);
    }
  };
  const __processStage = async (data: any) => {
    setupInfo = { ...setupInfo, ...data };
    if (stage === 'post') {
      const result = await settingsService.postSettings(setupInfo);
      if (result?.siteName) {
        history.push('/');
      }
    } else {
      history.push(`/setup/${stage}`);
    }
  };
  return (
    <div className="flex flex-col justify-center min-h-screen px-6 bg-gray-100">
      <div className="-mt-28 sm:mx-auto sm:w-full sm:max-w-3xl">
        <img className="h-10 mx-auto" src={logo} alt="Header logo" />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-700">
          Welcome to Audioboos...
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600 max-w">Let's get ready!</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="px-6 py-8 bg-white rounded-lg shadow sm:px-10">
          {stage === 'first' && <SetupSiteInfo register={register} />}
          {stage === 'library' && <SetupAddLibrary register={register} />}
          <div className="flex justify-end mt-4 space-x-4">
            {stage !== 'first' && (
              <IconButton
                text="Previous"
                iconRight={false}
                fullWidth={true}
                onClick={handleSubmit((data) => _handlePrevious(data))}
              >
                <MdNavigateBefore className="h-8" />
              </IconButton>
            )}
            <IconButton
              text="Next"
              iconRight={true}
              fullWidth={true}
              onClick={handleSubmit((data) => _handleNext(data))}
            >
              <MdNavigateNext className="h-8" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;

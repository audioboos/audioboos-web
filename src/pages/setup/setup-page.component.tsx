import React from 'react';
import { useForm } from 'react-hook-form';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useParams, useNavigate } from 'react-router-dom';
import { IconButton } from '../../components/widgets';
import { InitialSettings } from '../../models';
import { Images } from '../../services';
import settingsService from '../../services/api/settings.service';
import { useSettingsQuery } from '../../store/redux/api';
import SetupAddLibrary from './setup-addlibrary-page.component';
import SetupConfirm from './setup-confirm-page.component';
import SetupSiteInfo from './setup-siteinfo-page.component';

const SetupPage = () => {
  const stages = ['first', 'library', 'confirm', 'post'];
  const { data, refetch } = useSettingsQuery();
  let { stage } = useParams();
  let params = useParams();
  const [currentStage, setCurrentStage] = React.useState(stages.findIndex((r) => r === stage));
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log('SetupPage', 'params', params);
    if (!stage) {
      setCurrentStage(0);
      navigate('/setup/first', { replace: true });
    }
  }, [stage]);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<InitialSettings>({
    defaultValues: {
      siteName: 'Argle Bargle',
      adminUser: 'fergal.moran+audioboos@gmail.com',
      adminPassword: 'secret',
      adminPasswordConfirm: 'secret',
    },
  });

  let setupInfo: InitialSettings = {};
  const _handlePrevious = async (data: any) => {
    if (currentStage !== 0) {
      await __processStage(stages[currentStage - 1], data);
    }
  };
  const _handleNext = async (data: any) => {
    if (currentStage !== stages.length - 1) {
      await __processStage(stages[currentStage + 1], data);
    }
  };
  const __processStage = async (stage: string, data: any) => {
    setupInfo = { ...setupInfo, ...data };
    if (stage === 'post') {
      const result = await settingsService.postSettings(setupInfo);
      if (result?.siteName) {
        refetch();
        navigate('/');
      }
    } else {
      navigate(`/setup/${stage}`, { replace: true });
    }
    setCurrentStage(stages.findIndex((r) => r === stage));
  };
  return (
    <div className="flex flex-col justify-center min-h-screen px-6 bg-gray-100">
      <div className="-mt-28 sm:mx-auto sm:w-full sm:max-w-3xl">
        <img className="h-10 mx-auto" src={Images.Logo} alt="Header logo" />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-700">
          Welcome to Audioboos...
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600 max-w">Let's get ready!</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="px-6 py-8 bg-white rounded-lg shadow sm:px-10">
          <form>
            {stages[currentStage] === 'first' && (
              <SetupSiteInfo register={register} setValue={setValue} />
            )}
            {stages[currentStage] === 'library' && (
              <SetupAddLibrary register={register} setValue={setValue} />
            )}
            {stages[currentStage] === 'confirm' && (
              <SetupConfirm register={register} setValue={setValue} />
            )}
          </form>
          <div className="flex justify-end mt-4 space-x-4">
            {stages[currentStage] !== 'first' && (
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

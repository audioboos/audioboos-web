import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { MdDriveFolderUpload, MdFolderOpen } from 'react-icons/md';
import IHookFormProps from '../../components/IHookFormProps';
import fileSystemService from '../../services/api/fileSystemService';

interface IFileInfo {
  key: string;
}
const SetupAddLibrary = ({ register }: IHookFormProps) => {
  const defaultPath = '/';
  const [files, setFiles] = React.useState<IFileInfo[]>();
  const [currentPath, setCurrentPath] = React.useState(defaultPath);

  const _navigateUp = ($event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    $event.preventDefault();
    const newPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
    setCurrentPath(newPath || defaultPath);
  };

  React.useEffect(() => {
    (async () => {
      var files = await fileSystemService.getDirectories(currentPath);
      setFiles(
        files?.map((f) => {
          return {
            key: f,
          };
        })
      );
    })();
  }, [currentPath]);

  return (
    <>
      <div className="max-h-">
        <label htmlFor="email" className="block font-medium text-gray-700 text-md ">
          Audio folder
        </label>
        <div className="mt-1">
          <input
            {...register('libraryPath')}
            value={currentPath}
            id="libraryPath"
            type="text"
            placeholder="Enter path (make this a typeahead)"
            autoComplete="audio-folder"
            required
          />
        </div>
      </div>
      <div className="mt-4 mb-2 ml-2 text-2xl text-gray-600 rounded-sm shadow-sm ">
        <button
          onClick={($e) => _navigateUp($e)}
          className="transition duration-150 ease-in-out hover:text-gray-400"
        >
          <MdDriveFolderUpload />
        </button>
      </div>
      <div className="h-64 overflow-y-scroll">
        {files &&
          files.map((f) => (
            <span key={f.key}>
              <div className="cursor-pointer" onClick={() => setCurrentPath(f.key)}>
                <div className="flex items-center">
                  <MdFolderOpen />
                  <span className="block ml-3 font-normal truncate">
                    {f.key.replace(currentPath, '').replace(/^\//g, '')}
                  </span>
                </div>
              </div>
            </span>
          ))}
      </div>
    </>
  );
};

export default SetupAddLibrary;

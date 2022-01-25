import React from 'react';
import { usePlayLogQuery } from '../../store/redux/api';

const PlaysCard = () => {
  const { data: plays, isLoading, error } = usePlayLogQuery();
  React.useEffect(() => {
    console.log('🚀 ~ file: plays-card.component.tsx ~ line 6 ~ PlaysCard ~ isLoading', isLoading);
    console.log('🚀 ~ file: plays-card.component.tsx ~ line 6 ~ PlaysCard ~ isLoading', isLoading);
    console.log('🚀 ~ file: plays-card.component.tsx ~ line 11 ~ PlaysCard ~ error', error);
  }, [plays, isLoading, error]);
  return (
    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
      <div className="px-4 py-3 mb-0 border-0 rounded-t">
        <div className="flex flex-wrap items-center">
          <div className="relative flex-1 flex-grow w-full max-w-full px-4">
            <h3 className="text-base font-semibold text-blueGray-700">Recently Played</h3>
          </div>
          <div className="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
            <button
              className="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none"
              type="button"
            >
              See all
            </button>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        {/* Projects table */}
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                Artist
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                Album
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                Track
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                Total Plays
              </th>
            </tr>
          </thead>
          <tbody>
            {plays &&
              plays.map((play, index) => (
                <tr key={index}>
                  <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                    {play.artistName}
                  </th>
                  <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                    {play.albumName}
                  </td>
                  <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                    {play.trackName}
                  </td>
                  <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                    <i className="mr-4 fas fa-arrow-up text-emerald-500"></i>
                    46,53%
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaysCard;

import React from 'react';
import IHookFormProps from '../../components/IHookFormProps';

const SetupSiteInfo = ({ register }: IHookFormProps) => {
  return (
    <>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Site name
        </label>
        <div className="mt-1">
          <input
            {...register('siteName')}
            id="siteName"
            placeholder="Title for your site"
            autoComplete="audioboos-site-name"
            type="text"
            required
          />
        </div>
      </div>

      <p className="mt-2 text-lg text-gray-500">Create an admin user</p>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="mt-1">
          <input
            {...register('adminUser')}
            id="email"
            placeholder="Admin user email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1">
          <input
            id="adminPassword"
            {...register('adminPassword')}
            placeholder="Admin user password"
            type="password"
            autoComplete="new-password"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Confirm password
        </label>
        <div className="mt-1">
          <input
            id="adminPasswordConfirm"
            {...register('adminPasswordConfirm')}
            placeholder="Confirm admin user password"
            type="password"
            autoComplete="new-password"
            required
          />
        </div>
      </div>
    </>
  );
};

export default SetupSiteInfo;

import React from 'react';
import useAuth from '../../hooks/useAuth';
const PublisherFieldset = () => {
    const { user } = useAuth();
  const userName = user?.displayName;
  const userEmail = user?.email;
  const userPhoto = user?.photoURL;
    return (
        <>
            {/* publisher name */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Publisher Name</legend>
                <input
                  type="text"
                  name="publisherName"
                  className="input w-full mb-2"
                  value={userName}
                  readOnly
                />
              </fieldset>
              {/* publisher email */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Publisher Email</legend>
                <input
                  type="email"
                  name="publisherEmail"
                  className="input w-full mb-2"
                  value={userEmail}
                  readOnly
                />
              </fieldset>
              {/* publisher photo */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Publisher photo URL</legend>
                <input
                  type="text"
                  name="publisherPhoto"
                  className="input w-full mb-2"
                  value={userPhoto}
                  readOnly
                />
              </fieldset>
        </>
    );
};

export default PublisherFieldset;
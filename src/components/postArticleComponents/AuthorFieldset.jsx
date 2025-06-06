import React from 'react';
import useAuth from '../../hooks/useAuth';

const AuthorFieldset = () => {
    const { user } = useAuth();
  const userName = user?.displayName;
  const userEmail = user?.email;
  const userPhoto = user?.photoURL;
    return (
        <>
            {/* author name */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Author Name</legend>
                <input
                  type="text"
                  name="authorName"
                  className="input w-full mb-2"
                  value={userName}
                  readOnly
                />
              </fieldset>
              {/* author email */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Author Email</legend>
                <input
                  type="email"
                  name="authorEmail"
                  className="input w-full mb-2"
                  value={userEmail}
                  readOnly
                />
              </fieldset>
              {/* author photo */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Author photo URL</legend>
                <input
                  type="text"
                  name="authorPhoto"
                  className="input w-full mb-2"
                  value={userPhoto}
                  readOnly
                />
              </fieldset>
        </>
    );
};

export default AuthorFieldset;
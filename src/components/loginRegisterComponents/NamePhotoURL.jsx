import React from 'react';

const NamePhotoURL = () => {
    return (
        <div>
             <label className="label">Name</label>
            <input name='name' type="text" className="input mb-2 mt-1" placeholder="Name" required/>
            <label className="label">Photo URL</label>
            <input name='photo' type="text" className="input mb-2 mt-1" placeholder="Photo URL" required/>
        </div>
    );
};

export default NamePhotoURL;
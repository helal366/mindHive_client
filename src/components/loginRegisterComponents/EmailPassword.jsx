import React from 'react';

const EmailPassword = () => {
    return (
        <>
            <label className="label">Email</label>
            <input name='email' type="email" className="input mb-2 mt-1" placeholder="Email" required/>
            <label className="label">Password</label>
            <input name='password' type="password" className="input mb-2 mt-1" placeholder="Password" required/>
        </>
    );
};

export default EmailPassword;
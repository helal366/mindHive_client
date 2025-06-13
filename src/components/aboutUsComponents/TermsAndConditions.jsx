import React from 'react';
import { FaCircle, FaScroll } from 'react-icons/fa';

const TermsAndConditions = () => {
    return (
       <div className="mb-8" id='terms'>
                 <h2 className="text-xl font-semibold mb-2 flex items-start gap-3">
                   <FaScroll /> Terms and Conditions
                 </h2>
                 <p className="mb-1">
                   <span>
                     <b>Effective Date: </b>{" "}
                   </span>
                   <span>29th April,2005</span>
                 </p>
                 <p className="mb-4 text-justify">
                   By accessing or using our website and services, you agree to comply
                   with and be bound by the following terms and conditions.
                 </p>
       
                 <h3 className="font-medium text-lg">1. Use of the Platform</h3>
                 <p className="flex items-start gap-2 text-justify">
                   <FaCircle className="mt-1" size={8} /> Users can browse content
                   without registration.
                 </p>
                 <p className="flex items-start gap-2 text-justify">
                   <FaCircle className="mt-1" size={8} /> To post, comment, or
                   interact, users must create an account and authenticate via
                   Firebase.
                 </p>
                 <p className="flex items-start gap-2 text-justify mb-3">
                   <FaCircle className="mt-1" size={8} /> You must be at least 13 years
                   old to register and use the platform.
                 </p>
       
                 <h3 className="font-medium text-lg">2. User-Generated Content</h3>
                 <p className="flex items-start gap-2 text-justify">
                   <FaCircle className="mt-1" size={8} /> You are solely responsible
                   for the content you post.
                 </p>
                 <p className="flex items-start gap-2 text-justify">
                   <FaCircle className="mt-1" size={8} /> We reserve the right to
                   remove content that violates our policies or disrupts the community.
                 </p>
                 <p className="flex items-start gap-2 text-justify mb-3">
                   <FaCircle className="mt-1" size={8} /> We may moderate or remove content that is 
                   inconsistent with our policies or that may hinder healthy community engagement.
                 </p>
       
                 <h3 className="font-medium text-lg">3. Account Security</h3>
                 <p className="flex items-start gap-2 text-justify">
                   <FaCircle className="mt-1" size={8} /> You are responsible for
                   maintaining the confidentiality of your account credentials.
                 </p>
                 <p className="flex items-start gap-2 text-justify mb-3">
                   <FaCircle className="mt-1" size={8} /> Report unauthorized activity
                   immediately to the platform administrators.
                 </p>
       
                 <h3 className="font-medium text-lg">4. Intellectual Property</h3>
                 <p className="flex items-start gap-2 text-justify">
                   <FaCircle className="mt-1" size={8} /> Content posted by users
                   remains their property, but by posting, you grant mindHive a
                   non-exclusive, royalty-free license to display and distribute your
                   content on the platform.
                 </p>
                 <p className="flex items-start gap-2 text-justify mb-3">
                   <FaCircle className="mt-1" size={8} /> All platform code, design,
                   and original content are the property of mindHive.
                 </p>
       
                 <h3 className="font-medium text-lg">5. Limitations of Liability</h3>
                 <p className="flex items-start gap-2 text-justify">
                   <FaCircle className="mt-1" size={8} /> mindHive is not liable for
                   any indirect or consequential losses resulting from the use of the
                   platform.
                 </p>
                 <p className="flex items-start gap-2 text-justify mb-3">
                   <FaCircle className="mt-1" size={8} /> We do not guarantee the
                   accuracy or reliability of user-generated content.
                 </p>
       
                 <h3 className="font-medium text-lg">6. Modifications</h3>
                 <p className="flex items-start gap-2 text-justify mb-3">
                   <FaCircle className="mt-1" size={8} /> We may modify these Terms at
                   any time. Continued use of the platform implies acceptance of the
                   updated terms.
                 </p>
               </div>
    );
};

export default TermsAndConditions;
import React from 'react';
import { FaRocket } from 'react-icons/fa';

const WhyItMatters = () => {
    return (
       <div>
          {" "}
          <h2 className="text-xl font-semibold mb-2 flex items-start gap-3">
            <FaRocket /> Why It Matters
          </h2>
          <p className="text-justify">
            We believe in peer-to-peer learning. Everyone has something valuable
            to share — a unique insight, a new method, or a fresh perspective.
            Our platform is designed to elevate student voices and turn passive
            readers into active contributors.
          </p>
        </div>
    );
};

export default WhyItMatters;
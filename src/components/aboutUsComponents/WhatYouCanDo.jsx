import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const WhatYouCanDo = () => {
    return (
        <div>
          <h2 className="text-xl font-semibold mb-2 flex items-start gap-3">
            <FaLightbulb /> What You Can Do Here
          </h2>
          <p className="mb-2">
            <span>
              <b>Read and Explore: </b>{" "}
            </span>
            <span>
              Browse a wide range of student-written articles across diverse
              categories — no login required.
            </span>
          </p>
          <p className="mb-2">
            <span>
              <b>Write and Share: </b>{" "}
            </span>
            <span>
              Create and publish your own articles, showcasing your expertise or
              ideas.
            </span>
          </p>
          <p className="mb-2">
            <span>
              <b>Engage and Discuss: </b>{" "}
            </span>
            <span>
              Comment on posts, ask questions, and join discussions to deepen
              your understanding.
            </span>
          </p>
          <p className="mb-4">
            <span>
              <b>Customize and Connect: </b>{" "}
            </span>
            <span>
              Use categories and tags to filter content that matters most to
              you.
            </span>
          </p>
        </div>
    );
};

export default WhatYouCanDo;
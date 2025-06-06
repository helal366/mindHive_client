import React from 'react';

const ArticleFieldsets = () => {
    return (
        <>
            {/* title */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Article title</legend>
                
                <input
                  type="text"
                  name="title"
                  className="input mb-2 w-full"
                  placeholder="Article title"
                  required
                />
              </fieldset>
              {/* content */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Content</legend>
                
                <textarea
                  name="content"
                  className="textarea h-40 w-full mb-2"
                  placeholder="Please write your content here"
                  required
                ></textarea>
              </fieldset>
              {/* category */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Category</legend>
                
                <select
                  defaultValue="Science and Technology"
                  name="category"
                  className="select w-full mb-2"
                  required
                >
                  <option disabled={true}>Select your article category</option>
                  <option>Travel</option>
                  <option>Nature and Beauty</option>
                  <option>Health and Wellness</option>
                  <option>Politics and Social Issues</option>
                  <option>Sports and recreation</option>
                  <option>Science and Technology</option>
                  <option>Diet and Exercise</option>
                  <option>Art and Fashion</option>
                  <option>Pet Health</option>
                  <option>Gardening</option>
                </select>
              </fieldset>
              {/* thumbnail image */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Thumbnail Image URL</legend>
                <input
                  name="thumbnail"
                  type="text"
                  className="input w-full mb-2"
                  placeholder="Thumbnail Image URL"
                  required
                />
              </fieldset>

              {/* tags */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Tags</legend>
                <textarea
                  name="tags"
                  className="textarea h-16 w-full mb-2"
                  placeholder="Please write your article tags here. (separated by comma)"
                  required
                ></textarea>
              </fieldset>
              {/* publication data */}
              <fieldset className="fieldset bg-base-200">
                <legend className="fieldset-legend mb-1">Publication DateTags</legend>
                <input
                  type="date"
                  name="publicationDate"
                  className="input w-full mb-2"
                  placeholder="Article publication date"
                  required
                />
              </fieldset>
        </>
    );
};

export default ArticleFieldsets;
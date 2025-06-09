import React, { useEffect, useState } from "react";
import useAxios from "../../../../../hooks/useAxios";
import { toast } from "react-toastify";
import Loading from "../../../../Loading";

const ModalFormFieldsets = ({ id }) => {
  const [singleArticle, setSingleArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxios();
  const {title, content, category, thumbnail, tags,publicationDate}=singleArticle
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axiosSecure
      .get(`/article/${id}`)
      .then((data) => {
        setSingleArticle(data?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [axiosSecure, id]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* title */}
          <fieldset className="fieldset bg-base-200">
            <legend className="fieldset-legend mb-1">Article title</legend>

            <input
              type="text"
              name="title"
              className="input mb-2 w-full"
              defaultValue={title}
              required
            />
          </fieldset>
          {/* content */}
          <fieldset className="fieldset bg-base-200">
            <legend className="fieldset-legend mb-1">Content</legend>

            <textarea
              name="content"
              className="textarea h-40 w-full mb-2"
              defaultValue={content}
              required
            ></textarea>
          </fieldset>
          {/* category */}
          <fieldset className="fieldset bg-base-200">
            <legend className="fieldset-legend mb-1">Category</legend>

            <select
              defaultValue={category}
              name="category"
              className="select w-full mb-2"
              required
            >
              <option disabled={true}>Select your article category</option>
              <option>Travel</option>
              <option>Nature and Beauty</option>
              <option>Health and Wellness</option>
              <option>Science and Technology</option>
              <option>Diet and Exercise</option>
              <option>Personal Finance</option>
              <option>Gardening</option>
            </select>
          </fieldset>
          {/* thumbnail image */}
          <fieldset className="fieldset bg-base-200">
            <legend className="fieldset-legend mb-1">
              Thumbnail Image URL
            </legend>
            <input
              name="thumbnail"
              type="text"
              className="input w-full mb-2"
              defaultValue={thumbnail}
              required
            />
          </fieldset>

          {/* tags */}
          <fieldset className="fieldset bg-base-200">
            <legend className="fieldset-legend mb-1">Tags</legend>
            <textarea
              name="tags"
              className="textarea h-16 w-full mb-2"
              defaultValue={tags}
              placeholder="Please write your article tags here. (separated by comma)"
              required
            ></textarea>
          </fieldset>
          {/* publication data */}
          <fieldset className="fieldset bg-base-200">
            <legend className="fieldset-legend mb-1">Publication Date</legend>
            <input
              type="date"
              name="publicationDate"
              className="input w-full mb-2"
             defaultValue={publicationDate}
              required
            />
          </fieldset>
        </>
      )}
    </>
  );
};

export default ModalFormFieldsets;

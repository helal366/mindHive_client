import React, { useState } from "react";
import ModalForm from "./ModalForm";
import useAxios from "../../../../../hooks/useAxios";
import { toast } from "react-toastify";
import Loading from "../../../../Loading";
// import { useParams } from "react-router";

const Modal = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxios();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target.closest("form");
    const formData = new FormData(form);
    const { tags, ...restFormData } = Object.fromEntries(formData.entries());
    const newTags = tags.split(",").map((tag) => tag.trim());
    const updatedFormData = { ...restFormData, tags:newTags };
    // console.log(updatedFormData);
    setLoading(true);
    axiosSecure
      .put(`/update-article/${id}`, updatedFormData)
      .then((data) => {
        if(data?.data?.acknowledged){
          toast.success('Updated successfully');
          const modal=document.getElementById(id);
          modal?.close()
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="modal-box max-w-5xl w-11/12 mx-auto relative py-4 overflow-hidden">
            <div className="sticky top-0 bg-base-100 pb-2 border-b-3 border-dashed border-base-200">
              <h3 className="font-bold text-lg">Update here!</h3>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 -top-1">
                  ✕
                </button>
              </form>
            </div>

            <div className="overflow-y-auto max-h-[85vh] py-5 px-2">
              <p className="py-4">
                Here you can update your article informations like title of the
                article, article category, article content, thumbnail photo url,
                publication date and tags for the article. Article ID: {id}
                <br />
              </p>
              <ModalForm id={id} handleUpdate={handleUpdate} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

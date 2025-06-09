import React from "react";
import Paragraph from './Paragraph';
import ModalForm from "./ModalForm";

const Modal = ({ id }) => {
    console.log(id)
    return (
        <div>
            <div className="modal-box max-w-5xl w-11/12 mx-auto relative py-4 overflow-hidden">
      <div className="sticky top-0 bg-base-100 pb-2 border-b-3 border-dashed border-base-200">
        <h3 className="font-bold text-lg">Update here!</h3>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>


      <div className="overflow-y-auto max-h-[85vh] py-5 px-2">
        <p className="py-4">
            Here you can update your article informations like title of the article, article category, article content, thumbnail photo url, publication date and tags for the article. Article id: {id}
           <br />
         
          
        </p>
        <ModalForm/>
        <div className="modal-action">
          <form method="dialog w-full bg-green-500">
            <button className="btn">Save</button>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Modal;
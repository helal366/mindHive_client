import React from "react";
import ModalFormFieldsets from "./ModalFormFieldsets";

const ModalForm = () => {
  return (
    <>
      <div className="card bg-base-200 w-full max-w-4xl mx-auto py-5 shrink-0 shadow-2xl border border-neutral-600">
        <div className="card-body">
          <form>
              <ModalFormFieldsets/>
            
          </form>
        </div>
      </div>
      {/* title */}
    </>
  );
};

export default ModalForm;

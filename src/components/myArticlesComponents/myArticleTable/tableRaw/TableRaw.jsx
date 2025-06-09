import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import Modal from "./modalForm/Modal";
import TableRawData from "./TableRawData";

const TableRaw = ({ article, index }) => {
  const {  _id,  } = article;
  
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <TableRawData article={article}/>
        
        <td>
          <div className="join join-vertical">
           
            <button 
            onClick={() => document.getElementById(`${_id}`).showModal()}
            data-tooltip-id="edit" 
            className="btn join-item sm:mb-1">
              <MdEdit size={20} color="teal" />
            </button>
            <Tooltip id="edit" content="Edit or Update" />
            <button data-tooltip-id="delete" className="btn join-item">
              <MdDeleteForever size={20} color="teal" />
            </button>
            <Tooltip id="delete" content="Delete" />
          </div>

          {/* modal */}
          <dialog id={`${_id}`} className="modal ">
            <Modal id={`${_id}`}/>
          </dialog>
        </td>
      </tr>
    </>
  );
};

export default TableRaw;

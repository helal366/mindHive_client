import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import Modal from "./modalForm/Modal";
import TableRawData from "./TableRawData";
import useAxios from "../../../../hooks/useAxios";
import Loading from "../../../Loading";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const TableRaw = ({ article, index, handleDeletedUI }) => {
  const axiosSecure = useAxios();
  const { _id } = article;
  const [loading, setLoading] = useState(false);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        axiosSecure
          .delete(`/delete-article/${id}`)
          .then((result) => {
            if (result?.data?.acknowledged) {
              handleDeletedUI?.(_id)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            toast.err(err.message);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    });
  };

  return (
    <>
      <tr>
        {loading ? (
          <td colSpan="100%">
            <Loading/>
          </td>
        ) : (
          <>
            <th>{index + 1}</th>
            <TableRawData article={article} />

            <td>
              <div className="join join-vertical">
                <button
                  onClick={() => document.getElementById(`${_id}`).showModal()}
                  data-tooltip-id="edit"
                  className="btn join-item sm:mb-1"
                >
                  <MdEdit size={20} color="teal" />
                </button>
                <Tooltip id="edit" content="Edit or Update" />
                <button
                  onClick={() => handleDelete(_id)}
                  data-tooltip-id="delete"
                  className="btn join-item"
                >
                  <MdDeleteForever size={20} color="teal" />
                </button>
                <Tooltip id="delete" content="Delete" />
              </div>

              {/* modal */}
              <dialog id={`${_id}`} className="modal ">
                <Modal id={`${_id}`} />
              </dialog>
            </td>
          </>
        )}
      </tr>
    </>
  );
};

export default TableRaw;

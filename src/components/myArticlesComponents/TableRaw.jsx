import React from 'react';
import { format } from "date-fns";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdViewList } from "react-icons/md";

const TableRaw = ({article, index}) => {
    const { title, _id, thumbnail, category, publicationDate } =
              article;
              const publishDate = format(
              new Date(publicationDate),
              "do MMM yyyy"
            );
    return (
        <>
            <tr >
                <th>{index+1}</th>
                <td className='hidden sm:block'>
                  <div className="avatar">
                    <div className="mask mask-squircle h-20 w-20 sm:h-24 sm:w-24 border-4 bg-white p-1 border-neutral-600">
                      <img src={thumbnail} alt={title} />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold text-xs md:text-lg">{title}</div>
                    <div className="text-sm opacity-50 font-semibold">
                      {publishDate}
                    </div>
                  </div>
                </td>
                <td className='hidden sm:block'>
                  <div className="font-bold text-xs md:text-lg">{category}</div>
                </td>
                <td>
                  <div className="join join-vertical">
                    <button className="btn join-item sm:mb-1"><MdViewList size={20} color='teal'/></button>
                    <button className="btn join-item sm:mb-1"><MdEdit size={20} color='teal'/></button>
                    <button className="btn join-item"><MdDeleteForever size={20} color='teal'/></button>
                  </div>
                </td>
              </tr>
        </>
    );
};

export default TableRaw;
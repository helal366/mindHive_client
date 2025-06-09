import React from 'react';
import { format } from "date-fns";

const TableRawData = ({article}) => {
    const {thumbnail, title, publicationDate, category}=article
const publishDate = format(new Date(publicationDate), "do MMM yyyy");
    return (
        <>
            <td className="hidden sm:block">
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
        <td className="hidden sm:block">
          <div className="font-bold text-xs md:text-lg">{category}</div>
        </td>
        </>
    );
};

export default TableRawData;
import React from "react";

import TableRaw from './tableRaw/TableRaw'
import TableHead from './TableHead'

const MyArticlesTable = ({ filteredArticles, handleDeletedUI }) => {
  return (
    <div className=" bg-base-300 rounded-2xl py-2 sm:py-4 md:py-6 lg:py-8 px-[2px] sm:px-2 md:px-3 lg:px-5">
      <table className="table ">
        {/* head */}
        <thead >
          <TableHead/>
        </thead>
        <tbody>
          {/* row 1 */}
          {filteredArticles.map((article, index) => (
            <TableRaw key={article._id} article={article} index={index} handleDeletedUI={handleDeletedUI} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyArticlesTable;

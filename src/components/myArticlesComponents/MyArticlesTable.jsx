import React from "react";

import TableRaw from "./TableRaw";

const MyArticlesTable = ({ filteredArticles }) => {
  // console.log(filteredArticles);
  return (
    <div className="">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th className="hidden sm:block"> 
                <span className="font-bold text-xs md:text-lg">Thumbnail</span>{" "}
              &nbsp;
              <span className="font-bold text-xs md:text-lg">Photo</span>

            </th>
            <th>
          
                <div className="flex flex-wrap">
                  <span className="font-bold text-xs md:text-lg">
                    Article
                  </span>{" "}
                  &nbsp;
                  <span className="font-bold text-xs md:text-lg">
                    Title
                  </span>
                </div>
                <div className="text-sm opacity-50 font-semibold flex flex-wrap">
                  <span className="font-bold text-xs md:text-sm">
                    Published
                  </span>{" "}
                  &nbsp;
                  <span className="font-bold text-xs md:text-sm">
                    on
                  </span>
                </div>
            
            </th>
            <th className=" hidden sm:block">
              <span className="font-bold text-xs md:text-lg">Article</span>{" "}
              &nbsp;
              <span className="font-bold text-xs md:text-lg">Category</span>
            </th>
            <th>Ations</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {filteredArticles.map((article, index) => (
            <TableRaw key={article._id} article={article} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyArticlesTable;

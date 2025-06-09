import React from 'react';

const TableHead = () => {
    return (
        <>
            <tr className='border-b-3 border-dashed border-base-200'>
            <th>#</th>
            <th className="hidden sm:block"> 
                <span className="font-bold text-xs md:text-lg">Thumbnail</span>{" "}
              &nbsp;
              <span className="font-bold text-xs md:text-lg">Photo</span>

            </th>
            <th >
          
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
            <th className=' font-bold text-xs md:text-lg p-0'>
                Actions
            </th>
          </tr>
        </>
    );
};

export default TableHead;
import { FiEdit, FiEye, FiSettings } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";




const itemsPerPage = 10;

const Tenants = () => {
    const [currentPage, setCurrentPage] = useState(1);

  const styles = {
    headerStyles: "px-6 py-6 ",
    bookingBotton: " bg-purple-700 font-bold text-white rounded-md px-3 py-1 hover:bg-purple-500 duration-300"
  }



  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
//   const itemsToShow = rooms.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  

  return (
    <div>
      <div className="overflow-x-auto ">
        <div className="flex justify-between px-3 py-5 mx-3 my-5 border rounded-md ">
          <div>
            <h2 className="text-2xl font-bold ">Tenants List</h2>
            
          </div>

          
      
          <Link
            to="addRoom/"
            className="flex items-center justify-center w-10 h-10 text-white bg-[#101924] rounded "
          >
            <FiPlus size={25} />
          </Link>
        </div>
        <table className="w-full mt-5 text-sm text-left text-gray-500 border rounded-md shadow-xl dark:text-gray-400 ">
          <thead className="">
            <tr className="border-b  border-slate-300 font-medium">
              <th className={styles.headerStyles}>First Name</th>
              <th className={styles.headerStyles}>Last Name</th>
              <th className={styles.headerStyles}>Email Adress</th>
              <th className={styles.headerStyles}>Property Name</th>
              <th className={styles.headerStyles}>Room Number</th>
              <th className={styles.headerStyles}>Status</th>
              <th className={styles.headerStyles}>action</th>
            </tr>
          </thead>

          <tbody>

          <tr className=" border-b my-4 border-slate-300 font-medium">
              <td className='py-4 px-4'>Joshua</td>
              <td className='py-4 px-4'>Baraza</td>
              <td className='py-4 px-4'>Joshua@gmail.com</td>
              <td className='py-4 px-4'>Kasarani</td>
              <td className='py-4 px-4'>R205</td>
              <td className='py-4 px-4'>paid</td>
              <td className='py-4 px-4'>action</td>
            </tr>


            <tr className=" border-b my-4 border-slate-300 font-medium">
              <td className='py-4 px-4'>Joshua</td>
              <td className='py-4 px-4'>Baraza</td>
              <td className='py-4 px-4'>Joshua@gmail.com</td>
              <td className='py-4 px-4'>Kasarani</td>
              <td className='py-4 px-4'>R205</td>
              <td className='py-4 px-4'>paid</td>
              <td className='py-4 px-4'>action</td>
            </tr>


            <tr className=" border-b my-4 border-slate-300 font-medium">
              <td className='py-4 px-4'>Joshua</td>
              <td className='py-4 px-4'>Baraza</td>
              <td className='py-4 px-4'>Joshua@gmail.com</td>
              <td className='py-4 px-4'>Kasarani</td>
              <td className='py-4 px-4'>R205</td>
              <td className='py-4 px-4'>paid</td>
              <td className='py-4 px-4'>action</td>
            </tr>



            <tr className=" border-b my-4 border-slate-300 font-medium">
              <td className='py-4 px-4'>Joshua</td>
              <td className='py-4 px-4'>Baraza</td>
              <td className='py-4 px-4'>Joshua@gmail.com</td>
              <td className='py-4 px-4'>Kasarani</td>
              <td className='py-4 px-4'>R205</td>
              <td className='py-4 px-4'>paid</td>
              <td className='py-4 px-4'>action</td>
            </tr>



            <tr className=" border-b my-4 border-slate-300 font-medium">
              <td className='py-4 px-4'>Joshua</td>
              <td className='py-4 px-4'>Baraza</td>
              <td className='py-4 px-4'>Joshua@gmail.com</td>
              <td className='py-4 px-4'>Kasarani</td>
              <td className='py-4 px-4'>R205</td>
              <td className='py-4 px-4'>paid</td>
              <td className='py-4 px-4'>action</td>
            </tr>

            <tr className=" border-b my-4 border-slate-300 font-medium">
              <td className='py-4 px-4'>Joshua</td>
              <td className='py-4 px-4'>Baraza</td>
              <td className='py-4 px-4'>Joshua@gmail.com</td>
              <td className='py-4 px-4'>Kasarani</td>
              <td className='py-4 px-4'>R205</td>
              <td className='py-4 px-4'>paid</td>
              <td className='py-4 px-4'>action</td>
            </tr>

            <tr className=" border-b my-4 border-slate-300 font-medium">
              <td className='py-4 px-4'>Joshua</td>
              <td className='py-4 px-4'>Baraza</td>
              <td className='py-4 px-4'>Joshua@gmail.com</td>
              <td className='py-4 px-4'>Kasarani</td>
              <td className='py-4 px-4'>R205</td>
              <td className='py-4 px-4'>paid</td>
              <td className='py-4 px-4'>action</td>
            </tr>

            <tr className=" border-b my-4 border-slate-300 font-medium">
              <td className='py-4 px-4'>Joshua</td>
              <td className='py-4 px-4'>Baraza</td>
              <td className='py-4 px-4'>Joshua@gmail.com</td>
              <td className='py-4 px-4'>Kasarani</td>
              <td className='py-4 px-4'>R205</td>
              <td className='py-4 px-4'>paid</td>
              <td className='py-4 px-4'>action</td>
            </tr>

            <tr className=" border-b my-4 border-slate-300 font-medium">
              <td className='py-4 px-4'>Joshua</td>
              <td className='py-4 px-4'>Baraza</td>
              <td className='py-4 px-4'>Joshua@gmail.com</td>
              <td className='py-4 px-4'>Kasarani</td>
              <td className='py-4 px-4'>R205</td>
              <td className='py-4 px-4'>paid</td>
              <td className='py-4 px-4'>action</td>
            </tr>

            {/* {itemsToShow.map((room, index) => (
              <tr key={index} className="duration-300 ease-in border">
                <td className={styles.headerStyles}>{room.room_number}</td>
                <td className={styles.headerStyles}>{room.room_type}</td>
                <td className="px-6 py-6 text-green-400 ">
                  {room.air_condition}
                </td>
                <td className="px-6 py-6">{room.meal}</td>
                <td className={styles.headerStyles}>{room.bed_capacity}</td>
                <td className={styles.headerStyles}>{room.rent} USD</td>
                <td 
                >
                  <tr >
                    <td className={`px-6 py-6 font-bold ${
                    room.status === "open"
                      ? "text-green-500"
                      : "text-orange-500"
                      }`}>{room.status}</td>
                    {room.status === 'open' &&  <td className="px-6 py-6 " ><Link to='addBooking/'><span className={styles.bookingBotton}>book</span> </Link> </td>}
                   
                  </tr>
                </td>

                <td className={styles.headerStyles}>
                  <tr>
                  <Link to={`edit/${room.id}`}><td className='px-2'>< FiEdit size={18}/></td></Link>
                            <Link to={`${room.id}`}><td className='px-2'>< FiEye size={18}/></td></Link>
                            <td onClick={() => handleDelete(room.id)} className='px-2 text-red-500 hover:cursor-pointer'><RiDeleteBin6Line size={18}/></td>
                  </tr>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>

       
     

        {/* Pagination controls */}
        <div className="flex justify-center my-5">
          <button
            className="p-2 text-white bg-[#101924] border rounded-md cursor-pointer "
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>

          <span className="mx-4">
            Page 
            
            {/* {currentPage} of {Math.ceil(rooms.length / itemsPerPage)} */}
          </span>
          <button
            className="p-2 text-white bg-[#101924] border rounded-md cursor-pointer "
           
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
    </div>
  );
};

export default Tenants;
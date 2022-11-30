import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Report = () => {
  const { user } = useContext(AuthContext);

  const url = "http://localhost:5000/report";

  const { data: reports = [] } = useQuery({
    queryKey: ["reports", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    console.log("products", id);
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/report/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = reports.filter((rvw) => rvw._id !== id);
            data(remaining);
            toast.success("Successfully deleted");
          }
        });
    }
  };

  return (
    <div>
      <h3 className="text-3xl capitalize py-2">Reports</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {reports?.map((report, i) => (
              <tr key={report._id}>
                <th>{i + 1}</th>
                <td>
                  <div className=" w-16 h-12">
                    <img src={report.img} alt="" />
                  </div>
                </td>
                <td>{report.name}</td>
                <td>{report.resale_price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(report._id)}
                    className="btn btn-secondary btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;

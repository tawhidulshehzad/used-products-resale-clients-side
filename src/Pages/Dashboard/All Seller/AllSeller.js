import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSeller = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  // const handleMakeAdmin = (id) => {
  //   fetch(`http://localhost:5000/users/admin/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.modifiedCount > 0) {
  //         toast.success("admin successful.");
  //         refetch();
  //       }
  //     });
  // };

  const handleDelete = (id) => {
    console.log("products", id);
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = users.filter((rvw) => rvw._id !== id);
            data(remaining);
            toast("Successfully deleted");
          }
        });
    }
  };

  // make verfied
  const handleMakeVerified = (id) => {
    fetch(`http://localhost:5000/users/seller/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Verfied successful.");
          refetch();
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                {user?.actype === "seller" && (
                  <div>
                    <td className="capitalize">
                      <div className="flex">
                        <h4>{user.name}</h4>
                        <div>
                          {user.verify === "verified" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 mx-2 text-blue-700"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>

                    <td>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-xs btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      {user.verify === "verified" ? (
                        <button className="btn btn-xs btn-danger">
                          Verfied
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMakeVerified(user._id)}
                          className="btn btn-xs btn-danger"
                        >
                          Unverified
                        </button>
                      )}
                    </td>
                  </div>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;

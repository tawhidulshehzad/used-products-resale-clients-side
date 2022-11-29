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
                    <td>{user.name}</td>
                    <td>{user.email}</td>
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
                      <button className="btn btn-xs btn-danger">
                        Unverified
                      </button>
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

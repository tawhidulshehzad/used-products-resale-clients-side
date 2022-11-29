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
                      <button className="btn btn-xs btn-danger">Delete</button>
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

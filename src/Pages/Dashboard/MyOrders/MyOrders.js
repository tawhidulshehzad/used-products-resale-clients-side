import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useSeller from "../../../hooks/useSeller";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  const navigate = useNavigate();

  if (isAdmin) {
    navigate("/dashboard/allusers");
  }
  if (isSeller) {
    navigate("/dashboard/addproduct");
  }

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
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

  return (
    <div>
      <h3 className="text-3xl capitalize py-2">My orders</h3>
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
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={booking.img} alt="" />
                  </div>
                </td>
                <td>{booking.bookName}</td>
                <td>{booking.price}</td>
                <td className="btn btn-secondary ">Pay</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
// img, title, price, pay btn

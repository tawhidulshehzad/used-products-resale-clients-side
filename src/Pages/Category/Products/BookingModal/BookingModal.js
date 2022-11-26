import React from "react";

const BookingModal = ({ book, setBook }) => {
  const { name, resale_price } = book;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const UserName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      bookName: name,
      UserName: name,
      email,
      phone,
    };

    console.log(name, email, phone, location);
    setBook(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold my-5">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-2">
            <input
              disabled
              name="name"
              type="text"
              placeholder="User Name"
              className="input-bordered input w-full"
            />
            <input
              name="email"
              disabled
              type="text"
              placeholder="Email"
              className="input-bordered input w-full"
            />
            <label className="label p-0">
              <span className="label-text">Book Price</span>
            </label>
            <input
              disabled
              type="text"
              value={resale_price}
              className="input-bordered input w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Enter phone number"
              className="input-bordered input w-full"
            />
            <input
              name="location"
              type="text"
              placeholder="Type Location"
              className="input-bordered input w-full"
            />

            <br />
            <input
              className="w-full btn btn-primary rounded-lg"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

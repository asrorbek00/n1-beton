import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const sendAlert = () => toast.success("Xabaringiz yuborildi");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    messages: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://backend.n1beton.uz/contact-us/";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        sendAlert();

        // Clear the form fields
        setFormData({
          name: "",
          surname: "",
          phone: "",
          email: "",
          messages: "",
        });
      } else {
        console.error("Error:", response.status, response.statusText);
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <>
      <div  id="contact">
        <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-black ml-[8%] buyan">BIZ BILAN BOG`LANISH</h1>
      </div>
      <div className=" ml-[8%] map pt-20">
        <div className="px-5 bg-[#FFF] contact  py-14  ml-8 lg:w-[35%]  sm:w-[80%] flex flex-col gap-10 rounded-xl ">
          <h1 className="text-3xl text-black text-center number">
            Biz Bilan Bog`lanish
          </h1>
          <form onSubmit={handleSubmit}>
            <ToastContainer />
            <div className="flex gap-3 lg:mb-16 sm:mb-5">
              <input
                className="pl-2 pb-1 w-full"
                type="text"
                placeholder="Ism"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="pl-2 pb-1 w-full "
                type="text"
                placeholder="Familiya"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3 lg:mb-16 sm:mb-5">
              <input
                className="pl-2 pb-1  w-full"
                type="text"
                placeholder="Tel:"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                className="pl-2 pb-1 w-full"
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3 lg:mb-16 sm:mb-5">
              <textarea
                className="pl-2 pb-1 resize-none w-full "
                placeholder="Xabar"
                name="messages"
                value={formData.messages}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white py-2 lg:px-10 sm:px-5 rounded-lg lg:ml-[28%] md:ml-[23%] sm:ml-[0%] "
            >
              Xabar qoldirish
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

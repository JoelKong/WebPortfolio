import { useState, useEffect } from "react";
import Modal from "./Modal";
import Footer from "./Footer";

export default function ContactMe(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [modalMessage, setModalMessage] = useState<any>({
    active: false,
    type: "fail",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setModalMessage({
        active: true,
        type: "fail",
        message: "Please fill in all fields",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setLoading(false);
        setModalMessage({
          active: true,
          type: "pass",
          message: "Email sent successfully!",
        });
      } else {
        setLoading(false);
        setModalMessage({
          active: true,
          type: "fail",
          message: "Something went wrong. Please try again",
        });
      }
    } catch (error) {
      setModalMessage({
        active: false,
        type: "fail",
        message: "Something went wrong. Please try again",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setModalMessage({ active: false, type: "fail", message: "" });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [modalMessage]);

  return (
    <>
      <section className="relative pt-28 w-screen h-screen flex flex-col items-center bg-[#0D1117]">
        {modalMessage.active && <Modal modal={modalMessage} />}
        <span className="text-3xl text-[#01F53F] font-bold tracking-wide">
          Contact Me
        </span>
        <p className="text-lg md:text-xl text-center pt-4 text-[#01F53F] font-bold tracking-wide">
          Drop me an email and I will get back to you!
        </p>
        <form
          className="relative mt-12 pb-6 pl-4 md:pl-8 pt-4 w-11/12 md:w-5/12 rounded-lg border-2 border-[#077C24] flex flex-col"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-white font-semibold tracking-widest pb-2"
            >
              Name:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              value={formData.name}
              name="name"
              className="w-11/12 h-10 rounded-md pl-2 pr-2 text-xl tracking-wide"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label
              htmlFor="email"
              className="text-white font-semibold tracking-widest pb-2"
            >
              Email:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              value={formData.email}
              name="email"
              className="w-11/12 h-10 rounded-md pl-2 pr-2 text-xl tracking-wide"
              type="email"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label
              htmlFor="message"
              className="text-white font-semibold tracking-widest pb-2"
            >
              Message:
            </label>
            <textarea
              onChange={(e) => handleChange(e)}
              value={formData.message}
              name="message"
              className="w-11/12 h-44 rounded-md pl-2 pr-2 text-xl pt-2 tracking-wide resize-none"
            />
          </div>
          <div className="mt-6">
            <button
              disabled={loading}
              type="submit"
              onSubmit={(e) => handleSubmit(e)}
              className="w-11/12 h-12 bg-blue-300 rounded-lg hover:bg-blue-400 disabled:cursor-not-allowed flex justify-center items-center disabled:animate-pulse"
            >
              {loading ? (
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                <p className="font-semibold text-lg tracking-widest">Submit</p>
              )}
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

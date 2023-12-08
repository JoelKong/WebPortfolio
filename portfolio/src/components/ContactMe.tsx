import { useState } from "react";

export default function ContactMe(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        // You can add additional logic here, such as showing a success message
      } else {
        console.error("Error sending email");
        // Handle error, you can show an error message to the user
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="pt-28 w-screen h-screen flex flex-col items-center bg-[#0D1117]">
      <span className="text-3xl text-[#01F53F] font-bold tracking-wide">
        Contact Me
      </span>
      <p className="text-lg md:text-xl text-center pt-4 text-[#01F53F] font-bold tracking-wide">
        Drop me an email and I will get back to you!
      </p>
    </section>
  );
}

import { useRef } from "react";
import emailjs from "emailjs-com";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { toast } from "sonner"

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_vmfu879", // Replace with your actual EmailJS service ID
        "template_d5enc98", // Replace with your actual EmailJS template ID
        formRef.current,
        "mQQaS7Y8zQH67Di1P" // Replace with your actual EmailJS user/public key
      )
      .then(
        () => {
            toast.success("Email sent successfully")
          e.target.reset(); // Reset the form after submission
        },
        () => {
          toast.error("Failed to send email")

        }
      );
  };

  const LabelInputContainer = ({ children, className }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };

  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent text-white border border-gray-600 mt-10 sm:mt-6 md:mt-8 lg:mt-10"
    
    data-aos="zoom-in-up"
     >
      <center>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Get in touch
        </p>
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
          Contact me
        </h2>
      </center>

      <form className="my-8 bg-transparent" ref={formRef} onSubmit={sendEmail}>
        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            type="text"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="my-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="youremail@example.com"
            type="email"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="my-4">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            className="w-full bg-zinc-800 rounded-md p-2 focus:ring focus:ring-white focus:border-1 focus:outline-none dark:border-neutral-700 dark:bg-black text-white"
            rows="4"
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br from-black to-neutral-600 mt-6 dark:from-zinc-900 dark:to-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-md hover:opacity-90 transition-opacity"
          type="submit"
        >
          Send &rarr;
        </button>
      </form>
    </div>
  );
};

export default Contact;


{/* <div className='m_container'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
      <div className='contact'>
        <div className='contact_container'>
          <form ref={form} onSubmit={sendEmail}>
        <div className='first_block'>
        <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name'  placeholder='Your Name' required />
        </div>

           <div className='second_block'>
           <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' placeholder='Your Email' required/>
           </div>

           <div className='second_block'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' placeholder='Your Message' rows="10" cols="35" required></textarea>
            </div>
            <button type='submit' className='btn btn-primary button'>Send</button>
          </form>
        </div>
      </div>
    </div> */}
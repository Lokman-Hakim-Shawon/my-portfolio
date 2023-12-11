import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const EmailForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6dsk12g', 'template_kbmikq8', form.current, 'GzJCnzv2qNGyYuwaT')
      .then(() => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "E-mail send successfull.",
            showConfirmButton: false,
            timer: 2000
          });
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className="my-10 w-5/6 mx-auto">
            <form ref={form} onSubmit={sendEmail}>
            <div className="flex gap-5 w-full justify-center ">
                <div className="flex flex-col gap-5 w-full mx-auto flex-1 ">
                <input type="text" name="user_name" placeholder="Type Your Name" className="input input-bordered border-blue-500 w-full max-w-lg" />
                <input type="text" name="user_email" placeholder="Type Your E-mail" className="input input-bordered border-blue-500 w-full max-w-lg" />
                </div>
                <textarea name="message"  className="flex-1 textarea textarea-bordered border border-blue-500" placeholder="Message..."></textarea>
            </div>
            <button className="btn bg-blue-500 text-white w-full my-5">Send E-mail</button>

            </form>
        </div>
    );
};

export default EmailForm;
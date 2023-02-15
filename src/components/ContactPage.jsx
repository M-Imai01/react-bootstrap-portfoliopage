import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";


export function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hq14kvq', 'template_jgzt75t', e.target, 'hDwFp1OefzmNvq2pV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }

return (
  <div>
    <div className="container container-box">
      <h1>お問い合わせ</h1>
      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder="お名前" name="name" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="メールアドレス" name="email" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="件名" name="subject" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea className="form-control" id="" cols="30" rows="8" placeholder="内容" name="message"></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input type="submit" className="btn btn-info" value="Send"></input>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}
export default Contact;

// Styles

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         form.current,
//         process.env.REACT_APP_PUBLIC_KEY
//       )
//       .then(
//         (result) => {
//           alert(result.text);
//         },
//         (error) => {
//           alert(error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <br />
//       <input type="text" name="user_name" />
//       <br />
//       <label>Email</label>
//       <br />
//       <input type="email" name="email" />
//       <br />
//       <label>Message</label>
//       <br />
//       <textarea name="message" />
//       <br />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default Contact;
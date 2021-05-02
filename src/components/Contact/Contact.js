import React from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        if (e.target.email.value !== "" && e.target.name.value !== "" && e.target.message.value !== "") {
            emailjs.sendForm('service_fgf4j54', 'template_0qvnnxw', e.target, 'user_pITFw8RaaYq2gj0rIQMkh')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset()
        }
        else{
            alert("Please fill Properly");
        }
    }

    return (
        <div>
            <div className="container mb-4" id = "contact">
                <h1 className = "text-center">Contact</h1>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
                <p className = "text-center m-4">All Rights Reserved. Warid Bin Azad. 2021</p>
            </div>
        </div>
    );
};

export default Contact;
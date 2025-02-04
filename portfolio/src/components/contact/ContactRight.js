import React, { useState } from 'react'
import emailjs from "emailjs-com";

function ContactRight() {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [suggestions, setSuggestions] = useState([]); // State for email suggestions
    const emailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']; // Add more domains as needed

    //---Email Address Validation---//

    const emailValidation = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    //---Email Address Validation End---//

    //---Phone Number Validation---//

    const validatePhoneNumber = (phoneNumber) => {
        const basicRegex = /^\d{10}$/; // Match exactly 10 digits (basic validation)
        const internationalRegex = /^(?:\+\d{1,3})?\s?\(?\d{1,4}?\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/; // Match international format
    
        return basicRegex.test(phoneNumber) || internationalRegex.test(phoneNumber);
    };
    //---Phone Number Validation End---//

    //--- Handle Email Input Change ---//
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (value.includes('@')) {
            const emailPart = value.split('@')[0]; // Part before '@'
            const domainPart = value.split('@')[1]; // Part after '@'

            // Generate suggestions based on the domain part
            if (domainPart) {
                const filteredSuggestions = emailDomains
                    .filter(domain => domain.startsWith(domainPart))
                    .map(domain => `${emailPart}@${domain}`);
                
                setSuggestions(filteredSuggestions);
            } else {
                setSuggestions([]); // Clear suggestions if there's no domain
            }
        } else {
            setSuggestions([]); // Clear suggestions if there's no '@'
        }
    };

    //--- Handle Suggestion Click ---//
    const handleSuggestionClick = (suggestion) => {
        setEmail(suggestion); // Set the email to the clicked suggestion
        setSuggestions([]); // Clear suggestions
    };

    //---Submit Form---//

    const handleSend=(e)=> {
        e.preventDefault()
        if (username === "") {
            setErrMsg('Please enter your name!');
        }else if (phoneNumber === "") {
            setErrMsg('Please enter your phone number!');
        }else if (!validatePhoneNumber(phoneNumber)) { // Validate phone number format
            setErrMsg('Invalid phone number format!');
        }else if (email === "") {
            setErrMsg('Please enter your email!');
        }else if (!emailValidation(email)) {
            setErrMsg('Invalid email format!');
        }else if (subject === "") {
            setErrMsg('Please enter your message title!');
        }else if (message === "") {
            setErrMsg('Please type your message!');
        }else {
            setSuccessMsg(`Thank you ${username}, Your Message has been sent Successfully!`);
            setUsername('');
            setPhoneNumber('');
            setEmail('');
            setSubject('');
            setMessage('');
            setErrMsg('');
        }

        // Send email using EmailJS
        emailjs.send(
            'service_vb7rk21', // replace with your EmailJS service ID
            'template_4o9h248', // replace with your EmailJS template ID
            {
                from_name: username,
                from_phone: phoneNumber,
                from_email: email,
                from_subject: subject,
                from_message: message,
            },
            'liBI_X_VQYHcllTAV' // replace with your EmailJS user ID
        )
        .then(() => {
            // Send a thank-you reply email
            return emailjs.send(
                'service_vb7rk21', // Use the same or another service ID
                'template_rcm8jyr', // Replace with your thank-you template ID
                {
                    to_email: email, // The user's email address
                    user_name: username, // The user's name for personalization
                    feedback_message: message, // Optionally include the original message
                },
                'liBI_X_VQYHcllTAV' // Replace with your EmailJS user ID
            );
        })

        .then(() => {
            setSuccessMsg(`Thank you ${username}, Your Message has been sent Successfully!`);
            setUsername('');
            setPhoneNumber('');
            setEmail('');
            setSubject('');
            setMessage('');
            setErrMsg('');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            setErrMsg('Failed to send message. Please try again later.');
        });

        // Hide the success message after 5 seconds
        setTimeout (() =>{
            setSuccessMsg('');
            setErrMsg('');
        },5000);
    };

  return (
    <div className='w-full lgl:w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 rounded-lg p-4 lgl:p-8 shadow-shadowOne'>
        <form className='w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5'>
            {
                errMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
            )}

            {/* {
                successMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
            )} */}
            <div className='w-full flex flex-col lgl:flex-row gap-10'>
                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Name:</p>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} 
                    className={`w-full h-12 ${errMsg === "Please enter your name!" && "outline-designColor"} rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`} type="text" placeholder='Enter Your Name'/>
                </div>

                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number:</p>
                    <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} 
                    className={`w-full h-12 ${errMsg === "Please enter your phone number!" && "outline-designColor"} rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`} type="text" placeholder='Enter Your Phone Number' />
                </div>
            </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Email Address:</p>
                    <input onChange={handleEmailChange} value={email} 
                    className={`w-full h-12 ${errMsg === "Please enter your email!" && "outline-designColor"} rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`} type="email" placeholder='Enter Your Email Address'/>
                    {suggestions.length > 0 && (
                        <ul className="suggestions-list absolute bg-[#191b1e] w-auto -mt-1 rounded-lg shadow-lg">
                            {suggestions.map((suggestion, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => handleSuggestionClick(suggestion)} 
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-700 rounded-lg"
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject:</p>
                    <input onChange={(e) => setSubject(e.target.value)} value={subject} 
                    className={`w-full h-12 ${errMsg === "Please enter your message title!" && "outline-designColor"} rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`} type="text" placeholder='Enter Your Message Title'/>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Message:</p>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={`w-full ${errMsg === "Please type your message!" && "outline-designColor"} rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 py-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300 resize-none`} cols="30" rows="10" placeholder='Enter Your Massege Here...'></textarea>
                </div>
                <div className='w-full'>
                    <button onClick={handleSend} className='w-full h-12 rounded-lg bg-gray-600 text-sm font-bold text-designColor tracking-wide uppercase hover:text-black duration-300 hover:bg-designColor'>Send It Now</button>
                </div>
                    {/* {
                        errMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                    )} */}

                    {
                        successMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
                    )}
            </form>
        </div>
  )
}

export default ContactRight

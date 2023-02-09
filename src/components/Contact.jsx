import React, { useState } from "react";
import toast  from "react-hot-toast";
import {motion} from 'framer-motion'
import vg from "../asserts/first1.png"
import {addDoc,collection} from "firebase/firestore"
import {db} from "../firebase"
const Contact=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [disableBtn,setDisableBtn]=useState(false);
    const submitHandler=async(event)=>{
        event.preventDefault();
        setDisableBtn(true);
        try{
            await addDoc(collection(db,"contacts"),{
                name,
                email,
                message,
            });
            setName("");
            setEmail("");
            setMessage("");
            toast.success('Message Sent');
            setDisableBtn(false);
        } catch(error){
            toast.error("Error");
            setDisableBtn(false);
        }
        
    };

    const animations={
        form:{
            initial:{
            x:"-100%",
            opacity:0,
            }, whileInView:{
                x:0,
                opacity:1,
            }
        },
        button:{
            initial:{
            y:"-100%",
            opacity:0,
            }, whileInView:{
                y:0,
                opacity:1,
            },
            transition:{
                delay:0.5,
            }
        }
    }
    return(
        <div id="contact">
            <section>
                <motion.form onSubmit={submitHandler} {...animations.form}>
                    <h2>Contact Me</h2>
                    <input type="text" placeholder="Your Name" value={name} 
                     onChange={(event)=>setName(event.target.value)} required/>
                    <input type="email" placeholder="Your Email" value={email} 
                     onChange={(event)=>setEmail(event.target.value)} required/>
                    <input type="text" placeholder="Your Message" value={message} 
                    onChange={(event)=>setMessage(event.target.value)}  required/>
                    <motion.button
                        disabled={disableBtn} 
                        className={disableBtn?"disableBtn":""}
                    {...animations.button} type="submit">Send</motion.button>
                </motion.form>
            </section>
            <aside>
                <img src={vg} alt="Graphs"/>
            </aside>
        </div>
    );
}
export default Contact;
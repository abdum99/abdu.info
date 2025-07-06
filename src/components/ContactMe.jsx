import { Button } from "./Button"
import emailjs from "@emailjs/browser"
import { IoSend } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function ContactMe( {prop} ) {
    let error = null
    const [submitted, setSubmitted] = useState(false);
    useEffect( () => 
        emailjs.init("F1k3qsqm1-HFHk3sH")
    , [])
    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        emailjs.sendForm(
            "service_dnp72yq",
            "template_knt2s0c",
            e.target
        ).then( (res) => {
            error = null
            setSubmitted(true)
        }, 
        (err) => {
            error = err
            setSubmitted(true)
        })
    }
    return (
            <section className="w-full flex justify-center gap-0 text-zinc-700 dark:text-zinc-100 mt-40" id="ContactMe">
            <div className="grid grid-cols-1 w-full">
            <div className="py-8 px-12 mx-auto max-w-2xl border rounded-2xl shadow-inner overflow-clip dark:border-white/20 w-full">
                <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center dark:text-zinc-300">Get In Touch</h2>
                <p className="mb-8 font-light text-center text-zinc-500 dark:text-zinc-400 sm:text-xl">Have ideas, opportunities, or just want to chat? Let&apos;s talk.</p>
                { submitted?
                    error?
                    <>
                        <h2 className="mb-4 text-5xl font-extrabold text-center bg-gradient-to-tr from-pink-500 to-red-400 text-transparent bg-clip-text">Uh Oh!</h2>
                        <p className="mb-8 text-xl text-center text-zinc-500 dark:text-zinc-400">Something went wrong. Please try again.</p>
                    </>
                    :
                    <>
                        <h2 className="mb-4 text-5xl font-extrabold text-center bg-gradient-to-tr from-blue-500 to-emerald-400 text-transparent bg-clip-text">Yay!</h2>
                        <p className="mb-8 text-xl text-center text-zinc-500 dark:text-zinc-400">I got your email. I&apos;ll be in touch soon.</p>
                    </>

                :
                <form onSubmit={sendEmail}  className="space-y-8">
                    <div>
                        <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">Name</label>
                        <input type="text" name="user_name" id="user_name" className="shadow-inner  border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:shadow-sm-light" placeholder="Denzel Washington" required />
                    </div>
                    <div>
                        <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">Email</label>
                        <input type="email" name="user_email" id="user_email" className="shadow-inner border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:shadow-sm-light" placeholder="d@hollywood.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">Subject</label>
                        <input type="text" name="subject" id="subject" className="block p-3 w-full text-sm text-zinc-900 rounded-lg border border-zinc-300 shadow-inner focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:shadow-sm-light" placeholder="What is this about" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">Message</label>
                        <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-zinc-900 rounded-lg shadow-inner border border-zinc-300 focus:ring-primary-500 dark:bg-black dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:border-primary-500" placeholder="No SQL Injections please..."></textarea>
                    </div>
                    <Button disabled={submitted} type="submit" className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg ${submitted? "bg-zinc-900 dark:bg-zinc-800": "sm:w-fit focus:outline-none"} `}>
                        <IoSend />
                        <p>Send Message</p>
                        </Button>
                </form>
                }
            </div>
            </div>
            </section>
    )
}
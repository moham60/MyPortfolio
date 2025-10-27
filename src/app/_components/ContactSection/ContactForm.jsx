'use client'
import { Button, Field, Fieldset, Input, Label, Textarea } from '@headlessui/react'
import clsx from 'clsx'
import emailjs from "emailjs-com"
import { useRef } from 'react';
export default function ContactForm() {
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_fzfcbj6', //service ID
      'template_xof4q4s', //template ID
      form.current,
      'sYtijejmht5GSlUnQ'//public key
    ).then(() => {
       alert("✅ Message sent successfully!");
          form.current.reset();
    }, (err) => {
     
      alert("❌ Failed to send message. Try again.");

    })
    }
  return (
    <div className="w-full text-black dark:text-white  mx-auto my-4 max-w-lg px-4">
      <form ref={form} onSubmit={sendEmail}>
          <Fieldset className="space-y-6 rounded-xl dark:bg-white/5 bg-white shadow-lg
        p-6 sm:p-10">
        
        <Field>
          <Label className="text-sm/6 font-medium ">Name</Label>
            <Input
              name='name'
            className={clsx(
              'mt-3 block w-full  rounded-md border border-gray-200 dark:border-gray-700 dark:bg-white/5 px-3 py-1.5 text-sm/6 ',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )}
          />
        </Field>
         <Field>
          <Label className="text-sm/6 font-medium ">Email</Label>
            <Input
              name='email'
            className={clsx(
              'mt-3 block w-full rounded-md border border-gray-200  dark:bg-white/5 px-3 py-1.5 text-sm/6 dark:border-gray-700 ',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )}
          />
              </Field>
        
        <Field>
          <Label className="text-sm/6 font-medium ">Message</Label>
          
            <Textarea
              name='message'
            className={clsx(
              'mt-3 block w-full  resize-none rounded-md border border-gray-200  dark:bg-white/5 px-3 py-1.5 text-sm/6 dark:border-gray-700 ',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )}
            rows={3}
                  />
                <Button type='submit'  className="inline-flex cursor-pointer mt-4 items-center gap-2 bg-gray-200 hover:bg-gray-300 text-black border-purple-300 dark:text-white rounded-md dark:bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold border dark:border-purple-500   shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white dark:data-hover:bg-gray-900 data-open:bg-gray-700">Send Message</Button>
        </Field>
      </Fieldset>
        </form>
        
    </div>
  )
}

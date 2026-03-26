'use client'
import { Button, Field, Fieldset, Input, Label, Textarea } from '@headlessui/react'
import clsx from 'clsx'
import emailjs from "emailjs-com"
import { useRef, useState } from 'react';

export default function ContactForm() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm(
      'service_fzfcbj6', //service ID
      'template_xof4q4s', //template ID
      form.current,
      'sYtijejmht5GSlUnQ'//public key
    ).then(() => {
       alert("✅ Message sent successfully!");
       form.current.reset();
       setIsSubmitting(false);
    }, (err) => {
      alert("❌ Failed to send message. Try again.");
      setIsSubmitting(false);
    })
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-8 mb-16">
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <Fieldset className="flex flex-col gap-6 p-8 md:p-10 bg-card rounded-3xl shadow-lg border border-border-custom transition-all duration-300 hover:shadow-xl">
          <div className="space-y-1 mb-2">
            <h3 className="text-2xl font-bold text-text-primary">Send a Message</h3>
            <p className="text-text-secondary text-sm">I'd love to hear from you. Fill out the form below!</p>
          </div>

          <Field className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-text-primary ml-1">Name</Label>
            <Input
              name="name"
              required
              placeholder="John Doe"
              className={clsx(
                "block w-full rounded-xl border border-border-custom bg-background px-4 py-3.5 text-sm text-text-primary transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500",
                "focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 focus:outline-none"
              )}
            />
          </Field>

          <Field className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-text-primary ml-1">Email</Label>
            <Input
              name="email"
              type="email"
              required
              placeholder="hello@example.com"
              className={clsx(
                "block w-full rounded-xl border border-border-custom bg-background px-4 py-3.5 text-sm text-text-primary transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500",
                "focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 focus:outline-none"
              )}
            />
          </Field>
          
          <Field className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-text-primary ml-1">Message</Label>
            <Textarea
              name="message"
              required
              placeholder="How can I help you?"
              className={clsx(
                "block w-full resize-none rounded-xl border border-border-custom bg-background px-4 py-3.5 text-sm text-text-primary transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 min-h-[140px]",
                "focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 focus:outline-none"
              )}
              rows={4}
            />
          </Field>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 px-6 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-primary-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ background: "var(--color-primary)" }}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <>
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </>
            )}
          </Button>
        </Fieldset>
      </form>
    </div>
  )
}

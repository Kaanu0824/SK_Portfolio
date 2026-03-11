import React, { useState, useRef } from 'react';
import { socials, emailjsConfig } from '../../data/portfolio';
import { useStaggerReveal } from '../../hooks/useReveal';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const formRef = useRef(null);
  const socialsRef = useStaggerReveal(0.07);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      if (!window.emailjs) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
        window.emailjs.init(emailjsConfig.publicKey);
      }

      await window.emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current
      );

      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-glow contact-glow--1" />
      <div className="contact-glow contact-glow--2" />

      <div className="section-label contact-label reveal">Get in touch</div>

      <h2 className="contact-title reveal">
        Let's work<br />
        <span className="contact-title-ghost">together</span><br />
        on something great.
      </h2>

      <p className="contact-sub reveal">
        Fill out the form below to discuss work opportunities, or reach out
        directly via any of the social links below.
      </p>

      {/* Form */}
      <div className="contact-form-wrap reveal">
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              disabled={status === 'sending'}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              disabled={status === 'sending'}
            />
          </div>
          <textarea
            name="message"
            rows={5}
            placeholder="Your message..."
            required
            disabled={status === 'sending'}
          />
          <button
            type="submit"
            className="form-submit"
            disabled={status === 'sending' || status === 'success'}
          >
            {status === 'sending' && 'Sending…'}
            {status === 'success' && '✓ Sent!'}
            {status === 'error'   && 'Failed — try again'}
            {status === 'idle'    && 'Send Message →'}
          </button>

          {status === 'success' && (
            <p className="form-success">✓ Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-error">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>

      {/* Social links */}
      <div className="contact-socials" ref={socialsRef}>
        {socials.map((s) => (
          <a
            className="social-btn"
            href={s.url}
            key={s.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">{s.icon}</span>
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;

import { useEffect, useRef, useState } from 'react';
import { emailjsConfig, socials } from '../../data/portfolio';
import { useStaggerReveal } from '../../hooks/useReveal';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const formRef = useRef(null);
  const socialsRef = useStaggerReveal(0.07);
  const emailjsLoaded = useRef(false);

  // Load EmailJS SDK once on mount
  useEffect(() => {
    if (emailjsLoaded.current) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      window.emailjs.init(emailjsConfig.publicKey);
      emailjsLoaded.current = true;
    };
    document.head.appendChild(script);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    try {
      // Wait for SDK if not yet loaded
      if (!window.emailjs) {
        await new Promise((res) => setTimeout(res, 1000));
      }

      await window.emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current
      );

      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const btnLabel = {
    idle:    'Send Message →',
    sending: 'Sending…',
    success: '✓ Sent!',
    error:   'Failed — try again',
  }[status];

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
              name="from_name"
              placeholder="Your Name"
              required
              disabled={status === 'sending'}
            />
            <input
              type="email"
              name="reply_to"
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
            className={`form-submit${status === 'error' ? ' error' : ''}${status === 'success' ? ' success' : ''}`}
            disabled={status === 'sending' || status === 'success'}
          >
            {btnLabel}
          </button>

          {status === 'success' && (
            <p className="form-success">✓ Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-error">
              Something went wrong. Please check your EmailJS settings or email me directly.
            </p>
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
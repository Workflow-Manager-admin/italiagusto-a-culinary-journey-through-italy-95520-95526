import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * NewsletterSignup component for collecting email subscriptions.
 */
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the email to a backend service
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setEmail('');
  };
  
  return (
    <section className="newsletter-signup">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Join Our Culinary Journey</h2>
          <p className="newsletter-description">
            Subscribe to our newsletter for the latest recipes, cooking tips, and regional Italian food guides.
          </p>
          
          {isSubmitted ? (
            <div className="newsletter-success">
              <p>Thank you for subscribing! Check your inbox soon for Italian culinary inspiration.</p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;

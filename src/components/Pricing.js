import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricingData = [
    {
      id: 1,
      title: 'Free Plan',
      price: '0',
      features: [
        'Access to basic features of the product or service',
        'Limited but adequate support options',
        'Free trial period for premium features',
        'Ability to upgrade to higher plans at any time',
      ],
      notIncluded: [
        'Full access to all features of the product or service',
        'Priority support with faster response times',
        'Custom branding options to match your business',
        'Advanced security features to protect your data and',
      ],
      icon: 'fa fa-user',
    },
    {
      id: 2,
      title: 'Business Plan',
      price: '99',
      features: [
        'Access to basic features of the product or service',
        'Limited but adequate support options',
        'Free trial period for premium features',
        'Ability to upgrade to higher plans at any time',
        'Full access to all features of the product or service',
        'Priority support with faster response times',
      ],
      notIncluded: [
        'Custom branding options to match your business',
        'Advanced security features to protect your data and',
       
      ],
      icon: 'fa fa-briefcase',
    },
    {
      id: 3,
      title: 'Developer Plan',
      price: '199',
      features: [
        'Access to basic features of the product or service',
        'Limited but adequate support options',
        'Free trial period for premium features',
        'Ability to upgrade to higher plans at any time',
        'Full access to all features of the product or service',
        'Priority support with faster response times',
        'Custom branding options to match your business',
        'Advanced security features to protect your data and',
      ],
      notIncluded: [
       
      ],
      icon: 'fa fa-code',
    },
  ];

  return (
    <div className="pricing-section">
      <h2 className="pricing-heading">Pricing</h2>
      <hr className="pricing-hr" />
      <p className="pricing-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit magna sed ante ultricies vestibulum.</p>
      <div className="pricing-container">
        {pricingData.map((plan) => (
          <div className="pricing-card" key={plan.id}>
            <h3 className="pricing-title">{plan.title}</h3>
            <div className="pricing-icon-circle">
              <i className={`pricing-icon ${plan.icon}`} aria-hidden="true" />
            </div>
            <div className="pricing-price">
              <span className="price-currency">$</span>
              <span className="price-value">{plan.price}</span>
              <span className="price-period">/month</span>
              </div>
            <div className="pricing-features">
              {plan.features.map((feature) => (
                <div className="pricing-feature" key={feature}>
                  <span className="feature-icon">&#10003;</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="pricing-not-included">
              {plan.notIncluded.map((notIncluded) => (
                <div className="not-included-feature" key={notIncluded}>
                  <span className="not-included-icon">&#x2716;</span>
                  <span>{notIncluded}</span>
                </div>
              ))}
            </div>
            <button className="buy-now-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

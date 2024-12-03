import React, { useState } from 'react';

function About() {
  // State to manage whether additional information is visible
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // Inline styles for the component
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '2rem',
      backgroundColor: '#f9f9f9',
      color: '#333',
      textAlign: 'center',
    },
    heading: {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: '#d9534f',
    },
    paragraph: {
      fontSize: '1.25rem',
      maxWidth: '800px',
      lineHeight: '1.6',
      marginBottom: '1rem',
    },
    button: {
      marginTop: '1rem',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#ffc107',
      color: '#000',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      fontSize: '1.25rem',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    buttonHover: {
      backgroundColor: '#e0a800',
      transform: 'scale(1.05)',
    },
    additionalInfo: {
      marginTop: '1rem',
      padding: '1rem',
      maxWidth: '800px',
      backgroundColor: '#ffffff',
      borderRadius: '0.25rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
    },
    sectionHeading: {
      fontSize: '2rem',
      marginTop: '1rem',
      color: '#d9534f',
    },
    sectionParagraph: {
      fontSize: '1rem',
      lineHeight: '1.6',
    },
    locationInfo: {
      marginTop: '1rem',
      padding: '1rem',
      backgroundColor: '#ffffff',
      borderRadius: '0.25rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
      maxWidth: '600px',
      fontSize: '1rem',
    },
  };

  // Function to toggle additional information
  const handleButtonClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        We are passionate about pizza. Our store offers a wide range of delicious pizzas made from fresh ingredients.
      </p>
      <button
        style={styles.button}
        onClick={handleButtonClick}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
      >
        {showMoreInfo ? 'Show Less' : 'Learn More'}
      </button>
      {showMoreInfo && (
        <>
          <div style={styles.additionalInfo}>
            <h2 style={styles.sectionHeading}>Our Story</h2>
            <p style={styles.sectionParagraph}>
              We started with a small pizzeria in downtown, using traditional recipes and high-quality ingredients. 
              Over the years, our passion for pizza and commitment to quality has helped us grow into a beloved local institution. 
              Our team works tirelessly to bring you the best pizza experience with every slice.
            </p>
            <h2 style={styles.sectionHeading}>Our Ingredients</h2>
            <p style={styles.sectionParagraph}>
              We source our ingredients from local farms and trusted suppliers to ensure freshness and flavor. 
              From our homemade dough to our carefully selected cheeses and toppings, every element of our pizzas is crafted with care.
            </p>
          </div>
          <div style={styles.locationInfo}>
            <h2 style={styles.sectionHeading}>Our Location</h2>
            <p style={styles.sectionParagraph}>
              123 Pizza Street<br />
              Pizza Town, PT 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@pizzaparadise.com<br />
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default About;

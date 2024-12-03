import React from 'react';

function HomePage() {
  const styles = {
    homePage: {
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
    },
    videoContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
    },
    videoBg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
    contentContainer: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    heading: {
      fontSize: '3rem',
      marginBottom: '0.5rem',
    },
    lead: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
    },
    button: {
      backgroundColor: '#ffc107',
      border: 'none',
      color: '#000',
      fontSize: '1.25rem',
      padding: '0.75rem 1.5rem',
      marginTop: '1rem',
      cursor: 'pointer',
      borderRadius: '0.25rem',
    },
  };

  const handleClick = () => {
    alert('Order Now button clicked!');
  };

  return (
    <div style={styles.homePage}>
      {/* Video Background */}
      <div style={styles.videoContainer}>
        <video autoPlay loop muted style={styles.videoBg}>
          <source src="https://media.istockphoto.com/id/1474129447/video/fresh-vegetable-pizza-table-top-spin-view.mp4?s=mp4-640x640-is&k=20&c=dNh3yuMwmOhJs7HbNShkGI7Lbe95CjY-PFqwtGhgUl0=" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.overlay}></div>
      </div>

      {/* Content Overlay */}
      <div style={styles.contentContainer}>
        <h1 style={styles.heading}>Welcome to Pizza Paradise</h1>
        <p style={styles.lead}>The Best Pizza in Town</p>
        <button style={styles.button} onClick={handleClick}>
          Order Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;

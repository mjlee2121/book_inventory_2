import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={styles.background}>
      {children}
    </div>
  );
};

const styles = {
  background: {
    // display:'flex',
    textAlign: 'center',
    minHeight: '100vh',
    // backgroundImage: 'url("https://source.unsplash.com/random/1920x1080")',
    background: 'linear-gradient(salmon, white)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px',
  },
};

export default Layout;

import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loader" style={styles.loader}>
      <div className="spinner" style={styles.spinner}></div>
    </div>
  );
};

const styles = {
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
    fontSize: '24px',
    color: 'white',
  },
  spinner: {
    border: '4px solid rgba(255, 255, 255, 0.3)',
    borderTop: '4px solid #fff',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 2s linear infinite',
  },
};

export default LoadingSpinner;

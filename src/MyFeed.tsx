function MyFeed() {
  const feedStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  };

  const cardStyle = {
    padding: '2em',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
  };

  return (
    <div style={feedStyle}>
      <div style={cardStyle}>Congratulations, you just entered to your feed!</div>
    </div>
  );
}

export default MyFeed;

function PopUp({ message }: { message: string }) {
  return (
    <div>
      <h1 className='pop-up'>Facenotebook</h1>
      <p>{message}</p>
    </div>
  );
}

export default PopUp;

const Input = ({ text, handleChang }) => {
  return (
    <>
      <input type="text" value={text} onChange={handleChang} />
    </>
  );
}

export default Input;
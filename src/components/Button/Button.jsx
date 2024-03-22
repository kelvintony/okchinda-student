const Button = ({ handleButtonClick, children, className }) => {
  return (
    <button className={`${className}`} onClick={handleButtonClick}>
      {children}
    </button>
  );
};

export default Button;

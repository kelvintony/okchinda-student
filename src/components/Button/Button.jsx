const Button = ({ handleButtonClick, title, classes }) => {
  return (
    <button className={classes} onClick={handleButtonClick}>
      {title}
    </button>
  );
};

export default Button;

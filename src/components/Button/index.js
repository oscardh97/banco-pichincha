import StyledButton from "./ButtonStyles";
function Button({
  text,
  onClick,
  className,
  secondary,
  disabled,
  ...props
}) {

  const handleOnClick = (event) => {
    if (!disabled) {
      onClick(event);
    }
  };

  return <StyledButton
    disabled={disabled ? 1 : 0}
    secondary={secondary ? 1 : 0}
    className={className}
    onClick={handleOnClick}
    {...props}
  >
    {text}
  </StyledButton>
};

export default Button;

import StyledButton from "./ButtonStyles";
function Button({
  text,
  onClick,
  className,
}) {

  return <StyledButton className={className} onClick={onClick}>
    {text}
  </StyledButton>
};

export default Button;

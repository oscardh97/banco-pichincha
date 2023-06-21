import StyledButton from "./ButtonStyles";
function Button({
  text,
  onClick,
  className,
  ...props
}) {

  return <StyledButton className={className} onClick={onClick} {...props}>
    {text}
  </StyledButton>
};

export default Button;

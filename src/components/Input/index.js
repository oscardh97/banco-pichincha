import { useState } from "react";
import StyledInput, { StyledErrorMessage } from "./InputStyles";
function Input({
  type="text",
  value="",
  onChange,
  validate,
  min,
  max,
  onValidate,
  errorMessage,
  ...props
}) {

  const [isValid, setIsValid] = useState(true);

  const handleOnChange = async (event) => {
    typeof(onChange) === "function" && onChange(event);
    await validateValue(event);
  };

  const validateValue = async (event) => {
    const { name, value } = event.target;
    let isValidValue = true;
    if (min !== undefined && value.length < min) {
      isValidValue = false;
    } else if (max !== undefined && value.length > max) {
      isValidValue = false;
    } else if (typeof(validate) === "function") {
      isValidValue = await validate(event);
    }
    setIsValid(isValidValue);
    typeof(onValidate) === "function" && onValidate({name, isValidValue});
  };

  return (<>
    <StyledInput data-testid={props["data-testid"] || `input-${props.id}`} isvalid={isValid ? 1 : 0} {...props} type={type} onChange={handleOnChange} />
    {!isValid ? <StyledErrorMessage data-testid="input-error-msg">{errorMessage ? errorMessage : `${ props.name } no válido!`}</StyledErrorMessage> : null}
  </>);
};

export default Input;

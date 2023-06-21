import { useState } from "react";
import StyledInput, { StyledErrorMessage } from "./InputStyles";
function Input({
  type="text",
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
    onChange(event);
    await validateValue(event);
  };

  const validateValue = async (event) => {
    const { name, value } = event.target;
    let isValidValue = true;
    if (min !== undefined && value.length < min) {
      isValidValue = false;
    } else if (max !== undefined && value.length > max) {
      isValidValue = false;
    } else if (validate instanceof Function) {
      isValidValue = await validate(event);
    }
    setIsValid(isValidValue);
    onValidate({name, isValidValue});
  };

  return (<>
    <StyledInput isvalid={isValid} {...props} type={type} onChange={handleOnChange} />
    {!isValid ? <StyledErrorMessage>{errorMessage ? errorMessage : `${ props.name } no válido!`}</StyledErrorMessage> : null}
  </>);
};

export default Input;

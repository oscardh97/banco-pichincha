import StyledInput from "./InputStyles";
function Input({
  placeholder,
  name,
  value,
  type="text",
  onChange,
}) {

  const handleOnChange = (event) => {
    onChange(event);
  };

  return <StyledInput type={type} placeholder={placeholder} name={name} value={value} onChange={handleOnChange} />
};

export default Input;

import Input from "../Input";
import { StyledFormBody } from "./FormStyles";

const FormBody = ({ fields = [], values, onChange:parentOnChange, onValidate }) => {
  const renderFields = () => (
    fields.map(({id, label, type, onChange, ...props}) => {
      const value = values && values[id] && type === "date" ? new Date(values[id]).toISOString().split("T")[0] : values[id];

      const handleOnChange = (event) => {
        parentOnChange(event);
        if (onChange instanceof Function) {
          onChange(event);
        }
      };

      return <div key={id} className="field-container">
        <label>{label}</label>
        <Input id={id} name={id} placeholder={label} value={value} onChange={handleOnChange} type={type} {...props} onValidate={onValidate}/>
      </div>
    })
  );
  return (<StyledFormBody>
    {renderFields()}
  </StyledFormBody>);
};

export default FormBody;

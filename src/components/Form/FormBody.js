import Input from "../Input/Input";
import { StyledFormBody } from "./FormStyles";

const FormBody = ({ fields = [], values, onChange }) => {
  const renderFields = () => (
    fields.map(({id, label}) => (
      <div key={id} className="field-container">
        <label>{label}</label>
        <Input name={id} placeholder={label} value={values && values[id]} onChange={onChange}/>
      </div>
    ))
  );
  return (<StyledFormBody>
    {renderFields()}
  </StyledFormBody>);
};

export default FormBody;

import FormBody from "./FormBody";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import StyledForm from "./FormStyles";
function Form({
  title,
  className,
  fields,
  onSubmit,
  buttons,
  values,
  onChange,
  onValidate,
}) {
  const handleOnSubmit = () => onSubmit();
  return <StyledForm className={className} onSubmit={handleOnSubmit}>
    <FormHeader text={title} />
    <FormBody fields={fields} values={values} onChange={onChange} onValidate={onValidate}/>
    <FormFooter buttons={buttons}/>
  </StyledForm>
};

export default Form;

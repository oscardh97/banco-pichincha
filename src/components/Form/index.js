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
}) {
  const handleOnSubmit = () => onSubmit();
  return <StyledForm className={className} onSubmit={handleOnSubmit}>
    <FormHeader text={title} />
    <FormBody fields={fields} values={values} onChange={onChange}/>
    <FormFooter buttons={buttons}/>
  </StyledForm>
};

export default Form;

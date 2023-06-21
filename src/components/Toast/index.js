import StyledToast from "./ToastStyles";
function Toast({
  text,
  type="success",
}) {
  return <StyledToast type={type}>
    {text}
  </StyledToast>
};

export default Toast;

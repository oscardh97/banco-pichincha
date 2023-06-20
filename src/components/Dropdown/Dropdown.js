import { useState } from "react";
import StyledDropdown from "./DropdownStyles";

function Dropdown({
  text,
  options = [],
  className,
  showArrow = true,
  children,
}) {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState(text);

  const handleOpen = () => setOpen(!open);

  return <StyledDropdown className={className}>
    <button onClick={handleOpen}>
      {children ? children : <span>{label}</span>}
      {showArrow ? <i className={`arrow ${open ? "up" : "down"}`}></i> : null}
    </button>
    {open ? (
      <ul className="options">
        {options.map(option => (
          <li key={Math.random()} onClick={() => {
            setOpen(false);
            setLabel(option.text);
            option.onClick();
          }}>{option.text}</li>
        ))}
      </ul>
    ) : null}
  </StyledDropdown>
};

export default Dropdown;
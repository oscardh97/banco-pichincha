import { useState } from "react";
import StyledDropdown from "./DropdownStyles";

function Dropdown({
  text,
  options = [],
  className,
  showArrow = true,
  children,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState(text);

  const handleOpen = () => setOpen(!open);
  const arrowDirection = open ? "up" : "down";

  return <StyledDropdown className={className} data-testid={props["data-testid"] }>
    <button onClick={handleOpen} data-testid={"dropdown-btn"}>
      {children ? children : label}
      {showArrow ? <i data-testid={`dropdown-arrow-${arrowDirection}`} className={`arrow ${arrowDirection}`}></i> : null}
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

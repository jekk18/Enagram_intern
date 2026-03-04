import { useState, useRef, useEffect } from "react"
import './Select.css'
import DownArros from "../../Icons/DownArros";


const Select = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value);
 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }; 
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-select" ref={selectRef}>
      
      <div
        className="select-header"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`arrow ${isOpen ? "rotate" : ""}`}>
          <DownArros />
        </span>
      </div>

      {isOpen && (
        <div className="select-options">
          {options.map(option => (
            <div
              key={option.value}
              className={`select-option ${
                value === option.value ? "active" : ""
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
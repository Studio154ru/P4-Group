import { useEffect, useState } from 'react';

export default function ServiceSelect({ value, onChange, options }) {
  const [open, setOpen] = useState(false);

  const selectedLabel = value || 'Выберите услугу';

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (!target.closest('.custom-select')) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className={open ? 'custom-select custom-select--open' : 'custom-select'}>
      <button
        type="button"
        className="custom-select__trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className={value ? '' : 'custom-select__placeholder'}>
          {selectedLabel}
        </span>
        <span className="custom-select__arrow">▾</span>
      </button>

      {open && (
        <div className="custom-select__menu">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={
                value === option
                  ? 'custom-select__option custom-select__option--active'
                  : 'custom-select__option'
              }
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
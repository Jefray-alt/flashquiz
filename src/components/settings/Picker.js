import React from "react";

const Picker = ({ items, type }) => {
  return (
    <div className="custom-select-wrapper">
      <div className="custom-select">
        <div className="custom-select__trigger">
          <span className="selected-value">{type}</span>
          <div className="arrow"></div>
        </div>
        <div className="custom-options" data-key={`${type}`}>
          {/* Placeholder */}
          <span className="custom-option selected" style={{ display: "none" }}>
            {type}
          </span>
          {items.map((item) => (
            <span
              className="custom-option"
              data-value={`${item.id}`}
              key={`${item.id}`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Picker;

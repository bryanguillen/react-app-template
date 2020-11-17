import React, { useState } from 'react';

export default function CheckboxWithLabel({ labelOn, labelOff }) {
  const [isChecked, setIsCheck] = useState(false);

  return (
    <label>
      <input
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsCheck(previousState => !previousState)}
      />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}
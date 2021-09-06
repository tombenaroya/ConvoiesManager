import React from 'react';

const Input = ({ input, changeInput }) => {
  const handleInputChange = ({ target: { value: text } }) => changeInput(text);

  return (
    <div className='input-group'>
      <input
        type='text'
        className='form-control text-center'
        placeholder='סנן שדרות'
        aria-label='Username'
        aria-describedby='addon-wrapping'
        value={input}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;

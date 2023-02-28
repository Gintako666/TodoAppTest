import React from 'react';
import classNames from 'classnames';

type Props = {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  placeholder: string,
  error: boolean,
};

export const Input: React.FC<Props> = ({
  value,
  setValue,
  placeholder,
  error,
}) => {
  return (
    <div className={classNames(
      'input',
      { 'input--error': error },
    )}
    >
      <input
        className={classNames(
          'input__item',
          { 'input__item--error': error },
        )}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

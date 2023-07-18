import classNames from 'classnames';
import './button.css';

const Button = ({ children, onClick, color, size }) => {
  return (
    <button
      onClick={onClick}
      className={classNames({
        button: true,
        'button-small': size === 'small',
        'button-success': color === 'success',
        'button-error': color === 'error',
      })}
    >
      {children}
    </button>
  );
};

export default Button;

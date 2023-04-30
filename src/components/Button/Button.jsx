import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onloadMore }) => {
  return (
    <div className={css.container} onClick={onloadMore}>
      <button type="button" className={css.button}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onloadMore: PropTypes.func.isRequired,
};

export default Button;
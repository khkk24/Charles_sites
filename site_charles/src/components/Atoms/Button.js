import ButtonBS from 'react-bootstrap/Button';
import './Styles.css';

const Button = ({text, color}) => {
    return (
        <ButtonBS type="submit" className='btn-wrapper' variant={color}>{ text }</ButtonBS>
      );
  };
  
export default Button;


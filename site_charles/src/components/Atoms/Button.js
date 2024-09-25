import ButtonBS from 'react-bootstrap/Button';
import './Styles.css';

const Button = ({text}) => {
    return (
        <ButtonBS className='btn-wrapper' variant="dark">{ text }</ButtonBS>
      );
  };
  
export default Button;


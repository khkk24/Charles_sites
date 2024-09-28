import Button from '../Atoms/Button';
import CardBS from 'react-bootstrap/Card';
import './Styles.css';

const Card = ({ data }) => {
    const { title, text ,image } = data
    return (
        <CardBS className='card-wrapper' style={{ width: '18rem' }}>
          <div>
            <img className='img' src={ image } alt='Imagem de serviço' />
            <CardBS.Body>
                <CardBS.Title>{ title }</CardBS.Title>
                <CardBS.Text>
                  { text }
                </CardBS.Text>
                <Button text="Solicitar orçamento"/>
            </CardBS.Body>
          </div>
        </CardBS>
      );
  };
  
export default Card;


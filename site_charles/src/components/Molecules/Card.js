import Button from '../Atoms/Button';
import CardBS from 'react-bootstrap/Card';
import './Styles.css';

const Card = ({ data }) => {
    const { title, text ,image } = data
  return (
      <div className="card-container">
        <CardBS className='card-wrapper' style={{ width: '18rem' }}>
          <div >
            <img className='img' src={ image } alt='Imagem de serviço' />
            <CardBS.Body>
                <CardBS.Title>{ title }</CardBS.Title>
                <CardBS.Text>
                  { text }
                </CardBS.Text>
                <Button text="Ver serviço" color="light"/>
            </CardBS.Body>
          </div>
      </CardBS>
      {/* <div className="card-legend">
        <h5>{title}</h5>
        <p>{text}</p>
      </div> */}
      </div>
      
      );
  };
  
export default Card;


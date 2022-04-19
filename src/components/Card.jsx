import css from './Card.module.css';
import Button from './UI/Button/Button';

function Card (props) {
 
  
    return (
      
      
        <div className={css.cards}>
          <div>
       <h2>Name: {props.title}</h2>
        <p> Comment: {props.description}</p>
        <Button onClick={props.onDelete}>Delete</Button>
        
            </div>
        </div>
      
    );
  };
  
  export default Card;
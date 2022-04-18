import css from './Card.module.css';

const Card = (props) => {
    return (
      
        <div className={css.cards}>
          <div>
        <h2 >Name: {props.title}</h2>
        <p > Comment: {props.description}</p>
        </div>
        </div>
      
    );
  };
  
  export default Card;
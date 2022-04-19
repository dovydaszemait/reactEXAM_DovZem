import { useEffect, useState } from 'react';
import { getData } from '../helpers/helper';
import Card from '../components/Card';
import css from './HomePage.module.css';
import Container from '../components/UI/Container';

const homeUrl = 'https://autumn-delicate-wilderness.glitch.me/v1/content/skills';

const Home = (props) => {
  const [CardsArr, setCardsArr] = useState([]);
  const [isArr, setIsArr] = useState(false);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    const token = localStorage.getItem('token');
    const CardsFromApi = await getData(homeUrl, token);
    setCardsArr(CardsFromApi);
    if (CardsFromApi.length > 0) {
      setIsArr(true);
    }
  };

  // function onDeleteHandler(CardsDelete) {
  //   setCardsArr((prevState) => {
  //     return prevState.filter((CardsObj) => CardsObj.id !== CardsDelete);
  //   });
  // }

  return (
  <Container className={css.border}>
   
      <h2 className={css.homeHead}>Home page</h2>
      <p className={css.homeHead2}>Welcome to your Daily Diary log!</p>
    <div className={css.homepage}>
<div className={css.cards}>        {isArr &&
          CardsArr.map((sObj) => (
            <Card
              key={sObj.id}
              title={sObj.title}
              description={sObj.description}
              // onDelete={onDeleteHandler}
            />
          ))}
        {!isArr && <h2>There isn't anything created yet.</h2>}
        </div>
        </div>
        </Container>
  );
};

export default Home;
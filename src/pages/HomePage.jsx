import { useEffect, useState } from 'react';
import { getData } from '../helpers/helper';
import Card from '../components/Card';
import Container from '../components/UI/Container';

const homeUrl = 'https://autumn-delicate-wilderness.glitch.me/v1/content/skills';

const Home = () => {
  const [skillsArr, setSkillsArr] = useState([]);
  const [isArr, setIsArr] = useState(false);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    const token = localStorage.getItem('token');
    const skillsFromApi = await getData(homeUrl, token);
    setSkillsArr(skillsFromApi);
    if (skillsFromApi.length > 0) {
      setIsArr(true);
    }
  };

  return (
    <Container>
      <h2>Home page</h2>
<div>        {isArr &&
          skillsArr.map((sObj) => (
            <Card
              key={sObj.id}
              title={sObj.title}
              description={sObj.description}
            />
          ))}
        {!isArr && <h2>No cards created, please create some in add page !</h2>}
        </div>
    </Container>
  );
};

export default Home;
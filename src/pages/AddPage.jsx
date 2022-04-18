import { useEffect, useState } from 'react';
import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container';
import css from './AddPage.module.css';

const url = 'https://autumn-delicate-wilderness.glitch.me/v1/content/skills';
const token = localStorage.getItem('token');

const AddPage = () => {
  const [title, setTitle] = useState('');
  const [description, setComment] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {}, []);

  async function sendPostFetch() {
    const newPostObj = {
      title: title,
      description: description,
    };
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPostObj),
    });
    const atsInJs = await resp.json();
    if (atsInJs.msg) {
      setMessage(atsInJs.msg);
    }
    if (atsInJs.err) {
      setMessage(atsInJs.err);
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    sendPostFetch();
  }

  return (
    <Container>
      <h2 className={css.head2}>Add your new comment of the day</h2>
      <form onSubmit={submitHandler}>
        {message && <h3 className={css.green}>Succesfully added!</h3>}
        <div className={css.main}>
            <h3 className={css.head3}> Add your new comment of the day
</h3>
        <input className={css.title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Enter your name here'
        />
        <label htmlFor='desc'></label>
        <textarea
          onChange={(e) => setComment (e.target.value)}
          placeholder='Enter your comment'
          className={css.area}
        ></textarea>
        <Button className={css.btn}> Submit </Button>
        </div>
      </form>
    </Container>
  );
};

export default AddPage;
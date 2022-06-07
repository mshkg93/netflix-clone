import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router';
import {FirebaseContext} from '../context/firebase';
import {HeaderContainer} from '../containers/header';
import {FooterContainer} from '../containers/footer';
import {Form} from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useNavigate();
  const {firebase} = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid =
    firstName === '' || emailAddress === '' || password === '';

  const handleSignUp = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => history.push(ROUTES.BROWSE));
      })
      .catch((er) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(er.message);
      });
    //do firebase stuff
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method='POST'>
            <Form.Input
              placeholder='First Name'
              value={firstName}
              onChange={({target}) => {
                setFirstName(target.value);
              }}
            />
            <Form.Input
              placeholder='Email Address'
              value={emailAddress}
              onChange={({target}) => {
                setEmailAddress(target.value);
              }}
            />
            <Form.Input
              placeholder='Password'
              value={password}
              onChange={({target}) => {
                setPassword(target.value);
              }}
              type='password'
              autocomplete='off'
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user?
              <Form.Link to='/signin'> Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure
              you're not a bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

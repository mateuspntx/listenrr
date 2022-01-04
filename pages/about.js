import AppContainer from '../components/AppContainer';
import Header from '../components/Header';
import { AboutHeader, Container, Info } from '../styles/pages/about';

const About = () => {
  return (
    <AppContainer>
      <Header />
      <Container>
        <AboutHeader>About Listenrr</AboutHeader>
        <Info>
          <p>
            Listenrr was created in 2017 in Vanilla JS and was rebuilt with
            Next.js in 2020.
          </p>
          <br />
          <p>
            I developed this app because I started studying Javascript at that
            time. While studying, I used to listen to some lo-fi music
            livestream on YouTube and the idea popped in my mind.
          </p>
          <br />
          <p>
            Listenrr is the word "listener" but in a chic way. That's the
            pronounce.
          </p>
          <p>
            <br />
            The idea, development and UI was completely done by me. Check out my{' '}
            <a href="https://github.com/mateuspntx">GitHub</a> profile.
          </p>
          <div className="footer">
            <p>
              If you have any questions, please send an email to{' '}
              <a href="mailto:hello@listenrr.ml">hello@listenrr.ml</a>
            </p>
          </div>
        </Info>
      </Container>
    </AppContainer>
  );
};

export default About;

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
            Listenrr was created in 2017 in Vanilla JS and is now, in 2020,
            rebuilt in Next.js (ReactJS).
          </p>
          <br />
          <p>
            I started to create this app because I started studying Javascript.
            I was listening to some lofi livestream on Youtube and the idea
            popped in my mind.
          </p>
          <br />
          <p>
            Listenrr is the word "listener" but in a chic way. That's the
            pronounce.
          </p>
          <p>
            <br />
            The idea, development and UI was completely done by Mateus Pontes,
            the owner of this app.
          </p>
          <div className="footer">
            <a href="https://mateuspntx.ml/">Mateus's website</a>
            <br />
            <a href="https://github.com/mateuspntx">Mateus's Github profile</a>
            <br />
            <a href="https://www.linkedin.com/in/mateuspntx/">
              Mateus's LinkedIn profile
            </a>
          </div>
        </Info>
      </Container>
    </AppContainer>
  );
};

export default About;

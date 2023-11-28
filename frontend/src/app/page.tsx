import Nav from '@components/Nav';
import Intro from '@sections/Intro';
import Profile from '@sections/Profile';
import Skill from '@sections/Skill';
import Project from '@sections/Project';
import Detail from '@sections/Detail';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Intro />
      <Profile />
      <Skill />
      <Project />
      <Detail />
      <Footer />
    </>
  );
}

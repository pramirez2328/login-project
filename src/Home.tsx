import TitleSection from './components/section/TitleSection';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';

function Home() {
  return (
    <div id='container'>
      <TitleSection />
      <Login />
      <Footer />
    </div>
  );
}

export default Home;

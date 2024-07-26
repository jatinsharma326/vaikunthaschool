import './App.css';
import Headers from './components/headers';
import Banner from './components/banner';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import SmallNav from './components/smallnav';
import CourseCard from './components/coursescards';
import VaikunthaPros from './components/vaikunthapros';
import Faqs from './components/faqs';
import SmallNav2 from './components/smallnav2';
import Carousels from './components/carousels';
import BackgroundVideos from './components/backgroundvideo';
import CardDetail from './components/card-detail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Headers />
      </header>
       <Banner /> 
      <Navbar />
      {/* <Jumbotron />
      <SmallNav />
      <CourseCard />
      <VaikunthaPros />
      <Faqs />
      <SmallNav2 />
      <Carousels />
      <BackgroundVideos />
      <CardDetail />   */}
    </div>
  );
}

export default App;

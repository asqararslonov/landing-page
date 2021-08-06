import 'bootstrap/dist/css/bootstrap.min.css';
import  Header from './components/Header'
import Main from './components/Main'
import './App.css';
import People from './components/People'
import Portfolio from './components/Portfolio';
import Work from './components/Work'
import Footer from './components/Footer'
function App() {
  return (
<div>
<Header />
<Main />
<Portfolio />
<People />
<Work />
<Footer />
{/* <img src={Img} /> */}
</div>
  );
}

export default App;

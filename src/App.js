import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './assets/css/header.css';
import Index from './routes/Index';
import { HelmetProvider } from 'react-helmet-async';
import CustomMetaTags from './layouts/frontend/CustomMetaTags';

function App() {
  return (
    <HelmetProvider>
      <CustomMetaTags />
      <div className="App">
        <Index />
      </div>
    </HelmetProvider>
  );
}

export default App;

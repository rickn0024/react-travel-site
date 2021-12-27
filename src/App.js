import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/404';
import Details from './pages/Details';
import Contact from './pages/Contact';
import ModelProvider from './context/providers/ModelProvider';
import NavProvider from './context/providers/NavProvider';
import DestinationsProvider from './context/providers/DestinationsProvider';
import SharedProvider from './context/providers/SharedProvider';
import GalleryProvider from './context/providers/GalleryProvider';
import AnimationProvider from './context/providers/AnimationProvider';
import Nav from './components/Nav';
import Toggle from './components/Toggle';

function App() {
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <GalleryProvider>
            <DestinationsProvider>
              <SharedProvider>
                <AnimationProvider>
                  <Toggle />
                  <Nav />
                  <HelmetProvider>
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/about" exact component={About} />
                      <Route path="/contact" exact component={Contact} />
                      <Route path="/details/:id" exact component={Details} />
                      <Route component={NotFound} />
                    </Switch>
                  </HelmetProvider>
                </AnimationProvider>
              </SharedProvider>
            </DestinationsProvider>
          </GalleryProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;

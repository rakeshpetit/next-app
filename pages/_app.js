import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import Nav from '@/components/NavBar';
import Hero from '@/components/Hero';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="portfolio-app">
      <Nav />
      {Component.name === 'Home' && <Hero />}
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp;
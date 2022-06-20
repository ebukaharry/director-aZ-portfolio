import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Stream from './components/Stream';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className='main-section'>
          <Switch>
            <Route exact path='/'>
                <Main
                  src="https://res.cloudinary.com/lifetradefx/image/upload/v1654782559/CryptoFXExperts/thumbnail4_tgbbfc.jpg"
                  alt="The London"
                  href="/streamz"
                />
                <Main
                  src="https://res.cloudinary.com/lifetradefx/image/upload/v1654782559/CryptoFXExperts/thumbnail4_tgbbfc.jpg"
                  alt="The London"
                  href="/stream"
                />
                <Main
                  src="https://res.cloudinary.com/lifetradefx/image/upload/v1654782559/CryptoFXExperts/thumbnail4_tgbbfc.jpg"
                  alt="The London"
                  href="/stream"
                />
                <Main
                  src="https://res.cloudinary.com/lifetradefx/image/upload/v1654782559/CryptoFXExperts/thumbnail4_tgbbfc.jpg"
                  alt="The London"
                  href="/stream"
                />
                <Main
                  src="https://res.cloudinary.com/lifetradefx/image/upload/v1654782559/CryptoFXExperts/thumbnail4_tgbbfc.jpg"
                  alt="The London"
                  href="/stream"
                />
                <Main
                  src="https://res.cloudinary.com/lifetradefx/image/upload/v1654782559/CryptoFXExperts/thumbnail4_tgbbfc.jpg"
                  alt="The London"
                  href="/stream"
                />
            </Route>
            <Route path="/about">
              <About
                img1="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648362/aZ/Gallery/photo_2022-06-19_15-10-19_qelwzn.jpg"
                alt1="Akinboyo Zebby"
                img2="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648393/aZ/Gallery/photo_2022-06-19_15-10-35_yg48oy.jpg"
                alt2="Akinboyo Zebby"
                img3="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648377/aZ/Gallery/photo_2022-06-19_15-10-42_lrhtl7.jpg"
                alt3="Zebby"
              />
            </Route>
            <Route path="/gallery">
              <Gallery 
                img1="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648399/aZ/Gallery/photo_2022-06-19_15-10-04_kbiy6t.jpg"
                alt1=""

                img2="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648351/aZ/Gallery/photo_2022-06-19_15-10-10_jkmxjq.jpg"
                alt2=""

                img3="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648395/aZ/Gallery/photo_2022-06-19_15-10-15_s54m1r.jpg"
                alt3=""

                img4="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648362/aZ/Gallery/photo_2022-06-19_15-10-19_qelwzn.jpg"
                alt4=""

                img5="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648364/aZ/Gallery/photo_2022-06-19_15-10-24_nkfivm.jpg"
                alt5=""

                img6="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648402/aZ/Gallery/photo_2022-06-19_15-10-27_qeuwer.jpg"
                alt6=""

                img7="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648365/aZ/Gallery/photo_2022-06-19_15-10-31_pjzhot.jpg"
                alt7=""

                img8="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648393/aZ/Gallery/photo_2022-06-19_15-10-35_yg48oy.jpg"
                alt8=""

                img9="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648469/aZ/Gallery/photo_2022-06-19_15-10-38_bwow8j.jpg"
                alt9=""

                img10="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648377/aZ/Gallery/photo_2022-06-19_15-10-42_lrhtl7.jpg"
                alt10=""

                img11="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648343/aZ/Gallery/photo_2022-06-19_15-10-46_ya0eeh.jpg"
                alt11=""

                img12="https://res.cloudinary.com/ebukaharrycloud/image/upload/v1655648349/aZ/Gallery/photo_2022-06-19_15-10-49_sd7tqy.jpg"
                alt12=""
              />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/stream">
              <Stream
                imgThumbnail="https://res.cloudinary.com/lifetradefx/image/upload/v1654782559/CryptoFXExperts/thumbnail4_tgbbfc.jpg"
                imgAlt="Akinboyo Zebby"
                youtubeLink="https://www.youtube-nocookie.com/embed/a2g6WlZo6Vw"
                trackTile="Good Drank"
                artiste="Gucci Mane"
              />
            </Route>
            <Route path="/streamz">
              <Stream
                imgThumbnail="https://res.cloudinary.com/lifetradefx/image/upload/v1654782559/CryptoFXExperts/thumbnail4_tgbbfc.jpg"
                imgAlt="Akinboyo Zebby"
                youtubeLink="https://www.youtube-nocookie.com/embed/a2g6WlZo6Vw"
                trackTile="Good Dranks"
                artiste="Gucci Manes"
              />
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;

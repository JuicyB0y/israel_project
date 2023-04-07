import Home from './pages/Home';
import 'normalize.css';
import Header from './components/Header';
import Popup from './components/Popup';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import { Helmet } from 'react-helmet';

import Services from './pages/Services';
import Logos from './pages/Logos';
import Retouching from './pages/Retouching';
import Sturmgraf from './pages/Sturmgraf';
import LogoVideoMaker from './pages/LogoVideoMaker';
import ScrollToTop from './components/ScrollToTop';
import WebDevelopment from './pages/WebDevelopment';
import { changeCssVariables } from './services/changeCssVariables';
import Visualisation3D from './pages/Visualisation3D';

import styles from './scss/app.module.scss';
import Interior from './pages/Interior';
import Architecture from './pages/Architecture';
import Exterior from './pages/Exterior';
import Park from './pages/Park';
import ArtObject from './pages/ArtObject';
import Cases from './pages/Cases';
import Animation from './pages/Animation';
import KoronaPay from './pages/KoronaPay';
import ItCom from './pages/ItCom';
import Startup from './pages/Startup';
import Nexign from './components/Nexign';
import SmsChain from './pages/SmsChain';
import Valkirye from './pages/Valkirye';
import Murmansk from './pages/Murmansk';
import Eclipse from './pages/Eclipse';
import Integrity from './pages/Integrity';
import Linq from './pages/Linq';
import Itvideo from './pages/Itvideo';
import Nhub from './pages/Nhub';
import Dali from './pages/Dali';
import Vinyl from './pages/Vinyl';
import Package from './pages/Package';
import Exhibition from './pages/Exhibition';
import Icons from './components/Icons';

export const THEME_STANDART = 'standart';
export const THEME_REVERSED = 'reversed';

export const ThemeContext = createContext();

function App() {
  const [opened, setOpened] = useState(false);
  const [theme, setTheme] = useState('');

  const change = (name) => {
    setTheme(name);
    changeCssVariables(name);
  };

  return (
    <div className={styles.main_wrapper}>
      <Helmet>
        <meta name="description" content="Websites and visual content" />
        <title>Design Israel</title>
      </Helmet>

      <ThemeContext.Provider value={{ change, theme }}>
        {/* {opened && <Popup setOpened={setOpened} opened={opened} />} */}
        <Popup setOpened={setOpened} opened={opened} />
        <Header setOpened={setOpened} opened={opened} />
        <Icons />
        <div className={styles.wrapper}>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/logos" element={<Logos />} />
              <Route path="/retouching" element={<Retouching />} />
              <Route path="/webdevelopment" element={<WebDevelopment />} />
              <Route path="/3dvisualization" element={<Visualisation3D />} />

              <Route path="/animation" element={<Animation />} />
              <Route path="/animation/koronapay" element={<KoronaPay />} />
              <Route path="/animation/itcom" element={<ItCom />} />
              <Route path="/animation/startup" element={<Startup />} />
              <Route path="/animation/nexign" element={<Nexign />} />
              <Route path="/animation/smschain" element={<SmsChain />} />
              <Route path="/animation/linq" element={<Linq />} />
              <Route path="/animation/itvideo" element={<Itvideo />} />
              <Route path="/animation/nhub" element={<Nhub />} />

              <Route path="/logos/rabbit" element={<Sturmgraf />} />
              <Route path="/logos/videomaker" element={<LogoVideoMaker />} />
              <Route path="/logos/dali" element={<Dali />} />
              <Route path="/logos/vinyl" element={<Vinyl />} />
              <Route path="/logos/package" element={<Package />} />
              <Route path="/logos/poster" element={<Exhibition />} />

              <Route path="/3dvisualization/interior" element={<Interior />} />
              <Route path="/3dvisualization/architecture" element={<Architecture />} />
              <Route path="/3dvisualization/exterior" element={<Exterior />} />
              <Route path="/3dvisualization/park" element={<Park />} />
              <Route path="/3dvisualization/artobject" element={<ArtObject />} />
              <Route path="/webdevelopment/valkirye" element={<Valkirye />} />
              <Route path="/webdevelopment/murmansk" element={<Murmansk />} />
              <Route path="/webdevelopment/eclipse" element={<Eclipse />} />
              <Route path="/webdevelopment/integrity" element={<Integrity />} />
            </Routes>
          </ScrollToTop>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

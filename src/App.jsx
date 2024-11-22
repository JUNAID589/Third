import Nav from "./Components/Nav";
import Home from "./Components/Home";


import Pakplayers from "./Components/Teamplayers/Pak/Pakplayers";
import Indplayers from "./Components/Teamplayers/Ind/Indplayers";
import Ausplayers from "./Components/Teamplayers/Aus/Ausplayers";
import Engplayers from "./Components/Teamplayers/England/Engplayers";
import Saplayers from "./Components/Teamplayers/SA/Saplayers";
import Slplayers from "./Components/Teamplayers/SL/Slplayers";
import Wiplayers from "./Components/Teamplayers/WI/Wiplayers";
import Nzplayers from "./Components/Teamplayers/NZ/Nzplayers";
// players profile routes
import Imran from "./Components/Teamplayers/Pak/Pakplayersprofiles/Imran";
import Saeedanwar from "./Components/Teamplayers/Pak/Pakplayersprofiles/Saeedanwar";
import Miandad from "./Components/Teamplayers/Pak/Pakplayersprofiles/Miandad";
import Inzi from "./Components/Teamplayers/Pak/Pakplayersprofiles/Inzi";
import Aktar from "./Components/Teamplayers/Pak/Pakplayersprofiles/Aktar";
import Akram from "./Components/Teamplayers/Pak/Pakplayersprofiles/Akram";
import Waqar from "./Components/Teamplayers/Pak/Pakplayersprofiles/Waqar";
import Afridi from "./Components/Teamplayers/Pak/Pakplayersprofiles/Afridi";
// indian
import Sachin from "./Components/Teamplayers/Ind/Indianplayersprofiles/Sachin";
import Sehwag from "./Components/Teamplayers/Ind/Indianplayersprofiles/Sehwag";
import Dravid from "./Components/Teamplayers/Ind/Indianplayersprofiles/Dravid";
import Ganguly from "./Components/Teamplayers/Ind/Indianplayersprofiles/Ganguly";
import Zaheer from "./Components/Teamplayers/Ind/Indianplayersprofiles/Zaheer";
import Javagal from "./Components/Teamplayers/Ind/Indianplayersprofiles/Javagal";
import Kapil from "./Components/Teamplayers/Ind/Indianplayersprofiles/Kapil";
import Kumblay from "./Components/Teamplayers/Ind/Indianplayersprofiles/Kumblay";
// aus
import Bradman from "./Components/Teamplayers/Aus/Ausplayersprofiles/Bradman";
import Ponting from "./Components/Teamplayers/Aus/Ausplayersprofiles/Ponting";
import Johnson from "./Components/Teamplayers/Aus/Ausplayersprofiles/Johnson";
import Bret from "./Components/Teamplayers/Aus/Ausplayersprofiles/Bret";
import Glen from "./Components/Teamplayers/Aus/Ausplayersprofiles/Glen";
import Greg from "./Components/Teamplayers/Aus/Ausplayersprofiles/Greg";
import Warne from "./Components/Teamplayers/Aus/Ausplayersprofiles/Warne";
import Steve from "./Components/Teamplayers/Aus/Ausplayersprofiles/Steve";
//eng

import Cook from "./Components/Teamplayers/England/Englandplayersprofiles/Cook";
import Andrew from "./Components/Teamplayers/England/Englandplayersprofiles/Andrew";
import Jimmy from "./Components/Teamplayers/England/Englandplayersprofiles/Jimmy";
import Kp from "./Components/Teamplayers/England/Englandplayersprofiles/Kp";
import Trueman from "./Components/Teamplayers/England/Englandplayersprofiles/Trueman";
import Underwood from "./Components/Teamplayers/England/Englandplayersprofiles/Underwood";
import Vaughan from "./Components/Teamplayers/England/Englandplayersprofiles/Vaughan";
import Bedser from "./Components/Teamplayers/England/Englandplayersprofiles/Bedser";

//nz
import Taylor from "./Components/Teamplayers/NZ/Nzplayersprofiles/Taylor";
import Boult from "./Components/Teamplayers/NZ/Nzplayersprofiles/Boult";
import Brandon from "./Components/Teamplayers/NZ/Nzplayersprofiles/Brandon";
import Guptil from "./Components/Teamplayers/NZ/Nzplayersprofiles/Guptil";
import Hadle from "./Components/Teamplayers/NZ/Nzplayersprofiles/Hadle";
import Vettori from "./Components/Teamplayers/NZ/Nzplayersprofiles/Vettori";
import Wagner from "./Components/Teamplayers/NZ/Nzplayersprofiles/Wagner";
import Ronchi from "./Components/Teamplayers/NZ/Nzplayersprofiles/Ronchi";
//sa
import Ab from "./Components/Teamplayers/SA/Saplayersprofiles/Ab";
import Smith from "./Components/Teamplayers/SA/Saplayersprofiles/Smith";
import Polack from "./Components/Teamplayers/SA/Saplayersprofiles/Polack";
import Gary from "./Components/Teamplayers/SA/Saplayersprofiles/Gary";
import Dale from "./Components/Teamplayers/SA/Saplayersprofiles/Dale";
import Kalis from "./Components/Teamplayers/SA/Saplayersprofiles/Kalis";
import Donald from "./Components/Teamplayers/SA/Saplayersprofiles/Donald";
import Ntini from "./Components/Teamplayers/SA/Saplayersprofiles/Ntini";
//wi

import Gayle from "./Components/Teamplayers/WI/Wiplayersprofiles/Gayle";
import Curtly from "./Components/Teamplayers/WI/Wiplayersprofiles/Curtly";
import Walsh from "./Components/Teamplayers/WI/Wiplayersprofiles/Walsh";
import Sobers from "./Components/Teamplayers/WI/Wiplayersprofiles/Sobers";
import Viv from "./Components/Teamplayers/WI/Wiplayersprofiles/Viv";
import Lara from "./Components/Teamplayers/WI/Wiplayersprofiles/Lara";
import Holding from "./Components/Teamplayers/WI/Wiplayersprofiles/Holding";
import Marshal from "./Components/Teamplayers/WI/Wiplayersprofiles/Marshal";

//sl
import Jay from "./Components/Teamplayers/SL/Slplayersprofiles/Jay";
import Murli from "./Components/Teamplayers/SL/Slplayersprofiles/Murli";
import Mahela from "./Components/Teamplayers/SL/Slplayersprofiles/Mahela";
import Malinga from "./Components/Teamplayers/SL/Slplayersprofiles/Malinga";
import Rangana from "./Components/Teamplayers/SL/Slplayersprofiles/Rangana";
import Vaas from "./Components/Teamplayers/SL/Slplayersprofiles/Vaas";
import Dilshan from "./Components/Teamplayers/SL/Slplayersprofiles/Dilshan";
import Sanga from "./Components/Teamplayers/SL/Slplayersprofiles/Sanga";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        {/* players routes */}

        <Route path="/" element={<Home />} />
      \
        <Route path="/Pakplayers" element={<Pakplayers />} />
        <Route path="/Indplayers" element={<Indplayers />} />
        <Route path="/Ausplayers" element={<Ausplayers />} />
        <Route path="/Engplayers" element={<Engplayers />} />
        <Route path="/Saplayers" element={<Saplayers />} />
        <Route path="/Slplayers" element={<Slplayers />} />
        <Route path="/Wiplayers" element={<Wiplayers />} />
        <Route path="/Nzplayers" element={<Nzplayers />} />
        {/* pak-players profile routes */}
        <Route path="/Imran" element={<Imran />} />
        <Route path="/Saeedanwar" element={<Saeedanwar />} />
        <Route path="/Miandad" element={<Miandad />} />
        <Route path="/Inzi" element={<Inzi />} />
        <Route path="/Aktar" element={<Aktar />} />
        <Route path="/Akram" element={<Akram />} />
        <Route path="/Waqar" element={<Waqar />} />
        <Route path="/Afridi" element={<Afridi />} />
        {/* ind-players profile routes */}
        <Route path="/Sachin" element={<Sachin />} />
        <Route path="/Sehwag" element={<Sehwag />} />
        <Route path="/Dravid" element={<Dravid />} />
        <Route path="/Ganguly" element={<Ganguly />} />
        <Route path="/Kapil" element={<Kapil />} />
        <Route path="/Javagal" element={<Javagal />} />
        <Route path="/Kumblay" element={<Kumblay />} />
        <Route path="/Zaheer" element={<Zaheer />} />
        {/* aus-players profile routes */}
        <Route path="/Bradman" element={<Bradman />} />
        <Route path="/Ponting" element={<Ponting />} />
        <Route path="/Bret" element={<Bret />} />
        <Route path="/Greg" element={<Greg />} />
        <Route path="/Glen" element={<Glen />} />
        <Route path="/Warne" element={<Warne />} />
        <Route path="/Johnson" element={<Johnson />} />
        <Route path="/Steve" element={<Steve />} />
        {/* eng-players profile routes */}
        <Route path="/Cook" element={<Cook />} />
        <Route path="/Kp" element={<Kp />} />
        <Route path="/Andrew" element={<Andrew />} />
        <Route path="/Trueman" element={<Trueman />} />
        <Route path="/Underwood" element={<Underwood />} />
        <Route path="/Vaughan" element={<Vaughan />} />
        <Route path="/Bedser" element={<Bedser />} />
        <Route path="/Jimmy" element={<Jimmy />} />
        {/* nz-players profile routes */}
        <Route path="/Boult" element={<Boult />} />
        <Route path="/Brandon" element={<Brandon />} />
        <Route path="/Guptil" element={<Guptil />} />
        <Route path="/Taylor" element={<Taylor />} />
        <Route path="/Vettori" element={<Vettori />} />
        <Route path="/Wagner" element={<Wagner />} />
        <Route path="/Ronchi" element={<Ronchi />} />
        <Route path="/Hadle" element={<Hadle />} />
        {/* sa-players profile routes */}

        <Route path="/Ab" element={<Ab />} />
        <Route path="/Smith" element={<Smith />} />
        <Route path="/Dale" element={<Dale />} />
        <Route path="/Kalis" element={<Kalis />} />
        <Route path="/Polack" element={<Polack />} />
        <Route path="/Ntini" element={<Ntini />} />
        <Route path="/Donald" element={<Donald />} />
        <Route path="/Gary" element={<Gary />} />
        {/* wi-players profile routes */}
        <Route path="/Gayle" element={<Gayle />} />
        <Route path="/Marshal" element={<Marshal />} />
        <Route path="/Curtly" element={<Curtly />} />
        <Route path="/Lara" element={<Lara />} />
        <Route path="/Sobers" element={<Sobers />} />
        <Route path="/Walsh" element={<Walsh />} />
        <Route path="/Holding" element={<Holding />} />
        <Route path="/Viv" element={<Viv />} />
        {/* sl-players profile routes */}
        <Route path="/Jay" element={<Jay />} />
        <Route path="/Sanga" element={<Sanga />} />
        <Route path="/Murli" element={<Murli />} />
        <Route path="/Rangana" element={<Rangana />} />
        <Route path="/Malinga" element={<Malinga />} />
        <Route path="/Vaas" element={<Vaas />} />
        <Route path="/Dilshan" element={<Dilshan />} />
        <Route path="/Mahela" element={<Mahela />} />
      </Routes>
    </>
  );
};

export default App;

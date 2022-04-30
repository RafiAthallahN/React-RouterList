import React from "react";
import { Switch, Route } from 'react-router-dom';


import Beranda from "../pages/beranda";
import TentangSaya from "../pages/tentangsaya";
import Karya from "../pages/karya";
import Kontak from "../pages/kontak";
import Gallery from "../pages/Gallery";

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route exact path="/tentangsaya" component={TentangSaya} />
        <Route exact path="/karya" component={Karya} />
        <Route exact path="/kontak" component={Kontak} />
        <Route path="/Gallery" component={Gallery} />
    </Switch>
)

export default Utama;
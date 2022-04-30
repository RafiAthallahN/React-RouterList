import React from "react";
import Utama from "./Components/utama";
import { Link } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <hr></hr>
                <Link to="/">Beranda</Link> |
                <Link to="/tentangsaya">Tentang Saya</Link> |
                <Link to="/karya">Karya</Link> |
                <Link to="/kontak">Kontak</Link>  |
                <Link to="/Gallery" className="nav-link">Gallery</Link>
                <p><Utama /></p>
            </div>
        );
    }
}

export default App;
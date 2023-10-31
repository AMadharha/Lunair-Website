import './App.css'
import Nav from './components/Nav.js'
import Image from './components/Image.js'
import Discover from './components/Discover.js'
import Featured from './components/Featured.js'
import AboutUs from './components/AboutUs.js'
import Shipping from './components/Shipping.js'
import Footer from './components/Footer.js'

function App() {
    return (
        <div>
            <Nav />
            <Image />
            <Discover />
            <Featured />
            <AboutUs />
            <Shipping />
            <Footer />
        </div>
    )
}

export default App;

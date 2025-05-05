import Footer from './components/Footer';
import Navbar from './components/Navbar'
import SocialBar from './components/SocialBar';
import Homepage from './pages/Homepage';
 
export default function Home() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    <SocialBar/>
    <Footer/>
    </>
  );
}

import Author from "../components/Author";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Feature />
      <Main />
      <Author />
      <Footer />
    </div>
  );
}

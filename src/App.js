import './App.css';

import Navbar from "./components/navigation/navbar";
// import Intro from "./components/homepage/intro";
import About from "./components/homepage/About";
import SendMessage from "./components/homepage/sendMessage";
import Technologies from "./components/homepage/technologies";
import MyServices from "./components/homepage/services";
import Portfolio from "./components/homepage/myportafolio";
import Footer from "./components/homepage/footer";

function App() {
  return (
    <div className="App">
        {/*<Intro />*/}
      <Navbar />
      <About/>
      <SendMessage/>
      <Technologies/>
      <MyServices />
      <Portfolio />
      <SendMessage/>
      <Footer />




    </div>
  );
}

export default App;

import "./style/style.scss"
import Header from "./component/header";
import MainContent from "./component/MainContent"
import FeaturesSection from "./component/FeaturesSection";
function App() {
  return (
   <div>
    <Header></Header>
    <MainContent></MainContent>
    <FeaturesSection></FeaturesSection>
   </div>
  );
}

export default App;

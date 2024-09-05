import Header from "./component/header";
import MainContent from "./component/MainContent";
import FeaturesSection from "./component/FeaturesSection";
import TestimonialSection from "./component/TestimonialsSection"
import TeamWork from "./component/TeamWork";
import Footer from "./component/footer";
function App() {
  return (
   <div>
    <Header></Header>
    <MainContent></MainContent>
    <FeaturesSection></FeaturesSection>
    <TestimonialSection></TestimonialSection>
    <TeamWork></TeamWork>
    <Footer></Footer>
   </div>
  );
}

export default App;

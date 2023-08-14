

import Developer from "../Developer/Developer";
import Counter from "../pages/Counting doc/Counter";
import Drag from "../pages/Drag&Drop/Drag";
import Devs from "../pages/Home/Devs/Devs";
import EditSection from "../pages/Home/EditSection/EditSection";
import FAQ from "../pages/Home/FAQ/FAQ";
import MarqueeSection from "../pages/Home/MarqueeSection/MarqueeSection";
import ReadSection from "../pages/Home/ReadSection/ReadSection";
import Review from "../pages/Home/Review/Review";
import TemplateSection from "../pages/Home/Template/TemplateSection";



const Main = () => {
    return (
        <div>
            <Drag></Drag>
            <Counter></Counter>
            <EditSection></EditSection>
            <TemplateSection></TemplateSection>
<<<<<<< HEAD
            <Developer></Developer>
            
=======
            <MarqueeSection></MarqueeSection>
            <ReadSection></ReadSection>
>>>>>>> 594abe3a3a51c9dd125e5ec13e70e5aab898c565
            <Review></Review>
            <FAQ></FAQ>
            <Devs></Devs>
        </div>
    );
};

export default Main;

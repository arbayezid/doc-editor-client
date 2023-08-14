

import Developer from "../Developer/Developer";
import Counter from "../pages/Counting doc/Counter";
import Drag from "../pages/Drag&Drop/Drag";
import EditSection from "../pages/Home/EditSection/EditSection";
import FAQ from "../pages/Home/FAQ/FAQ";
// import MarqueeSection from "../pages/Home/MarqueeSection/MarqueeSection";
// import ReadSection from "../pages/Home/ReadSection/ReadSection";
import Review from "../pages/Home/Review/Review";
import TemplateSection from "../pages/Home/Template/TemplateSection";



const Main = () => {
    return (
        <div>
            <Drag></Drag>
            <Counter></Counter>
            <EditSection></EditSection>
            <TemplateSection></TemplateSection>
            <Developer></Developer>
            <Review></Review>
            <FAQ></FAQ>
        </div>
    );
};

export default Main;

import Navigation from "../Navigation/Navigation.component";
import AdvertSlide from "../../component/advert/advert.component";
import FansPage from "../../component/Fanspage/fanspage.component";
import CardList from "../../component/card-list/card-list.component";

import adImage1 from "../../Asset/advert.image/Kirby.jpg";
import adImage2 from "../../Asset/advert.image/Splatoon.jpg";
import adImage3 from "../../Asset/advert.image/Xenoblade.jpg";
import adImage4 from "../../Asset/advert.image/pokemon.jpg"


const Home = () => {
  return (
    <div>
      <Navigation />
      <AdvertSlide images={[adImage1, adImage2, adImage3, adImage4]} />
      <FansPage/>
      <CardList/>
    </div>
  );
};

export default Home;

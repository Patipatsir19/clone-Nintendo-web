import AdvertSlide from "../../component/advert/advert.component";
import FansPage from "../../component/Fanspage/fanspage.component";
import NewsList from "../../component/news-list/news-list.component";
import CardList from "../../component/card-list/card-list.component";
import Navbar from "../../component/nav-bar/nav-bar.component";

import adImage1 from "../../Asset/advert.image/Kirby.jpg";
import adImage2 from "../../Asset/advert.image/Splatoon.jpg";
import adImage3 from "../../Asset/advert.image/Xenoblade.jpg";
import adImage4 from "../../Asset/advert.image/pokemon.jpg"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <AdvertSlide images={[adImage1, adImage2, adImage3, adImage4]} />
      <FansPage/>
      <NewsList/>
      <CardList/>
    </div>
  );
};

export default Home;

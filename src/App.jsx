import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  const macOSWallpaper = [
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Big_Sur_Abstract_day.jpg?raw=true",
      "name": "Big Sur Abstract day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Big_Sur_Abstract_night.jpg?raw=true",
      "name": "Big Sur Abstract night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Big_Sur_day.jpg?raw=true",
      "name": "Big Sur day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Big_Sur_night.jpg?raw=true",
      "name": "Big Sur night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Big_Sur_sunrise.jpg?raw=true",
      "name": "Big Sur sunrise"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Big_Sur_sunset.jpg?raw=true",
      "name": "Big Sur sunset"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Catalina_day.jpg?raw=true",
      "name": "Catalina day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Catalina_night.jpg?raw=true",
      "name": "Catalina night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Catalina_sunrise.jpg?raw=true",
      "name": "Catalina sunrise"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Catalina_sunset.jpg?raw=true",
      "name": "Catalina sunset"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Dome_day.jpg?raw=true",
      "name": "Dome day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Dome_night.jpg?raw=true",
      "name": "Dome night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Iridescence_day.jpg?raw=true",
      "name": "Iridescence day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Iridescence_night.jpg?raw=true",
      "name": "Iridescence night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Mojave_Desert_day.jpg?raw=true",
      "name": "Mojave Desert day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Mojave_Desert_night.jpg?raw=true",
      "name": "Mojave Desert night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Mojave_Desert_sunrise.jpg?raw=true",
      "name": "Mojave Desert sunrise"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Mojave_Desert_sunset.jpg?raw=true",
      "name": "Mojave Desert sunset"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Monterey_Abstract_day.jpg?raw=true",
      "name": "Monterey Abstract day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Monterey_Abstract_night.jpg?raw=true",
      "name": "Monterey Abstract night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Peak_day.jpg?raw=true",
      "name": "Peak day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Peak_night.jpg?raw=true",
      "name": "Peak night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Solar_Gradients_day.jpg?raw=true",
      "name": "Solar Gradients day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Solar_Gradients_night.jpg?raw=true",
      "name": "Solar Gradients night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Solar_Gradients_sunrise.jpg?raw=true",
      "name": "Solar Gradients sunrise"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Solar_Gradients_sunset.jpg?raw=true",
      "name": "Solar Gradients sunset"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Sonoma_Abstract_day.jpg?raw=true",
      "name": "Sonoma Abstract day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Sonoma_Abstract_night.jpg?raw=true",
      "name": "Sonoma Abstract night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Beach_day.jpg?raw=true",
      "name": "The Beach day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Beach_night.jpg?raw=true",
      "name": "The Beach night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Beach_sunrise.jpg?raw=true",
      "name": "The Beach sunrise"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Beach_sunset.jpg?raw=true",
      "name": "The Beach sunset"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Cliffs_day.jpg?raw=true",
      "name": "The Cliffs day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Cliffs_night.jpg?raw=true",
      "name": "The Cliffs night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Cliffs_sunrise.jpg?raw=true",
      "name": "The Cliffs sunrise"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Cliffs_sunset.jpg?raw=true",
      "name": "The Cliffs sunset"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Desert_day.jpg?raw=true",
      "name": "The Desert day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Desert_night.jpg?raw=true",
      "name": "The Desert night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Desert_sunrise.jpg?raw=true",
      "name": "The Desert sunrise"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Desert_sunset.jpg?raw=true",
      "name": "The Desert sunset"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Lake_day.jpg?raw=true",
      "name": "The Lake day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Lake_night.jpg?raw=true",
      "name": "The Lake night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Lake_sunrise.jpg?raw=true",
      "name": "The Lake sunrise"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/The_Lake_sunset.jpg?raw=true",
      "name": "The Lake sunset"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Tree_day.jpg?raw=true",
      "name": "Tree day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Tree_night.jpg?raw=true",
      "name": "Tree night"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Ventura_Abstract_day.jpg?raw=true",
      "name": "Ventura Abstract day"
    },
    {
      "link": "https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/src/resources/images/Ventura_Abstract_night.jpg?raw=true",
      "name": "Ventura Abstract night"
    }	
  ];
  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
            {macOSWallpaper.map((wallpaper) => (
        <SwiperSlide id='swipper-wallpaper' style={{backgroundImage: `url(${wallpaper.link})`,backgroundRepeat:'no-repeat', backgroundSize:`100%`}}>Credits: {wallpaper.name}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

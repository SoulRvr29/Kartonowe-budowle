import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PhantomF4History = ({ id }) => {
  const [historyState, setHistoryState] = useState(true);

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = ["models/phantom f4/phantom f4-photo1.jpg"];
  const photosTitle = ["F-4 Phantom II"];
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <SectionHeader
        sectionName="Historia"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />

      {historyState === true && (
        <PhotoProvider
          overlayRender={({ index }) => {
            return (
              <div
                className={
                  "photo-description absolute bottom-0 text-center w-full z-30 p-3 bg-black bg-opacity-40 text-text-light " +
                  (!photosTitle[index] && " hidden")
                }
              >
                {photosTitle[index]}
              </div>
            );
          }}
          maskOpacity={0.5}
          maskClassName="backdrop-blur-sm"
          loadingElement={<div className="loader"></div>}
        >
          <article className="px-8">
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="pr-8 pt-2 float-left hover:cursor-pointer"
                src={photosSrc[0]}
                alt="F-4 Phantom II"
                title={photosTitle[0]}
              />
            </PhotoView>

            <span className="first-letter font-playfair">S</span>
            <p>
              amolot F-4 Phantom II został zaprojektowany jako myśliwiec obrony
              floty dla amerykańskiej marynarki wojennej i wprowadzony do służby
              w 1960 roku. W 1963 w jego posiadanie weszły również Siły
              Powietrzne Stanów Zjednoczonych (USAF), które zaadaptowały go do
              roli samolotu myśliwsko-bombowego. Do zakończenia produkcji w 1981
              roku wytwórnię opuściło 5195 maszyn, co uczyniło z Phantoma
              najliczniej budowany amerykański naddźwiękowy samolot wojskowy. Do
              momentu wdrożenia kolejnej maszyny wytwórni McDonnell Douglas
              myśliwca F-15 Eagle dzierżył on również rekord najdłużej
              wytwarzanego samolotu myśliwskiego, pozostając w produkcji przez
              24 lata. Innowacyjnymi rozwiązaniami zastosowanymi po raz pierwszy
              w samolotach wojskowych był impulsowy radar dopplerowski i
              szerokie wykorzystanie tytanu do budowy kadłuba.
            </p>
            <p>
              Mimo pokaźnych rozmiarów i dużej maksymalnej masy startowej,
              wynoszącej 27 000 kg, F-4 Phantom II mógł osiągać prędkość
              maksymalną 2,23 Ma oraz prędkość wznoszenia 210 m/s. Krótko po ich
              wprowadzeniu do służby, na samolotach F-4 Phantom II ustanowiono
              16 rekordów świata włącznie z rekordem prędkości wynoszącym
              2585,086 km/h i rekordem pułapu wynoszącym 30 040 m. Pięć z
              ustanowionych w latach 1959–1962 rekordów prędkości zostało
              niepobitych aż do 1975.
            </p>
            <p>
              F-4 Phantom II mógł przenosić na dziewięciu węzłach uzbrojenia pod
              kadłubem i skrzydłami do 8480 kg uzbrojenia w postaci kierowanych
              i niekierowanych pocisków rakietowych do niszczenia celów
              powietrznych i naziemnych, oraz broni jądrowej. Po wprowadzeniu do
              służby przeznaczonego do walk na krótkich dystansach myśliwca
              Chance-Vought F-8 Crusader, którego podstawowym uzbrojeniem były
              działka 20 mm Colt Mk 12, zdecydowano, że zgodnie z ówczesną
              tendencją F-4 Phantom II jako myśliwiec przechwytujący będzie
              uzbrojony jedynie w pociski rakietowe i pozbawiony uzbrojenia
              strzeleckiego. Podczas walk nad Północnym Wietnamem Phantomy
              dowiodły swej wartości i wkrótce przyjęto je na uzbrojenia USAF
              jako myśliwce przewagi powietrznej. Duża powierzchnia skrzydeł
              maszyny oraz mocne silniki pozwalały na uzyskanie osiągów
              porównywalnych do znacznie mniejszych i zwrotniejszych myśliwców
              MiG, ale największą przewagę zapewniała asysta oficera pokładowego
              odpowiedzialnego za wykrywanie i namierzanie maszyn wroga zarówno
              przy pomocy radaru, jak i wzrokowo.
            </p>
            <p>
              Ze względu na wykorzystanie przez siły powietrzne wielu krajów i
              bardzo charakterystyczną sylwetkę F-4 Phantom stał się jedną z
              najbardziej rozpoznawalnych maszyn zimnej wojny. Wykorzystywane
              podczas wojny w Wietnamie i konfliktu izraelsko-palestyńskiego
              Phantomy odniosły 393 zwycięstwa powietrzne i wypełniły bardzo
              wiele zadań przeciwko celom naziemnym. F-4 Phantom był ostatnim
              amerykańskim myśliwcem, na którym osiągnięto status asa
              myśliwskiego w XX wieku. Podczas wojny wietnamskiej USAF i US Navy
              posiadały po jednej załodze, która mogła się poszczycić
              zestrzeleniem 5 lub więcej wrogich maszyn podczas walki
              powietrznej. Maszyny te były także zdolne do wykonywania zadań
              rozpoznania taktycznego i misji Wild Weasel SEAD (Suppression of
              Enemy Air Defences – tłumienia obrony powietrznej wroga), które
              wypełniały ostatni raz w 1991 roku podczas operacji Pustynna
              Burza.
            </p>
            <p>
              F-4 Phantom II był także jedynym samolotem wykorzystywanym od 1969
              roku przez oba amerykańskie wojskowe zespoły akrobacyjne. Zespół
              Sił Powietrznych Stanów Zjednoczonych Thunderbirds latał przez
              pięć sezonów na maszynach wersji F-4E, a Blue Angels Marynarki
              Wojennej o jeden sezon dłużej na wersji F-4J.
            </p>
            <p>
              Wypróbowane na Phantomie podstawowe założenia myśliwców dalekiego
              zasięgu, zdolnych latać z prędkościami Ma &gt; 2 i przenosić duży
              ładunek bomb, doprowadziły do powstania kolejnej generacji lekkich
              i średnich myśliwców zoptymalizowanych do działań w czasie dnia. W
              siłach powietrznych zostały one zastąpione przez myśliwce F-15
              Eagle i F-16 Fighting Falcon, a w marynarce przez F-14 Tomcat i
              F/A-18 Hornet. W roli średniego bombowca Phantom został zastąpiony
              przez maszyny General Dynamics F-111.
            </p>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default PhantomF4History;

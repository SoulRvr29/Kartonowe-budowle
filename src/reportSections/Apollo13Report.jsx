import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PaginationNav from "../components/PaginationNav";

const Apollo13Report = () => {
  const [reportState, setReportState] = useState(
    JSON.parse(localStorage.getItem("sections")),
  );
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  return (
    <section id="relacja">
      <SectionHeader
        sectionName="Relacja z budowy"
        sectionState={reportState}
        setSectionState={setReportState}
      />

      {reportState === true && (
        <div className="pt-2 pb-6 max-lg:py-0 max-lg:-my-2 ">
          <PhotoProvider loadingElement={<div className="loader"></div>}>
            {/* <PaginationNav
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            /> */}
            <article>
              {currentPage === 1 && (
                <>
                  <p>
                    Witam w nowej relacji. Model lądownika, który wykonam jest
                    bardzo szczegółowy, zawiera całe wnętrze i wiele drobnych
                    detali. Długo zastanawiałem się, czy w ogóle podjąć się tej
                    budowy, bo skomplikowanie modelu i ilość drobnicy trochę
                    odstrasza. Model postanowiłem powiększyć, przeskalowując go
                    z 1:48 na 1:33. Po powiększeniu całość będzie liczyć około
                    40 stron z częściami.
                  </p>
                  <p>
                    Prawdopodobnie będę musiał zrobić dwie wersje modelu - jedną
                    "gołą", bez obudowy, z widocznymi wszystkimi elementami,
                    oraz drugą wersję z obudową, w której nie będę już robił
                    elementów wewnętrznych. Ze względu na skomplikowany kształt
                    lądownika raczej ciężko byłoby zrobić zdejmowalną obudowę.
                    Gotowy model ma wyglądać tak:
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b14.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b14.webp"
                        alt="gotowy model bez obudowy"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b15.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b15.webp"
                        alt="gotowy model z obudową"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Arkusze drukuję na drukarce atramentowej Epson L355.
                    Drukarka ma już swoje lata i coraz częściej pojawiają się
                    problemy z przerywaniem czarnego tuszu. Po wielokrotnym
                    czyszczeniu głowicy (musiałem nawet użyć płynu do
                    udrażniania) udało się przywrócić prawidłowe drukowanie. Tak
                    wyglądają pierwsze arkusze:
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b01.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b01.webp"
                        alt="pierwszy arkusz"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b02.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b02.webp"
                        alt="drugi arkusz"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b03.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b03.webp"
                        alt="zbliżenie na arkusz"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Skleiłem pierwszą ściankę lądownika. Na jej przykładzie
                    dobrze widać, jak dużo dają te szczegółowe tekstury. Mimo że
                    jest to płaski element z kilkoma naklejonymi pudełkami, już
                    wygląda na dość skomplikowany. Finalnie i tak wiele z tych
                    detali nie będzie widocznych.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b04.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b04.webp"
                        alt="sklejona ścianka lądownika - widok 1"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b05.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b05.webp"
                        alt="sklejona ścianka lądownika - widok 2"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b06.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b06.webp"
                        alt="sklejona ścianka lądownika - widok 3"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Ten element stanowi pierwszą połowę kabiny, którą później
                    połączę z drugą.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b07.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b07.webp"
                        alt="pierwsza połowa kabiny - widok 1"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b08.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b08.webp"
                        alt="pierwsza połowa kabiny - widok 2"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b09.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b09.webp"
                        alt="pierwsza połowa kabiny - widok 3"
                      />
                    </PhotoView>
                  </div>
                  <p>Przymierzyłem tylną ściankę, na razie na sucho.</p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b10.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b10.webp"
                        alt="tylna ścianka lądownika"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    To urządzenie jest jedną z ważniejszych części lądownika -
                    ECS (Environmental Control System), czyli system
                    podtrzymywania życia, który dostarczał tlen do kabiny,
                    regulował ciśnienie, utrzymywał odpowiednią temperaturę itd.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b11.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b11.webp"
                        alt="ECS - system podtrzymywania życia"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Kolejne elementy, które znajdą się w tej części kabiny. Ten
                    prostokątny element na środku to przenośny system
                    podtrzymywania życia, który astronauci nosili na plecach
                    podczas pobytu na powierzchni Księżyca. Jeden taki plecak
                    będzie zamocowany na ścianie, a drugi będzie leżał na
                    podłodze.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b12.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b12.webp"
                        alt="elementy kabiny - widok 1"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b16.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b16.webp"
                        alt="elementy kabiny - widok 2"
                      />
                    </PhotoView>
                  </div>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b13.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b13.webp"
                        alt="elementy kabiny - widok 3"
                      />
                    </PhotoView>
                  </div>
                  <p>Wkleiłem większość elementów we wnętrzu kabiny.</p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b17.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b17.webp"
                        alt="wnętrze kabiny - widok 1"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b22.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b22.webp"
                        alt="wnętrze kabiny - widok 2"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b23.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b23.webp"
                        alt="wnętrze kabiny - widok 3"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zrobiłem otwierany właz, w który wkleiłem w wystający koniec
                    małą blaszkę. W górnej części, po drugiej stronie,
                    umieściłem magnes, który przytrzymuje właz w pozycji
                    zamkniętej. Niestety, po pierwszym podejściu, gdy
                    przykleiłem właz, okazało się, że zahacza on o krawędź ECS
                    (po lewej) i nie ma go jak otwierać. Próbowałem tę krawędź
                    trochę spiłować, ale niewiele to dało. Oderwałem więc cały
                    ten element i wykonałem go od nowa, poprawiając jego
                    kształt. Właz również zrobiłem nowy, pomniejszając wcześniej
                    odrobinę jego średnicę. Teraz właz otwiera się bez problemu,
                    chociaż nadal jest na styk.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b18.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b18.webp"
                        alt="otwierany właz - widok 1"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b19.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b19.webp"
                        alt="otwierany właz - widok 2"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b20.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b20.webp"
                        alt="otwierany właz - widok 3"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b21.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b21.webp"
                        alt="otwierany właz - widok 4"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b24.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b24.webp"
                        alt="otwierany właz - widok 5"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b25.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b25.webp"
                        alt="wnętrze kabiny z tylną ścianką"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Wkleiłem w kabinie siatkę wykonaną z kawałka białego tiulu,
                    która osłania część urządzeń. Nie jestem do końca zadowolony
                    z efektu, bo niewiele przez nią widać. Powinna też być
                    drobniejsza. Oczka mają około 1mm.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b26.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b26.webp"
                        alt="siatka we wnętrzu kabiny - widok 1"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b27.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b27.webp"
                        alt="siatka we wnętrzu kabiny - widok 2"
                      />
                    </PhotoView>
                  </div>
                  <p>Tak siatki wyglądały w rzeczywistości.</p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b32.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b32.webp"
                        alt="siatki w rzeczywistości"
                      />
                    </PhotoView>
                  </div>
                  <p>Teraz mogłem już przykleić tylną ściankę.</p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b30.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b30.webp"
                        alt="tylna ścianka kabiny"
                      />
                    </PhotoView>
                  </div>
                  <p>I tak prezentuje się całość:</p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b31.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b31.webp"
                        alt="całość - widok 1"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b28.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b28.webp"
                        alt="całość - widok 2"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b29.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b29.webp"
                        alt="całość - widok 3"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Dodałem w kabinie przewody z białego kabelka. Nie jestem do
                    końca pewien, czy dobrze wszystkie umiejscowiłem, ponieważ
                    na zdjęciach różnie wyglądają, lub nie są w ogóle
                    podłączone.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b33.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b33.webp"
                        alt="przewody w kabinie"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Jeden z przewodów łączy się z kwadratowym elementem,
                    potocznie nazywanym "mailbox". Był to prowizoryczny adapter
                    do pochłaniacza CO₂. Gdy pojawił się problem z rosnącym
                    poziomem CO₂, astronauci musieli skonstruować go w kosmosie
                    z dostępnych materiałów, takich jak plastikowe torebki,
                    okładki z instrukcji lotu czy szarej taśmy klejącej.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b34.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b34.webp"
                        alt="adapter mailbox"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b35.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b35.webp"
                        alt="adapter mailbox - widok 2"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Skleiłem silnik jaki będzie pod kabiną. Jego prostokątną
                    część musiałem trochę pomniejszyć bo okazało się, że nie dam
                    rady go zmieścić. Silnik wsuwa się w ten element w kształcie
                    walca w środku kabiny.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b36.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b36.webp"
                        alt="silnik pod kabiną"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b37.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b37.webp"
                        alt="silnik pod kabiną - widok 2"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b38.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b38.webp"
                        alt="silnik pod kabiną - widok 3"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Przykleiłem uchwyty na zbiorniki, które będą wokół kabiny.
                    Wokół włazu wkleiłem takie "żebra", których i tak nie będzie
                    za bardzo widać, bo będą zabudowane.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b39.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b39.webp"
                        alt="uchwyty na zbiorniki i żebra wokół włazu"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zbiorniki, które miałem teraz wykonać, posiadały bardzo
                    grube obrysy. Źle to wyglądało i ciężko byłoby je
                    wyretuszować. Postanowiłem więc przerobić te elementy w
                    Photoshopie, usuwając z nich obrysy.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b40.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b40.webp"
                        alt="zbiorniki bez obrysów"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b41.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b41.webp"
                        alt="zbiorniki bez obrysów - widok 2"
                      />
                    </PhotoView>
                  </div>
                  <p>Po sklejeniu tak się teraz prezentują.</p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b42.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b42.webp"
                        alt="sklejone zbiorniki"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Następnie wkleiłem je na swoje miejsce. Te podłużne, krótsze
                    zbiorniki okazały się jednak za długie i musiałem je rozciąć
                    i skrócić środkowy segment o około 3mm.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b46.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b46.webp"
                        alt="zbiorniki na swoim miejscu"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b47.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b47.webp"
                        alt="zbiorniki na swoim miejscu - widok 2"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zabudowałem tunel prowadzący do włazu. Można z niego wysunąć
                    środkową część i wtedy widać te "żebra" we wnętrzu.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b49.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b49.webp"
                        alt="tunel prowadzący do włazu"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b48.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b48.webp"
                        alt="tunel prowadzący do włazu - widok 2"
                      />
                    </PhotoView>
                  </div>
                  <p>Skleiłem też kilka kolejnych, większych zbiorników.</p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b43.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b43.webp"
                        alt="większe zbiorniki"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b44.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b44.webp"
                        alt="większe zbiorniki - widok 2"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b45.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b45.webp"
                        alt="większe zbiorniki - widok 3"
                      />
                    </PhotoView>
                  </div>
                  <p>Ciąg dalszy relacji wkrótce...</p>
                </>
              )}
            </article>
            {/* <PaginationNav
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            /> */}
          </PhotoProvider>
        </div>
      )}
    </section>
  );
};

export default Apollo13Report;

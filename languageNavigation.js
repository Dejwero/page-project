const plLanguageBtn = document.querySelectorAll(".language-button")[0];
const engLanguageBtn = document.querySelectorAll(".language-button")[1];
const sunTitle = document.querySelectorAll(".sun-title");
const mercuryTitle = document.querySelectorAll(".mercury-title");
const venusTitle = document.querySelectorAll(".venus-title");
const earthTitle = document.querySelectorAll(".earth-title");
const marsTitle = document.querySelectorAll(".mars-title");
const jupiterTitle = document.querySelectorAll(".jupiter-title");
const saturnTitle = document.querySelectorAll(".saturn-title");
const uranusTitle = document.querySelectorAll(".uranus-title");
const neptuneTitle = document.querySelectorAll(".neptune-title");
const sunTemp = document.querySelector(".sun-temp");
const distances = document.querySelectorAll(".distance");
const mass = document.querySelectorAll(".mass");
const diameter = document.querySelectorAll(".diameter");
const circuit = document.querySelectorAll(".circuit");
const orbitalPeriod = document.querySelectorAll(".orbital-period");
const starType = document.querySelector(".star-type");
const age = document.querySelector(".age");
const days = document.querySelectorAll(".days");
const natSat = document.querySelectorAll(".natural-satellites");
const rockyType = document.querySelectorAll(".rocky-type");
const gasType = document.querySelectorAll(".gas-type");
const billion = document.querySelectorAll(".billion");
const cText = document.querySelector("#cookie-text");
const cAcc = document.querySelector("#cookie-accept");
const cNoAcc = document.querySelector("#cookie-noaccept");
const moreBtns = document.querySelectorAll(".read-more-button");
const description = document.querySelectorAll(".description");
const sunText = document.querySelector("#sun-text");
const mercuryText = document.querySelector("#mercury-text");
const venusText = document.querySelector("#venus-text");
const earthText = document.querySelector("#earth-text");
const marsText = document.querySelector("#mars-text");
const jupiterText = document.querySelector("#jupiter-text");
const saturnText = document.querySelector("#saturn-text");
const uranusText = document.querySelector("#uranus-text");
const neptuneText = document.querySelector("#neptune-text");
const sunMoreText = document.querySelector("#sun-more-text");
const mercuryMoreText = document.querySelector("#mercury-more-text");
const venusMoreText = document.querySelector("#venus-more-text");
const earthMoreText = document.querySelector("#earth-more-text");
const marsMoreText = document.querySelector("#mars-more-text");
const jupiterMoreText = document.querySelector("#jupiter-more-text");
const saturnMoreText = document.querySelector("#saturn-more-text");
const uranusMoreText = document.querySelector("#uranus-more-text");
const neptuneMoreText = document.querySelector("#neptune-more-text");

let selectedLanguage = "pl";

const language = {
  pl: {
    sun: "Słońce",
    mercury: "Merkury",
    venus: "Wenus",
    earth: "Ziemia",
    mars: "Mars",
    jupiter: "Jowisz",
    saturn: "Saturn",
    uranus: "Uran",
    neptune: "Neptun",
    temp: "Temperatura powierzchni",
    distance: "Odległość od Słońca",
    mass: "Masa",
    diameter: "Średnica",
    circuit: "Obwód",
    orbitalPeriod: "Okres orbitalny",
    age: "Wiek: 4.567 mld lat",
    starType: "Rodzaj gwiazdy: Żółty karzeł",
    days: "dni",
    natSat: "Satelity naturalne",
    rockyType: "Typ planety: Skalista",
    gasType: "Typ planety: Gazowy olbrzym",
    billion: "mld",
    cText:
      "Ta strona wykorzystuje pliki cookie. Kliknij przycisk, aby zaakceptować pliki cookie.",
    cAcc: "Akceptuj",
    cNoAcc: "Odrzuć",
    moreInfo: "Wyświetl więcej informacji",
    back: "Powrót",
    description: "Opis",

    sunText:
      "Słońce to gwiazda znajdująca się w centrum Układu Słonecznego. Jest źródłem energii dla planet tego układu, w tym Ziemi. Składa się głównie z wodoru i helu.",
    mercuryText:
      "Merkury to najbliższa planeta w Układzie Słonecznym do Słońca. Jest najmniejszą planetą w Układzie Słonecznym i posiada bardzo cienką atmosferę. Jego powierzchnia jest skałkowa i pełna kraterów.",
    venusText:
      'Wenus to druga planeta w Układzie Słonecznym, licząc od Słońca. Jest najjaśniejszym obiektem na niebie po Księżycu i jest znana jako "Wieczorna Gwiazda" lub "Poranna Gwiazda".',
    earthText:
      "Ziemia to trzecia planeta w Układzie Słonecznym i nasz dom. Jest jedyną znaną planetą, na której istnieje życie. Ma różnorodną atmosferę i występują na niej różnorodne formy życia, w tym ludzie.",
    marsText:
      "Mars to czwarta planeta w Układzie Słonecznym. Jest zwany czerwoną planetą ze względu na kolor swojej powierzchni, który jest spowodowany obecnością tlenku żelaza. Mars posiada cienką atmosferę składającą się głównie z dwutlenku węgla, a także śladowych ilości innych gazów.",
    jupiterText:
      "Jowisz to piąta planeta w Układzie Słonecznym, a zarazem największa z planet tego układu. Jowisz jest gazowym olbrzymem, składającym się głównie z wodoru i helu. Posiada imponującą atmosferę, bogatą w różnorodne gazy.",
    saturnText:
      "Saturn to szósta planeta w Układzie Słonecznym. Jest znana z obecności systemu pierścieni, który jest jednym z najbardziej charakterystycznych elementów tej planety.",
    uranusText:
      "Uran to siódma planeta w Układzie Słonecznym i jedna z najbardziej tajemniczych. Jest zaliczana do gazowych olbrzymów, podobnie jak Jowisz i Saturn. Jednak to, co wyróżnia Urana, to jego charakterystyczna niebieskawa barwa, która wynika z obecności metanu w jego atmosferze.",
    neptuneText:
      "Neptun to ósma i najdalsza planeta w Układzie Słonecznym. Jest gazowym olbrzymem podobnym do Urana. Neptun posiada intensywne niebieskie zabarwienie atmosfery spowodowane obecnością metanu.",

    sunMoreText:
      "W jądrze Słońca zachodzi fuzja jądrowa, w której atomy wodoru łączą się, tworząc atomy helu. Ten proces generuje ogromne ilości energii w postaci światła i ciepła. Słońce pełni kluczową rolę w stabilizacji Układu Słonecznego. Jego grawitacja utrzymuje planety w ruchu orbitalnym, a także oddziałuje na inne ciała niebieskie wokół niego.",
    mercuryMoreText:
      "Ze względu na bliskość Słońca, temperatura na Merkurym może sięgać ekstremalnie wysokich wartości w ciągu dnia i ekstremalnie niskich wartości w nocy. Merkury nie posiada atmosfery w pełnym tego słowa znaczeniu. Jego atmosfera składa się głównie z śladów gazów, takich jak hel i wodor. Ze względu na brak ochrony atmosferycznej, powierzchnia Merkurego jest narażona na bombardowanie promieniowania słonecznego i mikrometeoroidów, co prowadzi do licznych kraterów i powierzchni skałkowej.",
    venusMoreText:
      "Charakterystyczną cechą Wenus jest fakt, że jej okres obrotu wokół osi jest dłuższy niż okres obiegu wokół Słońca, co oznacza, że jeden dzień na Wenus trwa dłużej niż jeden rok. Atmosfera składa się głównie z dwutlenku węgla, z domieszką azotu i śladowych ilości innych gazów. Gęsta atmosfera powoduje efekt cieplarniany, który zatrzymuje ciepło i prowadzi do bardzo wysokich temperatur na powierzchni planety. Temperatury na Wenus sięgają około 465 stopni Celsjusza, co czyni ją najgorętszą planetą w Układzie Słonecznym, pomimo bliższej odległości Merkurego od Słońca.",
    earthMoreText:
      "Atmosfera Ziemi składa się głównie z azotu (około 78%) i tlenu (około 21%), z domieszką innych gazów. Ta złożona mieszanka umożliwia istnienie życia poprzez dostarczanie tlenu, regulację temperatury i ochronę przed niekorzystnymi promieniowaniem słonecznym. Ziemia jest unikalna ze względu na obecność wody w trzech stanach: stałym, ciekłym i gazowym. Woda pokrywa znaczną część powierzchni Ziemi i jest niezbędna do istnienia i rozwoju życia. Ziemia jest również znana z różnorodności ekosystemów, od rozległych oceanów i lasów po rozległe pustynie i lodowce, które zapewniają siedliska dla licznych gatunków organizmów.",
    marsMoreText:
      "Powierzchnia Marsa jest pełna interesujących cech, takich jak doliny, kaniony, wzniesienia i pola lawy. Na powierzchni Marsa znajdują się także biegun północny i biegun południowy, które są pokryte lodem. Mars jest znany z występowania oznak wody w postaci zamarzniętych zbiorników, lodowych czap i skaz na powierzchni. Odkrycia te sugerują, że w przeszłości na Marsie mogły istnieć warunki sprzyjające życiu mikroorganizmów. Obecnie prowadzone są misje kosmiczne mające na celu poszukiwanie dowodów na obecność śladów życia lub potencjalnie zasiedlalnych środowisk.",
    jupiterMoreText:
      "Atmosfera Jowisza posiada charakterystyczne pasy i strefy atmosferyczne. Jedną z nich jest Wielka Czerwona Plama, która jest ogromnym antycyklonem o średnicy ok. 16,000 km. To jedno z najbardziej rozpoznawalnych zjawisk na powierzchni tej planety. Jowisz jest również znany ze swojego bogatego systemu księżyców. Posiada ich 95, z czego największe to Ganimedes, Kallisto, Io i Europa. Te księżyce są obiektem zainteresowania naukowców z powodu ich różnorodności geologicznej i potencjalnych warunków dla występowania życia.",
    saturnMoreText:
      "Atmosfera Saturna składa się głównie z wodoru i helu. Obserwacje ujawniły występowanie pasów atmosferycznych i charakterystycznych burz. Pierścienie Saturna składają się głównie z lodu, kamieni i pyłu, tworząc spektakularne struktury o różnych rozmiarach i kształtach. Zawierają one setki tysięcy mniejszych pierścieni, z których każdy obraca się wokół planety pod wpływem siły grawitacyjnej. Oprócz swojego imponującego systemu pierścieni, Saturn ma również bogaty zestaw księżyców. Jeden z najbardziej interesujących to Tytan, który jest większy od planety Merkury. Tytan posiada gęstą atmosferę, w której występuje azot i metan.",
    uranusMoreText:
      'Atmosfera składa się głównie z wodoru i helu, ale także zawiera metan, który nadaje planecie niezwykły odcień. To właśnie metan pochłania czerwone światło słoneczne i odbija niebieskie, co sprawia, że Uran prezentuje się jako niebieska kula na tle kosmosu. Uran jest również znany ze swojego unikalnego ułożenia orbitalnego. Planeta ta ma silnie nachyloną oś obrotu, co sprawia, że poruszanie się wokół Słońca przypomina jej "toczenie się na boku". Dlatego Uran nazywany jest również "leżącym na boku gigantem".',
    neptuneMoreText:
      "Jednym z najbardziej znanych i fascynujących zjawisk na Neptunie jest Wielkie Ciemne Plamienie. Jest to olbrzymi wir atmosferyczny, który jest obserwowany na powierzchni planety od ponad 150 lat. To dynamiczne zjawisko, które przypomina ogromny huragan, występujący w górnych warstwach atmosfery planety. Neptun posiada również system księżyców, z których najbardziej znanym jest Tryton. Jest on jednym z największych księżyców w Układzie Słonecznym i ma niezwykłe cechy, takie jak obecność gejzerów i możliwość posiadania podpowierzchniowego oceanu.",
  },
  en: {
    sun: "Sun",
    mercury: "Mercury",
    venus: "Venus",
    earth: "Earth",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptune",
    temp: "Surface temperature",
    distance: "Distance from the Sun",
    mass: "Mass",
    diameter: "Diameter",
    circuit: "Circuit",
    orbitalPeriod: "Orbital period",
    age: "Age: 4.567 billion years",
    starType: "Star type: Yellow dwarf",
    days: "days",
    natSat: "Natural satellites",
    rockyType: "Planet Type: Rocky",
    gasType: "Planet Type: Gas Giant",
    billion: "billion",
    cText: "This website uses cookies. Click the button to accept cookies.",
    cAcc: "Accept",
    cNoAcc: "Reject",
    moreInfo: "View more information",
    back: "Back",
    description: "Description",

    sunText:
      "The sun is the star at the center of the solar system. It is the source of energy for the planets of this system, including the Earth. It consists mainly of hydrogen and helium.",
    mercuryText:
      "Mercury is the closest planet in the solar system to the sun. It is the smallest planet in the solar system and has a very thin atmosphere. Its surface is rocky and full of craters.",
    venusText:
      'Venus is the second planet in the solar system, counting from the sun. It is the brightest object in the sky after the Moon and is known as the "Evening Star" or "Morning Star".',
    earthText:
      "Earth is the third planet in the solar system and our home. It is the only known planet with life. It has a diverse atmosphere and hosts a variety of life forms, including humans.",
    marsText:
      "Mars is the fourth planet in the solar system. It is called the red planet because of the color of its surface, which is caused by the presence of iron oxide. Mars has a thin atmosphere consisting mainly of carbon dioxide and trace amounts of other gases.",
    jupiterText:
      "Jupiter is the fifth planet in the solar system, and also the largest of the planets of this system. Jupiter is a gas giant composed mainly of hydrogen and helium. It has an impressive atmosphere, rich in a variety of gases.",
    saturnText:
      "Saturn is the sixth planet in the solar system. It is known for its ring system, which is one of the planet's most distinctive features.",
    uranusText:
      "Uranus is the seventh planet in the solar system and one of the most mysterious. It is classified as a gas giant, like Jupiter and Saturn. However, what makes Uranus stand out is its distinctive bluish color, which is due to the presence of methane in its atmosphere.",
    neptuneText:
      "Neptune is the eighth and farthest planet in the solar system. It is a gas giant similar to Uranus. Neptune has an intense blue tint to its atmosphere due to the presence of methane.",

    sunMoreText:
      "At the core of the Sun, nuclear fusion takes place, where hydrogen atoms combine to form helium atoms. This process generates huge amounts of energy in the form of light and heat. The sun plays a key role in stabilizing the solar system. Its gravity keeps the planets in orbit and also affects other celestial bodies around it.",
    mercuryMoreText:
      "Due to its proximity to the Sun, temperatures on Mercury can reach extremely high values during the day and extremely low values at night. Mercury has no atmosphere in the full sense of the word. Its atmosphere consists mainly of traces of gases such as helium and hydrogen. Due to the lack of atmospheric protection, Mercury's surface is exposed to the bombardment of solar radiation and micrometeoroids, leading to numerous craters and a rocky surface.",
    venusMoreText:
      "A distinctive feature of Venus is that its orbital period is longer than that of the Sun, which means that one day on Venus lasts longer than one year. The atmosphere consists mainly of carbon dioxide, with an admixture of nitrogen and trace amounts of other gases. The dense atmosphere creates a greenhouse effect that traps heat and leads to very high temperatures on the planet's surface. Temperatures on Venus reach around 465 degrees Celsius, making it the hottest planet in the solar system, despite Mercury's closer proximity to the Sun.",
    earthMoreText:
      "The Earth's atmosphere consists mainly of nitrogen (about 78%) and oxygen (about 21%), with some other gases mixed in. This complex mixture enables life to exist by supplying oxygen, regulating temperature and protecting against harmful solar radiation. The earth is unique due to the presence of water in three states: solid, liquid and gas. Water covers a large part of the Earth's surface and is essential for the existence and development of life. The Earth is also known for its diversity of ecosystems, from vast oceans and forests to vast deserts and glaciers that provide habitats for numerous species of organisms.",
    marsMoreText:
      "The surface of Mars is full of interesting features such as valleys, canyons, hills and lava fields. The north pole and south pole are also on the surface of Mars, both of which are covered in ice. Mars is known for its signs of water in the form of frozen reservoirs, ice caps, and surface blemishes. These findings suggest that Mars may have had conditions favorable to microbial life in the past. Space missions are currently underway to search for evidence of signs of life or potentially habitable environments.",
    jupiterMoreText:
      "Jupiter's atmosphere has characteristic belts and atmospheric zones. One of them is the Great Red Spot, which is a huge anticyclone with a diameter of about 16,000 km. It is one of the most recognizable phenomena on the surface of this planet. Jupiter is also known for its rich moon system. It has 95 of them, the largest of which are Ganymede, Callisto, Io and Europa. These moons are of interest to scientists because of their geological diversity and potential conditions for life.",
    saturnMoreText:
      "Saturn's atmosphere is mostly hydrogen and helium. Observations revealed the occurrence of atmospheric belts and characteristic thunderstorms. Saturn's rings are composed mostly of ice, rocks, and dust, creating spectacular structures of various sizes and shapes. They contain hundreds of thousands of smaller rings, each rotating around the planet under the influence of gravity. In addition to its impressive ring system, Saturn also has a rich set of moons. One of the most interesting is Titan, which is larger than the planet Mercury. Titan has a thick atmosphere with nitrogen and methane.",
    uranusMoreText:
      'Atmosphere is mostly hydrogen and helium, but it also contains methane, which gives the planet its unusual hue. It is methane that absorbs red sunlight and reflects blue light, which makes Uranus appear as a blue orb against the backdrop of space. Uranus is also known for its unique orbital arrangement. This planet has a strongly tilted axis of rotation, which makes it feel like "rolling on its side" as it moves around the sun. That is why Uranus is also called the "side-lying giant."',
    neptuneMoreText:
      "One of the most famous and fascinating phenomena on Neptune is the Great Dark Spotting. It is a giant atmospheric vortex that has been observed on the planet's surface for over 150 years. It is a dynamic phenomenon that resembles a huge hurricane that occurs in the upper atmosphere of the planet. Neptune also has a system of moons, the most famous of which is Triton. It is one of the largest moons in the solar system and has unusual features such as the presence of geysers and the possibility of a subsurface ocean.",
  },
  // By dodać nowy język wystarczy dodać analogiczny obiekt i przetłumaczyć tekst
};

function changeLanguage(lang) {
  selectedLanguage = lang;

  sunTitle.forEach((sun) => (sun.textContent = language[lang].sun));
  mercuryTitle.forEach(
    (mercury) => (mercury.textContent = language[lang].mercury)
  );
  venusTitle.forEach((venus) => (venus.textContent = language[lang].venus));
  earthTitle.forEach((earth) => (earth.textContent = language[lang].earth));
  marsTitle.forEach((mars) => (mars.textContent = language[lang].mars));
  jupiterTitle.forEach(
    (jupiter) => (jupiter.textContent = language[lang].jupiter)
  );
  saturnTitle.forEach((saturn) => (saturn.textContent = language[lang].saturn));
  uranusTitle.forEach((uranus) => (uranus.textContent = language[lang].uranus));
  neptuneTitle.forEach(
    (neptune) => (neptune.textContent = language[lang].neptune)
  );
  sunTemp.textContent = language[lang].temp;
  distances.forEach(
    (distance) => (distance.textContent = language[lang].distance)
  );
  mass.forEach((mass) => (mass.textContent = language[lang].mass));
  diameter.forEach(
    (diameter) => (diameter.textContent = language[lang].diameter)
  );
  circuit.forEach((circuit) => (circuit.textContent = language[lang].circuit));
  orbitalPeriod.forEach(
    (orbitalPeriod) =>
      (orbitalPeriod.textContent = language[lang].orbitalPeriod)
  );
  age.textContent = language[lang].age;
  starType.textContent = language[lang].starType;
  days.forEach((days) => (days.textContent = language[lang].days));
  natSat.forEach((natSat) => (natSat.textContent = language[lang].natSat));
  rockyType.forEach(
    (rockyType) => (rockyType.textContent = language[lang].rockyType)
  );
  gasType.forEach((gasType) => (gasType.textContent = language[lang].gasType));
  billion.forEach((billion) => (billion.textContent = language[lang].billion));
  cText.textContent = language[lang].cText;
  cAcc.textContent = language[lang].cAcc;
  cNoAcc.textContent = language[lang].cNoAcc;
  moreBtns.forEach((moreBtn) => {
    if (moreBtn.textContent === "Powrót" || moreBtn.textContent === "Back") {
      moreBtn.textContent = language[lang].back;
    } else {
      moreBtn.textContent = language[lang].moreInfo;
    }
  });
  description.forEach(
    (description) => (description.textContent = language[lang].description)
  );
  sunText.textContent = language[lang].sunText;
  mercuryText.textContent = language[lang].mercuryText;
  venusText.textContent = language[lang].venusText;
  earthText.textContent = language[lang].earthText;
  marsText.textContent = language[lang].marsText;
  jupiterText.textContent = language[lang].jupiterText;
  saturnText.textContent = language[lang].saturnText;
  uranusText.textContent = language[lang].uranusText;
  neptuneText.textContent = language[lang].neptuneText;
  sunMoreText.textContent = language[lang].sunMoreText;
  mercuryMoreText.textContent = language[lang].mercuryMoreText;
  venusMoreText.textContent = language[lang].venusMoreText;
  earthMoreText.textContent = language[lang].earthMoreText;
  marsMoreText.textContent = language[lang].marsMoreText;
  jupiterMoreText.textContent = language[lang].jupiterMoreText;
  saturnMoreText.textContent = language[lang].saturnMoreText;
  uranusMoreText.textContent = language[lang].uranusMoreText;
  neptuneMoreText.textContent = language[lang].neptuneMoreText;
  //
}

engLanguageBtn.addEventListener("click", changeLanguage("en"));
plLanguageBtn.addEventListener("click", changeLanguage("pl"));

function toggleDescription(sectionId) {
  const section = document.getElementById(sectionId);
  section.classList.toggle("section-expanded");
  const planetImage = section.querySelector(".planet-image");
  const planetModel = section.querySelector(".planet-model");
  const moreDescription = section.querySelectorAll(".more-description");

  const readMoreButton = section.querySelector(".read-more-button");
  if (section.classList.contains("section-expanded")) {
    planetImage.style.display = "none";
    planetModel.style.display = "block";
    moreDescription.forEach((description) => {
      description.style.display = "block";
    });
    document.querySelector(".container").classList.add("no-scroll");

    readMoreButton.textContent = language[selectedLanguage].back;
  } else {
    planetImage.style.display = "block";
    planetModel.style.display = "none";
    moreDescription.forEach((description) => {
      description.style.display = "none";
    });
    document.querySelector(".container").classList.remove("no-scroll");

    readMoreButton.textContent = language[selectedLanguage].moreInfo;
  }
}

function navigation(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
  const currentSection = document.querySelector(".section-expanded");

  if (currentSection) {
    const currentSectionId = currentSection.id;
    toggleDescription(currentSectionId);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var hideButtons = document.getElementsByClassName("hide-cookie-notification");

  for (var i = 0; i < hideButtons.length; i++) {
    hideButtons[i].addEventListener("click", function () {
      var notification = this.closest(".cookie-notification");
      notification.style.display = "none";
    });
  }
});

export interface Movement {
  name: string;
  year: string;
  shortSummary: string;
  thumbnail: string;
  heroImage: string;
  tags: string[];
  historicalPeriod: string;
  characteristics: { title: string; description: string }[];
  referents: { name: string; role: string; image: string }[];
  masterpieces: {
    title: string;
    artist: string;
    year: string;
    description: string;
    image: string;
  }[];
  analysis: string;
  socialContext: string;
  references: string[];
}

export type Phase = "EXPLORE" | "DESIGN" | "PUBLISH";

export const movements: Movement[] = [
  {
    name: "Arte Prehistórico",
    year: "30,000 a.C. - 3,000 a.C.",
    historicalPeriod:
      "Paleolítico Superior y Neolítico. El nacimiento de la consciencia simbólica y la comunicación visual.",
    shortSummary:
      "El origen del símbolo: rituales, caza y el despertar de la imagen.",
    thumbnail: "/assets/movements/prehistoric_venus.png",
    heroImage: "/assets/movements/prehistoric_bison.png",
    tags: ["Ritual", "Símbolo", "Supervivencia"],
    characteristics: [
      {
        title: "Naturalismo Mágico",
        description:
          "Representación de animales con gran realismo para atraer la caza mediante rituales.",
      },
      {
        title: "Pigmentos Naturales",
        description:
          "Uso de óxidos de hierro (rojos), carbón (negros) y arcillas (amarillos).",
      },
      {
        title: "Esquematismo",
        description:
          "Simplificación de la figura humana hacia signos y símbolos universales.",
      },
    ],
    socialContext:
      "El arte no era decoración, sino una herramienta de supervivencia. Pintar el animal era, en la mente del chamán, poseer su espíritu. El diseño nació aquí como una forma de controlar la realidad.",
    referents: [
      {
        name: "El Chamán Artista",
        role: "Mediador entre el mundo físico y el espiritual a través de la imagen.",
        image: "",
      },
    ],
    masterpieces: [
      {
        title: "Bisonte Recostado",
        artist: "Anónimo",
        year: "~15,000 a.C.",
        description:
          "Altamira: La Capilla Sixtina del arte rupestre; volumen magistral en roca.",
        image: "/assets/movements/prehistoric_bison.png",
      },
      {
        title: "Venus de Willendorf",
        artist: "Anónimo",
        year: "~25,000 a.C.",
        description:
          "Escultura en piedra que simboliza la fertilidad y el origen de la vida.",
        image: "/assets/movements/prehistoric_venus.png",
      },
    ],
    analysis: `### El Despertar de la Imagen
El Arte Prehistórico es la base de toda la comunicación visual moderna. Aquí el ser humano entendió que una línea podía representar un concepto.

**El Sentir del Arte:**
Es un arte táctil, terrenal y poderoso. Nos conecta con nuestros instintos más básicos. Sin este primer paso, no existirían los logotipos, los iconos ni ninguna forma de representación visual que usamos hoy en día.`,
    references: [
      "Leroi-Gourhan, A. (1965). Prehistoria del Arte Occidental. Gustavo Gili.",
      "Clottes, J. (2008). La Cueva de Chauvet: El origen del arte. Phaidon.",
      "UNESCO. (2024). Cave of Altamira and Paleolithic Cave Art of Northern Spain.",
    ],
  },
  {
    name: "Arte Medieval",
    year: "1000 - 1400",
    historicalPeriod:
      "La Edad Media europea, marcada por el feudalismo, el auge de las catedrales góticas y el teocentrismo absoluto.",
    shortSummary:
      "El arte y el diseño al servicio de la fe: luz mística, altura divina y simbolismo sagrado.",
    thumbnail: "/assets/movements/medieval_notredame.png",
    heroImage: "/assets/movements/medieval_notredame.png",
    tags: ["Teocentrismo", "Luz Mística", "Gótico"],
    characteristics: [
      {
        title: "Verticalidad Monumental",
        description:
          "Catedrales con techos altísimos y arcos apuntados para guiar el ojo y el espíritu hacia Dios.",
      },
      {
        title: "Vitrales de Luz",
        description:
          "Uso del color en ventanales para simular la luz divina en la tierra (Lux Nova).",
      },
      {
        title: "Didactismo Visual",
        description:
          "Esculturas y relieves planos estilizados para educar sobre las sagradas escrituras a una población analfabeta.",
      },
    ],
    socialContext:
      "La Iglesia Católica era la institución dominante y el diseño artístico se centraba en glorificar a Dios y comunicar dogmas teológicos como la salvación eterna.",
    referents: [
      {
        name: "Abad Suger",
        role: "Teólogo francés considerado el padre del arte gótico.",
        image: "",
      },
      {
        name: "Gislebertus",
        role: "Reconocido escultor de catedrales de la época románica.",
        image: "",
      },
    ],
    masterpieces: [
      {
        title: "Catedral de Notre-Dame",
        artist: "Anónimo",
        year: "1163 - 1250",
        description:
          "Icono gótico de arcos ojivales, gárgolas y el célebre rosetón de vitrales decorativos.",
        image: "/assets/movements/medieval_notredame.png",
      },
    ],
    analysis: `### El Espacio como Experiencia Espiritual
El Arte Medieval demuestra cómo el diseño arquitectónico y de interiores puede ser empleado para moldear la experiencia psicológica del usuario, haciéndole sentir la presencia de lo sublime.

**El Sentir del Arte:**
Es solemne, divino y reverente. Nos invita a mirar hacia arriba. En el diseño de marcas moderno, las tipografías de estilo *Blackletter* (góticas) heredan esta gran sensación de peso, tradición e indiscutible autoridad.`,
    references: [
      "Duby, G. (1984). El tiempo de las catedrales. Cátedra.",
      "Eco, U. (2012). Arte y belleza en la estética medieval. Debolsillo.",
      "Panofsky, E. (1976). Arquitectura gótica y escolástica. La Piqueta.",
    ],
  },
  {
    name: "Renacimiento",
    year: "1400 - 1600",
    historicalPeriod:
      "Transición de la Edad Media a la Edad Moderna. Humanismo y redescubrimiento de la cultura clásica.",
    shortSummary:
      "El renacer de la proporción, la perspectiva y el ideal humano.",
    thumbnail: "/assets/movements/renaissance_david.png",
    heroImage: "/assets/movements/renaissance_school_athens.png",
    tags: ["Antropocentrismo", "Perspectiva", "Proporción"],
    characteristics: [
      {
        title: "Antropocentrismo",
        description:
          "El ser humano como medida de todas las cosas y centro del universo visual.",
      },
      {
        title: "Perspectiva Lineal",
        description:
          "Creación de profundidad matemática para engañar al ojo y crear mundos habitables.",
      },
      {
        title: "Idealismo",
        description:
          "Búsqueda de la belleza perfecta, la simetría y la armonía clásica inspirada en Grecia.",
      },
      {
        title: "Sfumato",
        description:
          "Técnica de difuminado que suaviza los contornos para dar un aspecto de misterio y realidad.",
      },
    ],
    socialContext:
      "La caída de Constantinopla y la invención de la imprenta permitieron la difusión del humanismo. La sociedad pasó del teocentrismo medieval al antropocentrismo, redescubriendo el valor del individuo.",
    referents: [
      {
        name: "Leonardo da Vinci",
        role: "El genio universal. Maestro del Sfumato y la anatomía.",
        image: "",
      },
      {
        name: "Miguel Ángel",
        role: "La fuerza de la escultura y el drama de la Capilla Sixtina.",
        image: "",
      },
      {
        name: "Rafael Sanzio",
        role: "La perfección del equilibrio y la gracia en la pintura.",
        image: "",
      },
    ],
    masterpieces: [
      {
        title: "La Escuela de Atenas",
        artist: "Rafael",
        year: "1511",
        description:
          "La máxima expresión de la perspectiva y el pensamiento humanista.",
        image: "/assets/movements/renaissance_school_athens.png",
      },
      {
        title: "El David",
        artist: "Miguel Ángel",
        year: "1504",
        description:
          "Un triunfo de la proporción y la psicología humana en mármol.",
        image: "/assets/movements/renaissance_david.png",
      },
    ],
    analysis: `### El Despertar del Observador
El Renacimiento no fue solo un cambio estético, fue una **revolución epistemológica**. El hombre dejó de mirar al cielo para mirarse a sí mismo y al mundo que lo rodeaba.

**El Sentir del Arte:**
Al observar una obra renacentista, sentimos **orden y paz**. Cada elemento está donde debe estar. La perspectiva lineal no es solo una técnica, es el deseo humano de controlar y entender el espacio. Es el momento en que el diseño se vuelve ciencia y el arte se vuelve verdad.`,
    references: [
      "Gombrich, E. H. (1950). La Historia del Arte. Phaidon Press.",
      "Panofsky, E. (1991). El significado en las artes visuales. Alianza Editorial.",
      "The Metropolitan Museum of Art. (2023). Italian Renaissance Art.",
    ],
  },
  //   {
  //     name: "Barroco",
  //     year: "1600 - 1750",
  //     historicalPeriod:
  //       "Época de la Contrarreforma y el absolutismo monárquico. Dramatismo y exuberancia.",
  //     shortSummary: "La estética del exceso, el contraste y la emoción teatral.",
  //     thumbnail: "/assets/movements/baroque_teresa.png",
  //     heroImage: "/assets/movements/baroque_meninas.png",
  //     tags: ["Dramatismo", "Contraste", "Dinamismo"],
  //     characteristics: [
  //       {
  //         title: "Tenebrismo",
  //         description:
  //           "Contrastes violentos entre luz y sombra para enfocar el drama emocional.",
  //       },
  //       {
  //         title: "Horror Vacui",
  //         description:
  //           "Miedo al vacío, tendencia a llenar cada milímetro con detalles y ornamentos.",
  //       },
  //       {
  //         title: "Teatralidad",
  //         description:
  //           "Obras que buscan conmover, asombrar y atrapar al espectador en su narrativa.",
  //       },
  //       {
  //         title: "Líneas Curvas",
  //         description:
  //           "Abandono de la línea recta por el movimiento serpenteante y dinámico.",
  //       },
  //     ],
  //     socialContext:
  //       "Enmarcado en la Contrarreforma y el absolutismo monárquico, el arte se convirtió en una herramienta de persuasión y poder para deslumbrar a los fieles y a los súbditos con la grandeza de la Iglesia y el Estado.",
  //     referents: [
  //       {
  //         name: "Caravaggio",
  //         role: "El rebelde de la luz. Padre del tenebrismo.",
  //         image: "",
  //       },
  //       {
  //         name: "Gian Lorenzo Bernini",
  //         role: "Escultor que convirtió el mármol en carne viva.",
  //         image: "",
  //       },
  //       {
  //         name: "Diego Velázquez",
  //         role: "Maestro de la atmósfera y la perspectiva aérea.",
  //         image: "",
  //       },
  //     ],
  //     masterpieces: [
  //       {
  //         title: "Las Meninas",
  //         artist: "Velázquez",
  //         year: "1656",
  //         description:
  //           "Un juego de espejos y realidad que redefine el espacio pictórico.",
  //         image: "/assets/movements/baroque_meninas.png",
  //       },
  //       {
  //         title: "El Éxtasis de Santa Teresa",
  //         artist: "Bernini",
  //         year: "1652",
  //         description:
  //           "La fusión perfecta entre espiritualidad mística y drama físico.",
  //         image: "/assets/movements/baroque_teresa.png",
  //       },
  //     ],
  //     analysis: `### El Teatro de la Existencia
  // El Barroco utiliza la luz como un elemento narrativo. Si el Renacimiento es silencio, el Barroco es un **grito de asombro**.

  // **El Sentir del Arte:**
  // El Barroco nos hace sentir pequeños ante la inmensidad y el drama. Es una lucha constante entre la sombra y la luz. En diseño contemporáneo, vemos su legado en el **maximalismo** y en la fotografía de alto contraste que busca generar impacto inmediato.`,
  //     references: [
  //       "Tapié, V. L. (1957). El Barroco. Eudeba.",
  //       "Wittkower, R. (1979). Arte y arquitectura en Italia, 1600-1750. Cátedra.",
  //       "Museo del Prado. (2024). Velázquez y la corte de Felipe IV.",
  //     ],
  //   },
  {
    name: "Neoclasicismo",
    year: "1750 - 1830",
    historicalPeriod:
      "La Ilustración y la Revolución Francesa. Retorno a los valores racionales.",
    shortSummary:
      "Racionalismo, orden y la sobriedad inspirada en Grecia y Roma.",
    thumbnail: "/assets/movements/neoclassic_psyche.png",
    heroImage: "/assets/movements/neoclassic_horatii.png",
    tags: ["Razón", "Orden", "Moral"],
    characteristics: [
      {
        title: "Racionalismo",
        description:
          "Predominio de la línea sobre el color, buscando la claridad mental.",
      },
      {
        title: "Estatismo",
        description:
          "Composiciones serenas y equilibradas que inspiran virtud y deber.",
      },
      {
        title: "Temática Heroica",
        description:
          "Enfoque en la moralidad, el sacrificio por el estado y el deber civil.",
      },
      {
        title: "Sobriedad",
        description:
          "Eliminación de la decoración innecesaria en favor de la pureza estructural.",
      },
    ],
    socialContext:
      "Surgió como una reacción contra el exceso del Barroco y Rococó, buscando un retorno a la pureza moral y cívica inspirada en la Grecia y Roma clásicas, coincidiendo con la Ilustración.",
    referents: [
      {
        name: "Jacques-Louis David",
        role: "El pintor de la Revolución y el Imperio.",
        image: "",
      },
      {
        name: "Antonio Canova",
        role: "Escultor que recuperó la pureza del mármol blanco.",
        image: "",
      },
      {
        name: "Jean-Auguste-Dominique Ingres",
        role: "Defensor de la línea y el dibujo impecable.",
        image: "",
      },
    ],
    masterpieces: [
      {
        title: "El Juramento de los Horacios",
        artist: "David",
        year: "1784",
        description:
          "El manifiesto visual del deber, el patriotismo y el rigor geométrico.",
        image: "/assets/movements/neoclassic_horatii.png",
      },
      {
        title: "Eros y Psique",
        artist: "Canova",
        year: "1793",
        description:
          "Un equilibrio sublime entre la frialdad del mármol y la calidez del mito.",
        image: "/assets/movements/neoclassic_psyche.png",
      },
    ],
    analysis: `### El Triunfo de la Mente
El Neoclasicismo es el lenguaje visual de la Ilustración. Es el arte que dice: **"Pienso, luego diseño"**.

**El Sentir del Arte:**
Nos transmite una sensación de control, justicia y permanencia. Es un arte que no busca entretener, sino educar. Este movimiento es el precursor del **funcionalismo moderno**, donde la estructura es la que manda sobre el adorno.`,
    references: [
      "Honour, H. (1968). El Neoclasicismo. Alianza Forma.",
      "Rosenblum, R. (1967). Transformaciones en el arte de finales del siglo XVIII. Taurus.",
      "Louvre Museum. (2023). Jacques-Louis David: The Painter of the Revolution.",
    ],
  },
  //   {
  //     name: "Impresionismo",
  //     year: "1860 - 1890",
  //     historicalPeriod:
  //       "Segunda Revolución Industrial. Aparición de la fotografía y la luz eléctrica.",
  //     shortSummary:
  //       "La captura del instante fugaz y el estudio científico de la luz.",
  //     thumbnail: "/assets/movements/impression_renoir.png",
  //     heroImage: "/assets/movements/impression_sunrise.png",
  //     tags: ["Luz", "Instante", "Color"],
  //     characteristics: [
  //       {
  //         title: "Pincelada Suelta",
  //         description:
  //           "Manchas de color puro que se mezclan en la retina del espectador, no en la paleta.",
  //       },
  //       {
  //         title: "Plein Air",
  //         description:
  //           "Pintura al aire libre para capturar la vibración real de la luz solar.",
  //       },
  //       {
  //         title: "Sombras Coloreadas",
  //         description:
  //           "Las sombras dejan de ser negras para llenarse de azules, violetas y magentas.",
  //       },
  //       {
  //         title: "Instante Fugaz",
  //         description:
  //           "Obsesión por capturar cómo cambia un objeto en cuestión de minutos bajo la luz.",
  //       },
  //     ],
  //     socialContext:
  //       "La invención de la cámara fotográfica liberó a la pintura de la obligación de representar fielmente la realidad, permitiendo a los artistas explorar la percepción subjetiva y el efecto de la luz.",
  //     referents: [
  //       {
  //         name: "Claude Monet",
  //         role: "El buscador incansable de la luz. Padre del movimiento.",
  //         image: "",
  //       },
  //       {
  //         name: "Auguste Renoir",
  //         role: "Pintor de la alegría de vivir y la textura de la piel.",
  //         image: "",
  //       },
  //       {
  //         name: "Edgar Degas",
  //         role: "Maestro del movimiento y las composiciones fotográficas.",
  //         image: "",
  //       },
  //     ],
  //     masterpieces: [
  //       {
  //         title: "Impresión, Sol Naciente",
  //         artist: "Monet",
  //         year: "1872",
  //         description:
  //           "La obra que dio nombre al movimiento, pura atmósfera y luz.",
  //         image: "/assets/movements/impression_sunrise.png",
  //       },
  //       {
  //         title: "El Baile en el Moulin de la Galette",
  //         artist: "Renoir",
  //         year: "1876",
  //         description:
  //           "Un estudio de cómo la luz filtrada por los árboles crea manchas de color.",
  //         image: "/assets/movements/impression_renoir.png",
  //       },
  //     ],
  //     analysis: `### La Danza de los Fotones
  // El Impresionismo rompe con la academia para enfocarse en la **percepción pura**.

  // **El Sentir del Arte:**
  // Es una explosión de vida y frescura. Nos hace sentir la temperatura del aire y la humedad del agua. En el diseño digital moderno, su legado vive en el uso de gradientes y en la importancia de la atmósfera visual sobre la nitidez técnica de los bordes.`,
  //     references: [
  //       "Rewald, J. (1973). Historia del Impresionismo. Seix Barral.",
  //       "Nochlin, L. (1991). El realismo. Alianza Editorial.",
  //       "Musée d'Orsay. (2024). Monet and the birth of Impressionism.",
  //     ],
  //   },
  {
    name: "Art Nouveau",
    year: "1890 - 1910",
    historicalPeriod:
      "Fin de siècle. Transición hacia la modernidad decorativa y elegante.",
    shortSummary:
      "Líneas orgánicas, inspiración en la naturaleza y ornamentación fluida.",
    thumbnail: "/assets/movements/artnouveau_gaudi.png",
    heroImage: "/assets/movements/artnouveau_the_kiss.png",
    tags: ["Naturaleza", "Línea Látigo", "Estilización"],
    characteristics: [
      {
        title: "Línea Orgánica",
        description:
          "Uso de curvas sinuosas (coup de fouet) inspiradas en el crecimiento de las plantas.",
      },
      {
        title: "Integración Total",
        description:
          "Búsqueda de un arte que lo abarque todo: desde la arquitectura hasta el tenedor.",
      },
      {
        title: "Estilización Femenina",
        description:
          "Uso de figuras femeninas etéreas con cabellos que se vuelven arabescos.",
      },
      {
        title: "Exotismo",
        description:
          "Influencias del arte japonés y elementos de la flora y fauna mística.",
      },
    ],
    socialContext:
      "Como respuesta al academicismo y al impacto negativo de la industrialización temprana, se buscó revitalizar la artesanía y fusionar el arte con la vida cotidiana.",
    referents: [
      {
        name: "Alphonse Mucha",
        role: "Maestro del cartel y la belleza decorativa.",
        image: "",
      },
      {
        name: "Antoni Gaudí",
        role: "Arquitecto visionario que construyó el sueño de la naturaleza.",
        image: "",
      },
      {
        name: "Gustav Klimt",
        role: "Simbolista que envolvió el arte en oro y geometría orgánica.",
        image: "",
      },
    ],
    masterpieces: [
      {
        title: "El Beso",
        artist: "Klimt",
        year: "1908",
        description:
          "La unión mística entre la carne y la ornamentación bizantina.",
        image: "/assets/movements/artnouveau_the_kiss.png",
      },
      {
        title: "La Sagrada Familia",
        artist: "Gaudí",
        year: "1882 - Presente",
        description: "Una catedral que crece como un bosque de piedra.",
        image: "/assets/movements/artnouveau_gaudi.png",
      },
    ],
    analysis: `### El Velo de la Naturaleza
El Art Nouveau es el primer estilo que busca democratizar el diseño elevando los objetos cotidianos a la categoría de joyas.

**El Sentir del Arte:**
Es pura elegancia y sensualidad. Nos rodea con formas que parecen estar vivas y en constante crecimiento. Es fundamental para entender el origen del **diseño gráfico publicitario** y el concepto de "marca personal" del artista.`,
    references: [
      "Schmutzler, R. (1982). El Art Nouveau. Gustavo Gili.",
      "Fahr-Becker, G. (2015). Art Nouveau. Taschen.",
      "Victoria and Albert Museum. (2023). Art Nouveau: Nature and Design.",
    ],
  },
  {
    name: "Expresionismo",
    year: "1905 - 1933",
    historicalPeriod:
      "Periodo de entreguerras y crisis existencial en Europa. El arte como grito.",
    shortSummary:
      "La subjetividad emocional por encima de la realidad objetiva.",
    thumbnail: "/assets/movements/expressionism_kandinsky.png",
    heroImage: "/assets/movements/expressionism_scream.png",
    tags: ["Angustia", "Color Subjetivo", "Distorsión"],
    characteristics: [
      {
        title: "Distorsión de la Forma",
        description:
          "Uso de líneas quebradas y formas violentas para transmitir angustia o pasión.",
      },
      {
        title: "Color Emocional",
        description:
          "Colores que no corresponden a la realidad, sino al estado anímico del artista.",
      },
      {
        title: "Temática Psicológica",
        description:
          "Enfoque en la soledad, el miedo, la sexualidad y la desesperación humana.",
      },
      {
        title: "Pincelada Gestual",
        description:
          "Trazo rápido y cargado de materia que evidencia el gesto físico del pintor.",
      },
    ],
    socialContext:
      "Respondió a la alienación del individuo en la gran ciudad y a los traumas colectivos que conducirían a las Guerras Mundiales.",
    referents: [
      {
        name: "Edvard Munch",
        role: "Precursor que pintó la angustia del hombre moderno.",
        image: "",
      },
      {
        name: "Wassily Kandinsky",
        role: "Pionero que llevó el expresionismo hacia la abstracción absoluta.",
        image: "",
      },
      {
        name: "Ernst Ludwig Kirchner",
        role: "Líder del grupo Die Brücke (El Puente).",
        image: "",
      },
    ],
    masterpieces: [
      {
        title: "El Grito",
        artist: "Edvard Munch",
        year: "1893",
        description:
          "La imagen definitiva de la ansiedad existencial contemporánea.",
        image: "/assets/movements/expressionism_scream.png",
      },
      {
        title: "Composición VII",
        artist: "Wassily Kandinsky",
        year: "1913",
        description:
          "Una tormenta de color y forma que busca la espiritualidad pura.",
        image: "/assets/movements/expressionism_kandinsky.png",
      },
    ],
    analysis: `### El Arte del Grito Interior
El Expresionismo es la **subjetividad al poder**. No busca que veas el mundo, sino que sientas lo que el artista siente al mirarlo.

**El Sentir del Arte:**
Es incómodo, vibrante y visceral. Nos obliga a mirar dentro de nosotros mismos. En diseño, su legado es fundamental para el **diseño gráfico experimental** y el uso del color como herramienta psicológica para manipular la respuesta emocional del usuario.`,
    references: [
      "Dube, W. D. (1972). El Expresionismo. Destino.",
      "Elger, D. (2002). Expresionismo: Una revolución artística alemana. Taschen.",
      "MoMA. (2024). German Expressionism: The Graphic Impulse.",
    ],
  },
  {
    name: "Cubismo",
    year: "1907 - 1914",
    historicalPeriod:
      "Principios del siglo XX, una época de grandes revoluciones científicas (teoría de la relatividad) y el surgimiento del cine.",
    shortSummary:
      "La ruptura absoluta con la perspectiva tradicional: deconstrucción del plano en múltiples puntos de vista.",
    thumbnail: "/assets/movements/cubism_avignon.png",
    heroImage: "/assets/movements/cubism_avignon.png",
    tags: ["Geometrización", "Deconstrucción", "Perspectiva"],
    characteristics: [
      {
        title: "Multi-Perspectiva",
        description:
          "Representación del objeto desde múltiples ángulos simultáneamente en un plano bidimensional.",
      },
      {
        title: "Geometrización Pura",
        description:
          "Reducción de la naturaleza a formas esenciales: cubos, esferas, cilindros y conos.",
      },
      {
        title: "Paleta Monocromática",
        description:
          "Foco riguroso en la forma utilizando tonos neutros de ocres, grises, marrones y negros.",
      },
    ],
    socialContext:
      "Al desafiar la perspectiva renacentista lineal, el cubismo reflejó la crisis de la realidad absoluta en la sociedad moderna pre-guerra.",
    referents: [
      {
        name: "Pablo Picasso",
        role: "Genio co-creador que redefinió el canon pictórico de la historia.",
        image: "",
      },
      {
        name: "Georges Braque",
        role: "Pintor clave que desarrolló el cubismo analítico y sintético.",
        image: "",
      },
      {
        name: "Juan Gris",
        role: "Artista español que aportó un brillante sentido cromático y orden al cubismo.",
        image: "",
      },
    ],
    masterpieces: [
      {
        title: "Las Señoritas de Avignon",
        artist: "Pablo Picasso",
        year: "1907",
        description:
          "La obra fundacional del arte moderno que eliminó la perspectiva clásica e introdujo planos fracturados.",
        image: "/assets/movements/cubism_avignon.png",
      },
    ],
    analysis: `### El Origen de la Abstracción Geométrica
El Cubismo rompió la ilusión tradicional de la ventana pictórica y sentó las bases para el diseño abstracto en todo el siglo XX.

**El Sentir del Arte:**
Es cerebral, analítico y revolucionario. Desafía al observador a decodificar la estructura visual. Es el antecedente directo del **diseño constructivista**, el modelado 3D y la abstracción tipográfica moderna.`,
    references: [
      "Golding, J. (1988). El Cubismo. Alianza Editorial.",
      "Picasso, P. (1935). Declaración sobre el arte. Cuadernos de Arte.",
      "Antliff, M. (2001). Cubism and Culture. Thames & Hudson.",
    ],
  },
  //   {
  //     name: "Futurismo",
  //     year: "1909 - 1944",
  //     historicalPeriod:
  //       "Inicio del siglo XX, auge de la industrialización y vísperas de la Primera Guerra Mundial.",
  //     shortSummary:
  //       "La belleza de la velocidad, la máquina y el dinamismo eléctrico.",
  //     thumbnail: "/assets/movements/futurism_balla.png",
  //     heroImage: "/assets/movements/futurism_continuity.png",
  //     tags: ["Velocidad", "Máquina", "Energía"],
  //     characteristics: [
  //       {
  //         title: "Dinamismo Universal",
  //         description:
  //           "Representación del movimiento y la velocidad como nuevos ideales de belleza.",
  //       },
  //       {
  //         title: "Estética de la Máquina",
  //         description:
  //           "Fascinación por los automóviles, los aviones y la tecnología industrial.",
  //       },
  //       {
  //         title: "Simultaneidad",
  //         description:
  //           "Captura de varios momentos de un movimiento en una sola imagen (cronofotografía).",
  //       },
  //       {
  //         title: "Ruptura con el Pasado",
  //         description:
  //           "Rechazo total a la tradición y los museos; culto a la modernidad.",
  //       },
  //     ],
  //     socialContext:
  //       "Inspirado por el vertiginoso avance tecnológico, abogaba por la destrucción de los símbolos del pasado para dar paso a una era definida por la industria y la velocidad.",
  //     referents: [
  //       {
  //         name: "Filippo Tommaso Marinetti",
  //         role: "Fundador y autor del Manifiesto Futurista.",
  //         image: "",
  //       },
  //       {
  //         name: "Umberto Boccioni",
  //         role: "Pintor y escultor que dio forma al dinamismo plástico.",
  //         image: "",
  //       },
  //       {
  //         name: "Giacomo Balla",
  //         role: "Maestro de la descomposición de la luz y el movimiento.",
  //         image: "",
  //       },
  //     ],
  //     masterpieces: [
  //       {
  //         title: "Formas únicas de la continuidad en el espacio",
  //         artist: "Umberto Boccioni",
  //         year: "1913",
  //         description:
  //           "Una escultura que parece fundirse con el aire mientras corre.",
  //         image: "/assets/movements/futurism_continuity.png",
  //       },
  //       {
  //         title: "Dinamismo de un perro con correa",
  //         artist: "Giacomo Balla",
  //         year: "1912",
  //         description:
  //           "La representación visual pura de la velocidad y el ritmo.",
  //         image: "/assets/movements/futurism_balla.png",
  //       },
  //     ],
  //     analysis: `### El Culto a la Velocidad
  // El Futurismo nos enseñó que el **movimiento es belleza**. Fue el primer movimiento que se enamoró de la tecnología.

  // **El Sentir del Arte:**
  // Es ruidoso, eléctrico y agresivo. Nos hace sentir el vértigo de la modernidad. Sin el Futurismo, no existiría el concepto de **diseño dinámico**, las animaciones digitales ni la estética de la ciencia ficción moderna que tanto nos fascinan.`,
  //     references: [
  //       "Marinetti, F. T. (1909). Manifiesto del Futurismo. Le Figaro.",
  //       "Tisdall, C., & Bozzolla, A. (1977). El Futurismo. Destino.",
  //       "Estorick Collection of Modern Italian Art. (2023). Futurism and the Machine.",
  //     ],
  //   },
  //   {
  //     name: "Bauhaus",
  //     year: "1919 - 1933",
  //     historicalPeriod:
  //       "Post-Guerra Mundial. Surgimiento de la escuela de diseño más influyente de la historia.",
  //     shortSummary:
  //       "La forma sigue a la función. El origen del diseño industrial y moderno.",
  //     thumbnail: "/assets/movements/bauhaus_building.png",
  //     heroImage: "/assets/movements/bauhaus_chair.png",
  //     tags: ["Funcionalismo", "Geometría", "Mecanización"],
  //     characteristics: [
  //       {
  //         title: "Funcionalismo",
  //         description:
  //           "La utilidad del objeto define su forma estética. Menos es más.",
  //       },
  //       {
  //         title: "Geometría Pura",
  //         description:
  //           "Uso de formas básicas (círculo, cuadrado, triángulo) y colores primarios.",
  //       },
  //       {
  //         title: "Tipografía Sans-Serif",
  //         description:
  //           "Creación de fuentes universales, legibles y despojadas de adornos.",
  //       },
  //       {
  //         title: "Unión Arte-Técnica",
  //         description:
  //           "El artista debe ser también un artesano y un técnico industrial.",
  //       },
  //     ],
  //     socialContext:
  //       "Nació en la Alemania de entreguerras con el objetivo de reconciliar la creatividad individual con la producción industrial masiva para mejorar la calidad de vida.",
  //     referents: [
  //       {
  //         name: "Walter Gropius",
  //         role: "Arquitecto y fundador de la escuela Bauhaus.",
  //         image: "",
  //       },
  //       {
  //         name: "Wassily Kandinsky",
  //         role: "Teórico del color y pionero de la abstracción lírica.",
  //         image: "",
  //       },
  //       {
  //         name: "Herbert Bayer",
  //         role: "Maestro de la tipografía y el diseño gráfico moderno.",
  //         image: "",
  //       },
  //     ],
  //     masterpieces: [
  //       {
  //         title: "Silla Wassily",
  //         artist: "Marcel Breuer",
  //         year: "1925",
  //         description:
  //           "Icono del diseño industrial: tubos de acero y cuero en armonía geométrica.",
  //         image: "/assets/movements/bauhaus_chair.png",
  //       },
  //       {
  //         title: "Edificio de la Bauhaus en Dessau",
  //         artist: "Walter Gropius",
  //         year: "1926",
  //         description: "El manifiesto arquitectónico de la modernidad.",
  //         image: "/assets/movements/bauhaus_building.png",
  //       },
  //     ],
  //     analysis: `### La Belleza de lo Útil
  // La Bauhaus no solo cambió el arte, cambió nuestra **relación con los objetos**.

  // **El Sentir del Arte:**
  // Sentimos claridad, honestidad y eficiencia. Es un arte que respeta el material y la función. Sin la Bauhaus, no existiría el concepto de **UX (User Experience)** ni las interfaces limpias de los dispositivos que usamos hoy.`,
  //     references: [
  //       "Droste, M. (2019). Bauhaus. Taschen.",
  //       "Whitford, F. (1984). Bauhaus. Thames & Hudson.",
  //       "Bauhaus-Archiv Berlin. (2023). 100 Years of Bauhaus.",
  //     ],
  //   },
  {
    name: "Surrealismo",
    year: "1924 - 1966",
    historicalPeriod:
      "Influencia de las teorías del psicoanálisis de Freud tras la Primera Guerra Mundial.",
    shortSummary: "El mundo de los sueños, el subconsciente y lo irracional.",
    thumbnail: "/assets/movements/surrealism_magritte.png",
    heroImage: "/assets/movements/surrealism_clocks.png",
    tags: ["Sueño", "Subconsciente", "Azar"],
    characteristics: [
      {
        title: "Automatismo Psíquico",
        description:
          "Crear sin el control de la razón, dejando fluir el subconsciente.",
      },
      {
        title: "Imágenes Oníricas",
        description:
          "Representación de objetos reales en contextos imposibles o mágicos.",
      },
      {
        title: "Metamorfosis",
        description:
          "Objetos que se funden o transforman en otros, desafiando la lógica física.",
      },
      {
        title: "Yuxtaposición",
        description:
          "Unión de elementos que no tienen relación aparente para crear extrañeza.",
      },
    ],
    socialContext:
      "Como respuesta a la desolación de las guerras, el surrealismo buscó una 'realidad superior' en los sueños y el subconsciente, influenciado fuertemente por el psicoanálisis.",
    referents: [
      {
        name: "Salvador Dalí",
        role: "El genio del método paranoico-crítico. 'Yo soy el surrealismo'.",
        image: "",
      },
      {
        name: "René Magritte",
        role: "Filósofo de la imagen que cuestionó la realidad.",
        image: "",
      },
      {
        name: "Joan Miró",
        role: "Poeta de la forma pura y el simbolismo infantil.",
        image: "",
      },
    ],
    masterpieces: [
      {
        title: "La Persistencia de la Memoria",
        artist: "Salvador Dalí",
        year: "1931",
        description:
          "La relatividad del tiempo a través de relojes que se derriten al sol.",
        image: "/assets/movements/surrealism_clocks.png",
      },
      {
        title: "El Hijo del Hombre",
        artist: "René Magritte",
        year: "1964",
        description:
          "Una reflexión sobre lo que está oculto detrás de lo que vemos.",
        image: "/assets/movements/surrealism_magritte.png",
      },
    ],
    analysis: `### La Lógica de lo Absurdo
El Surrealismo rompió la última frontera del arte: **la realidad**. Dalí nos enseñó que "la inteligencia sin ambición es un pájaro sin alas".

**El Sentir del Arte:**
Es desconcertante y fascinante. Nos invita a jugar con lo imposible. La obra de los **relojes blandos** es un recordatorio de que el tiempo es subjetivo y emocional. Todo el **diseño publicitario creativo** y el *storytelling* visual moderno le deben su libertad al Surrealismo.`,
    references: [
      "Breton, A. (1924). Manifiesto del Surrealismo.",
      "Ades, D. (1982). Dalí. Thames & Hudson.",
      "Dalí Museum. (2024). The Persistence of Memory: An Analysis.",
    ],
  },
  //   {
  //     name: "Pop Art",
  //     year: "1950 - 1970",
  //     historicalPeriod:
  //       "Guerra Fría y auge del consumo de masas. Cultura de la celebridad e ironía.",
  //     shortSummary:
  //       "Cultura de masas, colores vibrantes y la ironía de lo cotidiano.",
  //     thumbnail: "/assets/movements/popart_soup.png",
  //     heroImage: "/assets/movements/popart_whaam.png",
  //     tags: ["Masas", "Ironía", "Color"],
  //     characteristics: [
  //       {
  //         title: "Apropiacionismo",
  //         description:
  //           "Uso de imágenes de la publicidad, cómics y celebridades como material artístico.",
  //       },
  //       {
  //         title: "Colores Planos y Saturados",
  //         description:
  //           "Paletas brillantes que imitan las técnicas de impresión comercial.",
  //       },
  //       {
  //         title: "Repetición e Ironía",
  //         description: "Producción de obras en serie para criticar o celebrar la sociedad de consumo.",
  //       },
  //       {
  //         title: "Desmitificación",
  //         description:
  //           "Bajar el arte de los museos y llevarlo a la sopa en lata y la caja de jabón.",
  //       },
  //     ],
  //     socialContext:
  //       "Reflejó la efervescencia de la cultura de posguerra, el auge de los medios de comunicación masivos y la democratización del consumo.",
  //     referents: [
  //       {
  //         name: "Andy Warhol",
  //         role: "Icono máximo del pop. El artista como empresa.",
  //         image: "",
  //       },
  //       {
  //         name: "Roy Lichtenstein",
  //         role: "Transformó el cómic en pintura de gran formato.",
  //         image: "",
  //       },
  //       {
  //         name: "Richard Hamilton",
  //         role: "Pionero británico que definió el estilo pop.",
  //         image: "",
  //       },
  //     ],
  //     masterpieces: [
  //       {
  //         title: "Latas de Sopa Campbell's",
  //         artist: "Andy Warhol",
  //         year: "1962",
  //         description:
  //           "La elevación de un objeto de supermercado a icono cultural.",
  //         image: "/assets/movements/popart_soup.png",
  //       },
  //       {
  //         title: "Whaam!",
  //         artist: "Roy Lichtenstein",
  //         year: "1963",
  //         description:
  //           "La estética del cómic aplicada a la gran pintura de historia.",
  //         image: "/assets/movements/popart_whaam.png",
  //       },
  //     ],
  //     analysis: `### El Espejo del Consumo
  // El Pop Art nos dice que **todo puede ser arte** si se mira con la lente adecuada.

  // **El Sentir del Arte:**
  // Es vibrante, irónico y a veces cínico. Nos hace cuestionar qué valoramos y por qué. En diseño digital, su legado vive en la estética de las redes sociales y en la fuerza de los iconos visuales que dominan nuestra comunicación diaria.`,
  //     references: [
  //       "Osterwold, T. (2003). Pop Art. Taschen.",
  //       "Livingstone, M. (1990). El Pop Art. Destino.",
  //       "Tate Modern. (2024). Pop Art: A global history.",
  //     ],
  //   },
  {
    name: "Minimalismo",
    year: "1960 - 1980",
    historicalPeriod:
      "La década de 1960 en Nueva York, marcada por la consolidación del diseño industrial de consumo y la reacción contra la carga emocional.",
    shortSummary:
      "La máxima reducción formal de los objetos: honestidad estructural y rechazo de la narrativa.",
    thumbnail: "/assets/movements/minimalism_judd.png",
    heroImage: "/assets/movements/minimalism_judd.png",
    tags: ["Simplicidad", "Estructura Pura", "Literalidad"],
    characteristics: [
      {
        title: "Ausencia Narrativa",
        description:
          "Eliminación de la decoración, emoción personal, anécdotas o ilusión de representación física.",
      },
      {
        title: "Materiales Industriales",
        description:
          "Construcción utilizando placas de acero, aluminio anodizado, plexiglás y tubos de neón.",
      },
      {
        title: "Geometría Modular",
        description:
          "Disposición matemática y repetitiva de formas cúbicas idénticas en el espacio.",
      },
    ],
    socialContext:
      "Nació como una firme declaración de honestidad matérica ante los excesos del expresionismo abstracto y el comercialismo visual saturado.",
    referents: [
      {
        name: "Donald Judd",
        role: "Líder teórico que acuñó el término 'objetos específicos' montados en muros.",
        image: "",
      },
      {
        name: "Dan Flavin",
        role: "Escultor que utilizó tubos de luz fluorescente industrial para bañar los muros.",
        image: "",
      },
      {
        name: "Frank Stella",
        role: "Pintor geométrico célebre por declarar: 'Lo que ves es lo que ves'.",
        image: "",
      },
    ],
    masterpieces: [
      {
        title: "Sin Título (Stack)",
        artist: "Donald Judd",
        year: "1969",
        description:
          "Una serie de 10 cajas idénticas de cobre y plexiglás verde colocadas verticalmente con precisión.",
        image: "/assets/movements/minimalism_judd.png",
      },
    ],
    analysis: `### El Poder de la Simplicidad
El Minimalismo demostró que el diseño despojado de ornamento tiene una fuerza física insuperable que domina el espacio circundante.

**El Sentir del Arte:**
Es limpio, sobrio, honesto y ordenado. Aporta una calma visual inmensa. Es el antepasado directo de la **estética corporativa premium** (como Apple), el diseño de interfaces minimalistas (UI) y las viviendas escandinavas.`,
    references: [
      "Judd, D. (1965). Specific Objects. Arts Yearbook.",
      "Meyer, J. (2000). Minimalism. Phaidon Press.",
      "Bataille, G. (1995). The Lived Space of Minimalism. Artforum.",
    ],
  },
  //   {
  //     name: "Postmodernismo",
  //     year: "1970 - Actualidad",
  //     historicalPeriod:
  //       "Era de la información, globalización y el desencanto de los grandes relatos.",
  //     shortSummary:
  //       "Ironía, eclecticismo y el fin de la distinción entre alta y baja cultura.",
  //     thumbnail: "/assets/movements/postmodern_raygun.png",
  //     heroImage: "/assets/movements/postmodern_raygun.png",
  //     tags: ["Eclecticismo", "Digital", "Simulacro"],
  //     characteristics: [
  //       {
  //         title: "Pastiche y Remix",
  //         description:
  //           "Mezcla de estilos de differentes épocas sin una jerarquía clara.",
  //       },
  //       {
  //         title: "Ironía y Doble Sentido",
  //         description: "Cuestionamiento de la originalidad y el papel del autor.",
  //       },
  //       {
  //         title: "Cultura Digital",
  //         description:
  //           "Transición de los soportes físicos a la inmaterialidad del píxel.",
  //       },
  //       {
  //         title: "Deconstrucción",
  //         description:
  //           "Fragmentación de la forma y rechazo a la estructura lineal tradicional.",
  //       },
  //     ],
  //     socialContext:
  //       "La caída de los grandes relatos (como el Muro de Berlín) y la revolución digital crearon una sociedad fragmentada que cuestiona toda verdad absoluta y celebra el remix y la diversidad.",
  //     referents: [
  //       {
  //         name: "David Carson",
  //         role: "Diseñador que rompió todas las reglas de la tipografía.",
  //         image: "",
  //       },
  //       {
  //         name: "Zaha Hadid",
  //         role: "Arquitecta que llevó la deconstrucción a la forma habitable.",
  //         image: "",
  //       },
  //       {
  //         name: "Jeff Koons",
  //         role: "Artista que juega con el kitsch y el consumo de lujo.",
  //         image: "",
  //       },
  //     ],
  //     masterpieces: [
  //       {
  //         title: "Museo Guggenheim Bilbao",
  //         artist: "Frank Gehry",
  //         year: "1997",
  //         description:
  //           "La escultura habitable que define la era de la complejidad digital.",
  //         image: "/assets/movements/postmodern_guggenheim.png",
  //       },
  //       {
  //         title: "Ray Gun Magazine",
  //         artist: "David Carson",
  //         year: "1992",
  //         description:
  //           "El caos tipográfico elevado a la categoría de arte visual.",
  //         image: "/assets/movements/postmodern_raygun.png",
  //       },
  //     ],
  //     analysis: `### El Diseño en la Era del Píxel
  // El Postmodernismo es el **"todo vale"** consciente. Es el reconocimiento de que vivimos en un mundo de copias de copias (simulacros).

  // **El Sentir del Arte:**
  // Es complejo, ruidoso y ecléctico. Refleja la hiperconectividad de nuestra vida actual. En el diseño de interfaces (UI) y la experiencia de usuario (UX), el postmodernismo se manifiesta en el rechazo al minimalismo extremo y en la búsqueda de **experiencias emocionales personalizadas** y disruptivas.`,
  //     references: [
  //       "Foster, H. (1985). La Posmodernidad. Kairós.",
  //       "Meggs, P. B. (2011). Historia del Diseño Gráfico. Wiley.",
  //       "Jencks, C. (1977). El lenguaje de la arquitectura posmoderna. Gustavo Gili.",
  //     ],
  //   },
];

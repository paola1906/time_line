<template>
  <div class="timeline-ova">
    <!-- HERO HEADER CINEMÁTICO DEL MUSEO DE LA ESTÉTICA -->
    <section class="ova-header">
      <div class="header-content">
        <h1 class="ova-title">Museo de la Estética</h1>
        <p class="ova-subtitle">Cronología del arte y el diseño industrial.</p>
      </div>
      <div class="header-image-overlay">
        <img
          src="/assets/movements/renaissance_school_athens.png"
          class="header-bg"
          alt="Escuela de Atenas"
        />
      </div>
    </section>

    <!-- CRONOLOGÍA VERTICAL PREMIUM SIN CARGAS NI SELECCIONES -->
    <main class="timeline-exposition-container">
      <NxRichTimeline
        mode="vertical"
        :alternate="true"
        line-color="primary"
        class="main-rich-timeline"
      >
        <NxRichTimelineItem
          v-for="(movement, index) in movements"
          :key="movement.name"
          :title="movement.name"
          :time="movement.year"
          :description="movement.shortSummary"
          :image="movement.thumbnail"
          :item-index="index"
          :active="true"
          :color="getMovementColor(movement)"
          :tags="movement.tags"
          card-size="lg"
          image-size="md"
          time-position="bottom"
          action-label="Explorar Era"
          @action="openDetail(movement)"
        >
        </NxRichTimelineItem>
      </NxRichTimeline>
    </main>

    <!-- MODAL DE DETALLE DIALOG CON ANÁLISIS FORENSE E IMÁGENES -->
    <NxDialog
      v-model="isDetailOpen"
      :title="selectedMovement?.name"
      size="xl"
      class="detail-dialog"
    >
      <div v-if="selectedMovement" class="movement-detail">
        <!-- Hero del detalle -->
        <div class="detail-hero">
          <img
            :src="selectedMovement.heroImage"
            :alt="selectedMovement.name"
            class="hero-img"
          />
          <div class="hero-overlay">
            <h2 class="detail-name">{{ selectedMovement.name }}</h2>
            <p class="detail-years">{{ selectedMovement.year }}</p>
          </div>
        </div>

        <!-- Cuerpo del detalle -->
        <div class="detail-body">
          <div class="detail-grid">
            <!-- Columna principal (Análisis y Obras) -->
            <div class="detail-main-column">
              <section class="detail-section">
                <h3 class="section-title">Análisis</h3>
                <NxMarkdownViewer :content="selectedMovement.analysis" />
              </section>

              <section class="detail-section">
                <h3 class="section-title">Contexto Social</h3>
                <p class="section-text">{{ selectedMovement.socialContext }}</p>
              </section>

              <section
                class="detail-section"
                v-if="selectedMovement.masterpieces?.length"
              >
                <h3 class="section-title">Obras Maestras</h3>
                <div class="masterpieces-grid">
                  <div
                    v-for="work in selectedMovement.masterpieces"
                    :key="work.title"
                    class="work-card"
                  >
                    <img :src="work.image" :alt="work.title" />
                    <div class="work-info">
                      <h4>{{ work.title }}</h4>
                      <span class="work-artist"
                        >{{ work.artist }} ({{ work.year }})</span
                      >
                      <p>{{ work.description }}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <!-- Columna lateral (Especificaciones y Autores) -->
            <div class="detail-sidebar-column">
              <section
                class="detail-section"
                v-if="selectedMovement.characteristics?.length"
              >
                <h3 class="section-title">Características</h3>
                <div class="characteristics-list">
                  <div
                    v-for="char in selectedMovement.characteristics"
                    :key="char.title"
                    class="char-tag"
                  >
                    <strong>{{ char.title }}:</strong> {{ char.description }}
                  </div>
                </div>
              </section>

              <section
                class="detail-section"
                v-if="selectedMovement.referents?.length"
              >
                <h3 class="section-title">Referentes y Maestros</h3>
                <div class="referents-list">
                  <div
                    v-for="ref in selectedMovement.referents"
                    :key="ref.name"
                    class="referent-card"
                  >
                    <NxAvatar :name="ref.name" size="sm" />
                    <div class="referent-info">
                      <strong>{{ ref.name }}</strong>
                      <span>{{ ref.role }}</span>
                    </div>
                  </div>
                </div>
              </section>

              <section
                class="detail-section"
                v-if="selectedMovement.references?.length"
              >
                <h3 class="section-title">Referencias</h3>
                <ul class="references-list">
                  <li v-for="link in selectedMovement.references" :key="link">
                    {{ link }}
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </NxDialog>

    <!-- SECCIÓN DE FOOTER INSTITUCIONAL / FAMILIAR -->
    <footer class="ova-footer">
      <div class="footer-divider"></div>
      <div class="footer-content">
        <div class="footer-brand">
          <span class="footer-logo">🏛️</span>
          <span class="footer-title">Museo de la Estética</span>
        </div>
        <p class="footer-author">
          Creado por <span class="highlight-author">Paola Yurani Rodríguez</span>
        </p>
        <p class="footer-nature">
          Un viaje cronológico a través de la evolución de la forma y la función. Desarrollado con dedicación como un <span class="highlight-nature">Proyecto Familiar</span>.
        </p>
        <div class="footer-copyright">
          <span>&copy; 2026 &bull; Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  NxRichTimeline,
  NxRichTimelineItem,
  NxDialog,
  NxAvatar,
  NxMarkdownViewer,
} from "@nexus/ui";
import { Movement } from "./components/time-line/TimelineOvaView.data";

// Controladores del estado del Dialog
const isDetailOpen = ref(false);
const selectedMovement = ref<any>(null);

const openDetail = (movement: any) => {
  selectedMovement.value = movement;
  isDetailOpen.value = true;
};

// Colores institucionales de Nexus UI según el periodo histórico
const getMovementColor = (movement: any) => {
  const period = movement.historicalPeriod.toLowerCase();
  if (period.includes("prehistórico")) return "zinc";
  if (period.includes("renacimiento")) return "indigo";
  if (period.includes("barroco")) return "danger";
  if (period.includes("ilustración") || period.includes("neoclasicismo"))
    return "info";
  if (
    period.includes("revolución industrial") ||
    period.includes("impresionismo")
  )
    return "warning";
  if (period.includes("modernidad") || period.includes("bauhaus"))
    return "success";
  if (period.includes("contemporánea") || period.includes("pop art"))
    return "primary";
  return "primary";
};

const movements: Movement[] = [
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
];
</script>

<style>
/* Estilos globales de tipografía e importaciones */
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap");

body {
  font-family: "Outfit", sans-serif;
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.timeline-ova {
  min-height: 100vh;
  background-color: var(--nx-slate-950, #09090b);
  background-image:
    radial-gradient(
      circle at 0% 0%,
      rgba(99, 102, 241, 0.12) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(168, 85, 247, 0.12) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 50%,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  color: var(--nx-slate-50, #f4f4f5);
  position: relative;
  overflow-x: hidden;
  padding: 0 0 80px 0;
}

.ova-header {
  height: 45vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.ova-header .header-content {
  z-index: 2;
  padding: 0 20px;
}

.ova-header .ova-title {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ffffff 40%, #c084fc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.03em;
}

@media (max-width: 768px) {
  .ova-header .ova-title {
    font-size: 2.8rem;
  }
}

.ova-header .ova-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
}

@media (max-width: 768px) {
  .ova-header .ova-subtitle {
    font-size: 1rem;
  }
}

.ova-header .header-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.ova-header .header-image-overlay::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(9, 9, 11, 0.2) 0%,
    rgba(9, 9, 11, 0.95) 100%
  );
}

.ova-header img.header-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.45;
  filter: blur(2px) grayscale(20%);
}

.timeline-exposition-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

@media (max-width: 768px) {
  .timeline-exposition-container {
    padding: 2rem 1rem;
  }
}

.movement-meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.timeline-card-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  justify-content: flex-end;
}

.timeline-card-content-clickable {
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.detail-dialog :deep(.nx-dialog__window) {
  background: #0a0a0c !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8) !important;
  border-radius: 20px !important;
  overflow: hidden;
}

.movement-detail .detail-hero {
  height: 320px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.movement-detail .detail-hero img.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.movement-detail .detail-hero .hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem 2rem;
  background: linear-gradient(
    0deg,
    rgba(10, 10, 12, 1) 0%,
    rgba(10, 10, 12, 0.4) 60%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.movement-detail .detail-hero .detail-name {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.movement-detail .detail-hero .detail-years {
  font-size: 1.1rem;
  color: var(--nx-primary-300, #a5b4fc);
  font-weight: 600;
}

.detail-body {
  padding: 0 1rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

@media (max-width: 1024px) {
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.detail-section {
  margin-bottom: 2.5rem;
}

.detail-section .section-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--nx-primary-400, #818cf8);
  margin-bottom: 1.25rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}

.detail-section .section-text {
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.masterpieces-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.masterpieces-grid .work-card {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;
}

.masterpieces-grid .work-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
}

.masterpieces-grid .work-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.masterpieces-grid .work-card .work-info {
  padding: 1.25rem;
}

.masterpieces-grid .work-card .work-info h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
}

.masterpieces-grid .work-card .work-info .work-artist {
  display: block;
  font-size: 0.82rem;
  color: var(--nx-primary-300, #a5b4fc);
  margin-bottom: 0.75rem;
}

.masterpieces-grid .work-card .work-info p {
  margin: 0;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
}

.characteristics-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.characteristics-list .char-tag {
  background: rgba(99, 102, 241, 0.08);
  padding: 0.85rem 1rem;
  border-radius: 8px;
  font-size: 0.88rem;
  border-left: 3px solid var(--nx-primary-500, #6366f1);
  line-height: 1.5;
}

.characteristics-list .char-tag strong {
  color: var(--nx-primary-300, #a5b4fc);
  margin-right: 0.5rem;
  display: inline-block;
}

.referents-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.referents-list .referent-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 50px 12px 12px 50px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: all 0.3s ease;
}

.referents-list .referent-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
}

.referents-list .referent-card .referent-info {
  display: flex;
  flex-direction: column;
}

.referents-list .referent-card .referent-info strong {
  font-size: 0.95rem;
  color: #ffffff;
}

.referents-list .referent-card .referent-info span {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

.references-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.references-list li {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.75rem;
  padding-left: 1.25rem;
  position: relative;
  line-height: 1.5;
}

.references-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--nx-primary-500, #6366f1);
  font-size: 1.2rem;
  top: -2px;
}

/* Estilos para el Footer Premium */
.ova-footer {
  margin-top: 6rem;
  padding: 4rem 2rem 3rem;
  background: linear-gradient(to top, rgba(9, 9, 11, 0.95), rgba(9, 9, 11, 0.4));
  backdrop-filter: blur(12px);
  position: relative;
  z-index: 10;
  text-align: center;
}

.footer-divider {
  width: 150px;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--nx-primary-500, #6366f1), transparent);
  margin: 0 auto 2.5rem;
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

.footer-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.footer-logo {
  font-size: 1.5rem;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-author {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.75rem;
}

.highlight-author {
  color: var(--nx-primary-400, #818cf8);
  font-weight: 600;
}

.footer-nature {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.52);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.highlight-nature {
  color: #10b981; /* Esmeralda para representar vida, unión y calor familiar */
  font-weight: 500;
}

.footer-copyright {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 0.05em;
}
</style>

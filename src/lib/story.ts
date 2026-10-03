export type StoryPage = {
  id: string;
  kicker: string;
  title: string;
  text: string;
  src: string;
  alt: string;
};

export type Crayon = {
  id: string;
  name: string;
  hex: string;
};

export const STORY_TITLE = "Los soldaditos de mi cuerpo";

export const PAGES: StoryPage[] = [
  {
    id: "portada",
    kicker: "Portada",
    title: "Los soldaditos de mi cuerpo",
    text: "La doctora Esperanza abre su cuaderno y sonríe. Trae su bata azul, su listón rosa y un secreto saludable: dentro de nuestro cuerpo viven soldaditos valientes, listos para cuidar el castillo que somos.",
    src: "/pages/01-portada.png",
    alt: "La doctora Esperanza saluda con un libro, rodeada de soldaditos, un castillo y una canasta de frutas.",
  },
  {
    id: "castillo",
    kicker: "Página 1",
    title: "Un castillo maravilloso",
    text: "Nuestro cuerpo es como un castillo maravilloso y fuerte. Para mantenerlo feliz y lleno de energía, jugamos, comemos frutas de colores y dormimos bien por las noches. ¡Así cuidamos nuestro tesoro más grande!",
    src: "/pages/02-castillo.png",
    alt: "Esperanza señala un castillo. Unos niños juegan, hay frutas y alguien duerme bajo la luna.",
  },
  {
    id: "virus",
    kicker: "Página 2",
    title: "Unos intrusos diminutos",
    text: "A veces, en el aire o en las cosas que tocamos, viven unos pequeños intrusos llamados virus. Son tan diminutos que no podemos verlos a simple vista, pero a algunos les gusta entrar a nuestro cuerpo a causar travesuras.",
    src: "/pages/03-virus.png",
    alt: "Esperanza mira con una lupa grande a virus pequeñitos y juguetones.",
  },
  {
    id: "vph",
    kicker: "Página 3",
    title: "El virus que se esconde",
    text: "Hay un virus travieso llamado VPH. A este virus le gusta esconderse muy bien y, si entra al cuerpo, con el paso de los años puede hacer que algunas de nuestras células se enfermen o se sientan muy cansadas.",
    src: "/pages/04-vph.png",
    alt: "Esperanza acompaña a una célula dormida mientras un virus pequeño se asoma detrás.",
  },
  {
    id: "entrenamiento",
    kicker: "Página 4",
    title: "Un superpoder llamado vacuna",
    text: "¡Pero no hay nada que temer! Los científicos, que son como magos de la salud, crearon un superpoder para defendernos. Se llama la vacuna, y es un entrenamiento especial que se les da a los soldaditos que nos defienden en nuestro cuerpo.",
    src: "/pages/05-entrenamiento.png",
    alt: "Esperanza entrena a unos soldaditos con escudos. Detrás, científicos con gorros de mago sonríen.",
  },
  {
    id: "escudo",
    kicker: "Página 5",
    title: "Soldaditos en el brazo",
    text: "Cuando somos niños, recibimos esos pequeños soldaditos en el brazo. Al principio puede asustar un poquito, pero gracias a ellos, nuestro cuerpo aprende a identificar al virus VPH de inmediato y construye un escudo invisible para que nunca nos haga daño.",
    src: "/pages/06-escudo.png",
    alt: "Esperanza pone una vacuna en el brazo de un niño. Su familia está cerca y unos soldaditos forman un escudo.",
  },
  {
    id: "ninas-ninos",
    kicker: "Página 6",
    title: "Niñas y niños, de 9 a 17",
    text: "La doctora Esperanza explica que tanto niñas como niños podemos vacunarnos gratis si estamos entre los 9 y los 17 años. También cuenta que la vacuna ayuda a prevenir una enfermedad llamada cáncer.",
    src: "/pages/07-ninas-ninos.png",
    alt: "Esperanza está entre una niña y un niño con curitas en forma de corazón y mochilas.",
  },
  {
    id: "aventura",
    kicker: "Página 7",
    title: "El superpoder más grande",
    text: "Ir al médico a revisarnos y tener nuestras vacunas al día es la mejor forma de crecer fuertes, sanos y listos para cualquier aventura. ¡Cuidar de nosotros es el superpoder más grande!",
    src: "/pages/08-aventura.png",
    alt: "Esperanza se despide desde la puerta. Dos niños corren al parque con soldaditos en los hombros.",
  },
];

export const CRAYONS: Crayon[] = [
  { id: "rosa", name: "Rosa listón", hex: "#E25686" },
  { id: "azul", name: "Azul bata", hex: "#2C6BBE" },
  { id: "celeste", name: "Celeste", hex: "#79C7E8" },
  { id: "verde", name: "Verde", hex: "#2F8F55" },
  { id: "lima", name: "Lima", hex: "#A8C95A" },
  { id: "amarillo", name: "Amarillo", hex: "#F0C14A" },
  { id: "naranja", name: "Naranja", hex: "#EF8A38" },
  { id: "rojo", name: "Rojo", hex: "#D24B4B" },
  { id: "morado", name: "Morado", hex: "#7B61C9" },
  { id: "cafe", name: "Café", hex: "#8A5A38" },
  { id: "durazno", name: "Durazno", hex: "#F3C5A4" },
  { id: "tinta", name: "Tinta", hex: "#243044" },
];

export const STORAGE_KEY = "soldaditos-esperanza-v1";

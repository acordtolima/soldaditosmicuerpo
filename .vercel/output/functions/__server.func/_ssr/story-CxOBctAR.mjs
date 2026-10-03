//#region node_modules/.nitro/vite/services/ssr/assets/story-CxOBctAR.js
function page(folder, n, id, title, text, alt) {
	return {
		id,
		kicker: `Página ${n}`,
		title,
		text,
		src: `/pages/${folder}/${String(n).padStart(2, "0")}.png`,
		alt
	};
}
var STORIES = [
	{
		id: "soldaditos",
		title: "Los soldaditos de mi cuerpo",
		blurb: "La doctora Esperanza cuenta cómo la vacuna entrena a los soldaditos que nos cuidan.",
		pages: [
			{
				id: "portada",
				kicker: "Portada",
				title: "Los soldaditos de mi cuerpo",
				text: "La doctora Esperanza abre su cuaderno y sonríe. Trae su bata azul, su listón rosa y un secreto saludable: dentro de nuestro cuerpo viven soldaditos valientes, listos para cuidar el castillo que somos.",
				src: "/pages/01-portada.png",
				alt: "La doctora Esperanza saluda con un libro, rodeada de soldaditos, un castillo y una canasta de frutas."
			},
			{
				id: "castillo",
				kicker: "Página 1",
				title: "Un castillo maravilloso",
				text: "Nuestro cuerpo es como un castillo maravilloso y fuerte. Para mantenerlo feliz y lleno de energía, jugamos, comemos frutas de colores y dormimos bien por las noches. ¡Así cuidamos nuestro tesoro más grande!",
				src: "/pages/02-castillo.png",
				alt: "Esperanza señala un castillo. Unos niños juegan, hay frutas y alguien duerme bajo la luna."
			},
			{
				id: "virus",
				kicker: "Página 2",
				title: "Unos intrusos diminutos",
				text: "A veces, en el aire o en las cosas que tocamos, viven unos pequeños intrusos llamados virus. Son tan diminutos que no podemos verlos a simple vista, pero a algunos les gusta entrar a nuestro cuerpo a causar travesuras.",
				src: "/pages/03-virus.png",
				alt: "Esperanza mira con una lupa grande a virus pequeñitos y juguetones."
			},
			{
				id: "vph",
				kicker: "Página 3",
				title: "El virus que se esconde",
				text: "Hay un virus travieso llamado VPH. A este virus le gusta esconderse muy bien y, si entra al cuerpo, con el paso de los años puede hacer que algunas de nuestras células se enfermen o se sientan muy cansadas.",
				src: "/pages/04-vph.png",
				alt: "Esperanza acompaña a una célula dormida mientras un virus pequeño se asoma detrás."
			},
			{
				id: "entrenamiento",
				kicker: "Página 4",
				title: "Un superpoder llamado vacuna",
				text: "¡Pero no hay nada que temer! Los científicos, que son como magos de la salud, crearon un superpoder para defendernos. Se llama la vacuna, y es un entrenamiento especial que se les da a los soldaditos que nos defienden en nuestro cuerpo.",
				src: "/pages/05-entrenamiento.png",
				alt: "Esperanza entrena a unos soldaditos con escudos. Detrás, científicos con gorros de mago sonríen."
			},
			{
				id: "escudo",
				kicker: "Página 5",
				title: "Soldaditos en el brazo",
				text: "Cuando somos niños, recibimos esos pequeños soldaditos en el brazo. Al principio puede asustar un poquito, pero gracias a ellos, nuestro cuerpo aprende a identificar al virus VPH de inmediato y construye un escudo invisible para que nunca nos haga daño.",
				src: "/pages/06-escudo.png",
				alt: "Esperanza pone una vacuna en el brazo de un niño. Su familia está cerca y unos soldaditos forman un escudo."
			},
			{
				id: "ninas-ninos",
				kicker: "Página 6",
				title: "Niñas y niños, de 9 a 17",
				text: "La doctora Esperanza explica que tanto niñas como niños podemos vacunarnos gratis si estamos entre los 9 y los 17 años. También cuenta que la vacuna ayuda a prevenir una enfermedad llamada cáncer.",
				src: "/pages/07-ninas-ninos.png",
				alt: "Esperanza está entre una niña y un niño con curitas en forma de corazón y mochilas."
			},
			{
				id: "aventura",
				kicker: "Página 7",
				title: "El superpoder más grande",
				text: "Ir al médico a revisarnos y tener nuestras vacunas al día es la mejor forma de crecer fuertes, sanos y listos para cualquier aventura. ¡Cuidar de nosotros es el superpoder más grande!",
				src: "/pages/08-aventura.png",
				alt: "Esperanza se despide desde la puerta. Dos niños corren al parque con soldaditos en los hombros."
			}
		]
	},
	{
		id: "mariposas",
		title: "Mamá y el mapa de las mariposas",
		blurb: "Sofía descubre por qué las mujeres se conocen y se cuidan, con ayuda de la doctora Esperanza.",
		pages: [
			page("mariposas", 1, "manana", "Una mañana distinta", "Una mañana Sofía se despertó más temprano de lo acostumbrado y vio algo muy raro. Su madre estaba en el baño, frente a un espejo grande, mirándose con mucha atención. Parecía que estaba dibujando figuras.", "Sofía, en pijama, mira desde la puerta del baño a su mamá frente al espejo, con una mariposa de papel."),
			page("mariposas", 2, "mapa", "El mapa de las mariposas", "—¿Qué haces, mamá? —preguntó Sofía con los ojos muy abiertos—. ¿Estás preparando un dibujo? —Algo así, mi amor —dijo su madre con voz dulce—. Estoy dibujando mi mapa de las mariposas. ¿Sabes? Todas las mujeres tenemos una linda mariposa en el pecho.", "Mamá arrodillada le muestra a Sofía el dibujo de una mariposa."),
			page("mariposas", 3, "crecer", "Cuando crezcan las alas", "—¿Yo también tengo una mariposa? ¡Nunca me he visto una, ni en mis libros! ¿Qué debo hacer para verla? —preguntó Sofía. Contestó su madre—: Cuando crezcas, las alas de tu mariposa también crecerán. Al cumplir los 20 años deberás empezar a hacer tu mapa de las mariposas.", "Sofía mira libros de mariposas junto a su mamá y un pastel de cumpleaños."),
			page("mariposas", 4, "guardianes", "Para conocerte", "—¿Y por qué hay que hacer un mapa de las mariposas? —preguntó Sofía. —Cada mujer es diferente —contestó mamá—. Tu mapa te ayudará a saber cómo eres. Además, si algo extraño ocurre, te podrás dar cuenta muy rápido para acudir a los guardianes de la salud.", "Mamá, Sofía y la doctora Esperanza miran un mapa con dos mariposas."),
			page("mariposas", 5, "dos-alas", "Dos alas iguales", "—¿Y cómo sé que el dibujo de mi mariposa me quedó bien? —preguntó Sofía. —Las mariposas tienen dos alas —dijo mamá—. Lo primero es revisar que tengan el mismo tamaño y que no estén rotas. También miramos que tengan la misma forma y estén pintadas del mismo color, tanto arriba como abajo.", "Mamá y Sofía comparan dos mariposas del mismo tamaño."),
			page("mariposas", 6, "detective", "Dedos de detective", "—Pero no es suficiente mirarlas —dijo mamá—. También hay que tocarlas. Con pose de bailarina y alma de detective, se debe tocar una a una con la yema de los dedos, haciendo pequeños círculos, como si estuvieras buscando algo escondido.", "Mamá hace una pose de bailarina y Sofía, con lupa de detective, dibuja círculos en una mariposa de papel."),
			page("mariposas", 7, "piedra", "Una piedrita escondida", "A veces, en las alas de la mariposa pueden aparecer pequeñas piedras ocultas que no deberían estar ahí. Si las dejamos crecer, pueden lastimarnos mucho. Por eso mamá usa sus dedos de detective una vez al mes, cuando el calendario se lo indica. Eso se lo enseñó la abuela, y hoy ella se lo enseña a Sofía.", "La abuela, mamá y Sofía miran un calendario y una mariposa con una piedrita bajo el ala."),
			page("mariposas", 8, "medicos", "Los médicos guardianes", "—¿Y si encuentras una piedra? —preguntó Sofía en un susurro. —Si encuentro algo extraño, voy de inmediato con los médicos guardianes —explicó su mamá, abrazándola fuerte—. Ellos son expertos en retirar esas piedras cuando todavía son muy pequeñitas, antes de que causen problemas.", "La doctora Esperanza recibe con un abrazo a mamá y a Sofía en el consultorio."),
			page("mariposas", 9, "final", "Cuidar es querer", "Sofía entendió perfectamente. El cuerpo de su mamá era un tesoro que debían proteger juntas. Al cumplir los 20 años, también tendría que hacer su pose de bailarina y activar sus dedos de detective para conocerse y cuidarse. El amor también se demuestra cuidando la salud de quienes más queremos. Y colorín colorado, este cuento se ha acabado.", "Mamá abraza a Sofía y la doctora Esperanza se despide entre mariposas.")
		]
	},
	{
		id: "mielito",
		title: "Mielito y el misterio de la nube gris",
		blurb: "El osito Mielito descubre por qué el cigarrillo no es un juguete, y la doctora Esperanza celebra su decisión.",
		pages: [
			page("mielito", 1, "valle", "El osito de la risa", "En el frondoso y alegre Valle Verde vivía un osito llamado Mielito, que tenía la risa más contagiosa de todo el bosque. A Mielito le encantaba correr entre los árboles, jugar al escondite con los conejos y trepar hasta las ramas más altas para recolectar miel.", "Mielito trepa un árbol junto a un panal, mientras los conejos juegan."),
			page("mielito", 2, "zorro", "La nube gris", "En el mismo bosque vivía el Señor Zorro, quien siempre llevaba en su boca un cilindro blanco que soltaba un humo gris, denso y con muy mal olor. Era un cigarrillo.", "El Señor Zorro, cansado, fuma un cigarrillo. Mielito lo observa entre los árboles."),
			page("mielito", 3, "pregunta", "¿Un juguete mágico?", "Un día, intrigado por el humo que parecía formar figuras en el aire, Mielito se acercó y le preguntó: —Señor Zorro, ¿qué es eso que echa tanto humo? ¿Es un juguete mágico?", "Mielito señala las formas de humo frente al Señor Zorro."),
			page("mielito", 4, "trampa", "Una trampa", "El Señor Zorro tosió fuerte —¡Cof, cof, cof!— antes de responder con una voz muy ronca: —No, Mielito. Esto es un cigarrillo, una trampa mortal que no te suelta. Parece inofensivo, pero dentro esconde un ejército de pequeños monstruos invisibles.", "El Señor Zorro tose y el cigarrillo parece una jaula. Mielito escucha preocupado."),
			page("mielito", 5, "secretos", "Los secretos oscuros", "Mielito abrió mucho los ojos, asustado. —¿Monstruos? ¿Qué tipo de monstruos? El Señor Zorro, cansado y sin fuerzas para caminar, se sentó en un tronco y le explicó los secretos oscuros del cigarrillo.", "Mielito abre mucho los ojos. El Señor Zorro, cansado, se sienta en un tronco."),
			page("mielito", 6, "monstruo", "El monstruo gris", "—Cada vez que alguien enciende un cigarrillo, aparece el monstruo gris. Entra a los pulmones, los vuelve grises, duros y sucios. Por eso ahora no puedo jugar sin perder el aire.", "Un monstruo gris de caricatura sopla hacia unos pulmones como globos. El zorro está sin aire y Mielito se preocupa."),
			page("mielito", 7, "nicotin", "El duendecillo Nicotín", "También está Nicotín, un duendecillo que entra al cuerpo, corre rápidamente al cerebro y le hace creer que es tu mejor amigo. Cuando ya has confiado en él, te traiciona y te hace sufrir.", "Un duende travieso corre hacia un cerebro de caricatura. Mielito mira de lado."),
			page("mielito", 8, "carcinotan", "Carcinotán", "Finalmente está Carcinotán, que destruye lentamente el cuerpo y hace que salgan tumores que duelen y pueden llevar a la muerte. Mielito miró el cigarrillo con miedo.", "Una nube oscura de caricatura está lejos. Mielito toma la pata del zorro, que se ve triste."),
			page("mielito", 9, "decision", "Yo no voy a fumar", "—¡Señor Zorro, yo no quiero enfermar! —dijo Mielito—. ¡Quiero poder jugar con mis amigos, correr en el bosque, trepar árboles y saltar! He decidido que cuando sea grande no voy a fumar. Y colorín colorado, ¡este cuento respirando sano se ha acabado!", "Mielito corre con sus amigos. La doctora Esperanza celebra y un cigarrillo queda tachado.")
		]
	},
	{
		id: "raton",
		title: "El laboratorio secreto de papá ratón",
		blurb: "Cuando la pancita de papá duele, la doctora Esperanza revisa su laboratorio secreto.",
		pages: [
			page("raton", 1, "energia", "El científico de la madriguera", "Papá Ratón es el científico más genial del mundo. Siempre inventa los mejores juegos, corre a gran velocidad por la madriguera y nos comparte de sus deliciosos quesos. ¡Su energía es como un experimento perfecto!", "Papá Ratón con bata corre por la madriguera y comparte queso con sus hijos."),
			page("raton", 2, "pancita", "El laboratorio secreto", "Un día noté que Papá Ratón ya no quería jugar. Dentro de su pancita hay un laboratorio secreto, su estómago, que procesa todo lo que come. Pero algo estaba saliendo mal.", "Papá Ratón descansa en el sofá. En su pancita se ve un laboratorio pequeño y desordenado."),
			page("raton", 3, "quimicos", "Salerón y Chatarrino", "Resulta que unos químicos traviesos llamados Salerón y Chatarrino se habían metido al laboratorio. Estaban mezclando ingredientes prohibidos que causaban un fuego molesto en las paredes del laboratorio.", "Un salero y una bolsa de comida chatarra, con cara de traviesos, mezclan pociones dentro de la pancita."),
			page("raton", 4, "fuerte", "Ya pasará", "Papá Ratón sentía que su pancita quemaba, pero decía: «No pasa nada, soy un ratón fuerte, ya pasará». Él no sabía que, si dejas que los químicos malos sigan mezclándose, pueden dañar el laboratorio para siempre.", "Papá Ratón se toca la pancita y sonríe como si no pasara nada. En su pensamiento siguen los químicos traviesos."),
			page("raton", 5, "supervisor", "El gran supervisor", "El pequeño ratoncito salió corriendo a contarle a mamá para pedir ayuda al gran supervisor de laboratorios: ¡el doctor! Él es el único científico experto con los instrumentos necesarios para revisar los muros de la pancita a tiempo.", "Un ratoncito corre hacia mamá. La doctora Esperanza espera con su tabla, lista para ayudar."),
			page("raton", 6, "revision", "La mejor regla", "Llevamos a Papá Ratón a la revisión. La doctora nos explicó que ir al médico cuando la pancita duele seguido es la mejor regla de seguridad. ¡Detectar los errores en el laboratorio a tiempo evita que sus muros se rompan!", "La doctora Esperanza explica a la familia ratón en el consultorio. Papá está en la camilla, tranquilo."),
			page("raton", 7, "limpieza", "La fórmula secreta", "La doctora usó sus aparatos, neutralizó los químicos malos y limpió el laboratorio de papá. Luego nos dio una receta con la fórmula secreta de los súper alimentos naturales.", "La doctora Esperanza ordena el laboratorio de la pancita. Cerca hay frutas y verduras."),
			page("raton", 8, "alimentos", "Muros más fuertes", "¡La nueva fórmula era deliciosa! Consistía en agregar al laboratorio muchas frutas frescas, verduras verdes, usar muy poca sal y limpiar todo con mucha agua pura. ¡Los muros de la pancita de papá se volvieron más fuertes y sanos!", "La familia ratón come frutas, verduras y agua. El salero queda apartado."),
			page("raton", 9, "felices", "A inventar momentos felices", "Ahora, en nuestra madriguera, sabemos que escuchar las alarmas de nuestro cuerpo y visitar al doctor mantiene el laboratorio de papá funcionando al cien por ciento. ¡A seguir inventando momentos felices!", "Papá Ratón vuelve a jugar. La doctora Esperanza saluda desde la puerta de la madriguera.")
		]
	}
];
var CRAYONS = [
	{
		id: "rosa",
		name: "Rosa listón",
		hex: "#E25686"
	},
	{
		id: "azul",
		name: "Azul bata",
		hex: "#2C6BBE"
	},
	{
		id: "celeste",
		name: "Celeste",
		hex: "#79C7E8"
	},
	{
		id: "verde",
		name: "Verde",
		hex: "#2F8F55"
	},
	{
		id: "lima",
		name: "Lima",
		hex: "#A8C95A"
	},
	{
		id: "amarillo",
		name: "Amarillo",
		hex: "#F0C14A"
	},
	{
		id: "naranja",
		name: "Naranja",
		hex: "#EF8A38"
	},
	{
		id: "rojo",
		name: "Rojo",
		hex: "#D24B4B"
	},
	{
		id: "morado",
		name: "Morado",
		hex: "#7B61C9"
	},
	{
		id: "cafe",
		name: "Café",
		hex: "#8A5A38"
	},
	{
		id: "durazno",
		name: "Durazno",
		hex: "#F3C5A4"
	},
	{
		id: "tinta",
		name: "Tinta",
		hex: "#243044"
	}
];
var STORAGE_KEY = "esperanza-cuentos-v2";
//#endregion
export { STORAGE_KEY as n, STORIES as r, CRAYONS as t };

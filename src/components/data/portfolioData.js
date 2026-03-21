/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/image-inmobiliaria.webp',
		title: 'Bienes raíces',
		skills: ['NextJS', 'React', 'TypeScript', 'Tailwind', 'Prisma'],
		descripcion:
			'Sitio web de Inmobiliaria Villanueva García. Desarrollado con Next.js 15, React 19, TypeScript y TailwindCSS 4. Incluye mapas interactivos con Leaflet, animaciones con Framer Motion y base de datos gestionada con Prisma. Doy mantenimiento y actualizaciones continuas.',
		demoURL: 'https://www.villanuevagarcia.com/',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/image-as.webp',
		title: 'Arrendamiento Seguro',
		skills: ['PHP', 'JavaScript', 'Tailwind', 'MySQL'],
		descripcion:
			'Plataforma web para gestión de arrendamientos. Desarrollada con PHP en arquitectura MVC propia, MySQL con PDO, TailwindCSS y JavaScript vanilla. Integra AWS S3 para documentos, Dropzone.js para subida de archivos, SweetAlert2 y autenticación con OTP. Doy mantenimiento y actualizaciones continuas.',
        demoURL: 'https://www.arrendamientoseguro.app/',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/imagen-bot-vg.webp',
		title: 'Bot Inmobiliario',
		skills: ['WhatsApp', 'OpenClaw', 'OpenAI'],
		descripcion:
			'Bot de WhatsApp 24/7 para Inmobiliaria Villanueva García. Atiende automáticamente a clientes interesados en propiedades, responde consultas y filtra prospectos sin intervención humana.',
		imgPosition: 'center center',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/image-prospectando.webp',
		title: 'Prospectando',
		skills: ['React', 'Firebase', 'JavaScript'],
		descripcion:
			'App web para asesores inmobiliarios con mapas interactivos para gestión de prospectos. Desarrollada con React 19 y Vite, Firebase como backend, Leaflet para mapas, y Dexie (IndexedDB) para funcionamiento offline.',
		demoURL: 'https://www.prospectando.app/',
		anim: 'fade-left',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/image-lumiere.webp',
		title: 'Velas Lumière',
		skills: ['Astro', 'Tailwind', 'TypeScript'],
		descripcion:
			'Tienda en línea de velas aromáticas. Desarrollada con Astro 5, TailwindCSS y MDX. Incluye búsqueda con Pagefind, blog, RSS y sitemap.',
		demoURL: 'https://velas-aromaticas.mx/',
		anim: 'fade-left',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/cv-esquelete.webp',
		title: 'CV Digital',
		skills: ['Astro', 'Tailwind'],
		descripcion:
			'Un Increible CV que puedes presentar en tus entrevistas!',
        demoURL: 'https://cv-esquelete.alfgow.app/',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	// {
	// 	imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
	// 	title: 'Coffe Store',
	// 	skills: ['React', 'CSS'],
	// 	descripcion:
	// 		'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
	// 	demoURL: '',
	// 	repoURL: '',
	// 	anim: 'fade-left',
	// },
	// {
	// 	imgSrc: 'https://www.corse.mx/cdn/shop/files/tienda_lenceria-lenceria-hot_sale-ofertas-mexico-lenceria_seyx-encaje-corse_mx-corse_lenceria_1200_x_560_px_13.png?v=1712270274&width=1500',
	// 	title: 'Coffe Store',
	// 	skills: ['React', 'CSS'],
	// 	descripcion:
	// 		'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
	// 	demoURL: '',
	// 	repoURL: '',
	// 	anim: 'fade-left',
	// },
	// {
	// 	imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
	// 	title: 'Coffe Store',
	// 	skills: ['React', 'CSS'],
	// 	descripcion:
	// 		'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
	// 	demoURL: '',
	// 	repoURL: '',
	// 	anim: 'fade-left',
	// },
	// {
	// 	imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
	// 	title: 'Restaurant',
	// 	skills: ['React', 'StyledComponents'],
	// 	descripcion:
	// 		'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
	// 	demoURL: '',
	// 	repoURL: '',
	// 	anim: 'fade-right',
	// }
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	NextJS: 'skill-icons:nextjs-dark',
	TypeScript: 'skill-icons:typescript',
	Prisma: 'skill-icons:prisma',
	PHP: 'skill-icons:php-dark',
	MySQL: 'skill-icons:mysql-dark',
	Firebase: 'skill-icons:firebase',
	WhatsApp: 'logos:whatsapp-icon',
	OpenClaw: 'noto:lobster',
	OpenAI: 'simple-icons:openai',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});

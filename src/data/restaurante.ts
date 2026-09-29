import tacosDoradosImg from '../assets/menu/tacos-dorados.jpeg';
import tacosBlanditosImg from '../assets/menu/tacos-blanditos.jpeg';
import quesamorroImg from '../assets/menu/quesamorro.jpeg';

export const horarios = {
	dias: 'Miércoles a Domingo',
	horas: '10:00 AM — 4:00 PM',
	cerrado: 'Lunes y Martes',
	diasSemana: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	apertura: '10:00',
	cierre: '16:00',
};

export const tacos = [
	{
		name: 'Taco doradito de Chamorro',
		price: 25,
		detail: 'Taco estilo barbacoa, tortilla tamaño normal, dorado con la grasita que suelta el chamorro al cocinarlo.',
		image: tacosDoradosImg,
		alt: 'Tacos dorados de chamorro con consomé',
	},
	{
		name: 'Taco blandito de Chamorro',
		price: 25,
		detail: 'Taco blandito en tortilla hecha a mano, con la carnita suavecita de nuestro chamorro. La tortilla puede ser de maíz azul o amarillo, según disponibilidad.',
		image: tacosBlanditosImg,
		alt: 'Tacos blanditos de chamorro en tortilla a mano',
	},
	{
		name: 'Quesamorro',
		price: 30,
		detail: '¿Has escuchado de las quesabirrias? Pues aquí tenemos los Quesamorros: taquito dorado estilo barbacoa con quesito gratinado. ¡Una verdadera chulada!',
		image: quesamorroImg,
		alt: 'Quesamorros dorados con quesito gratinado en plato de barro',
		pos: '50% 72%',
	},
];

export const tortaAhogada = {
	name: 'Torta ahogada de chamorro',
	price: 80,
	detail: 'Esta no es la típica torta ahogada: la hacemos con nuestro delicioso chamorro y la bañamos en nuestro famoso consomé 100% natural, sacado del propio chamorro mientras se cocina.',
};

export const chamorroEntero = {
	name: 'Chamorro entero con consomé',
	price: 130,
	detail: 'Chamorro suave, cocinado a fuego lento durante 8 horas, servido con nuestro famoso consomé de la casa (de cortesía), cebolla curtida, salsa, limón, tortillas y arroz.',
};

export const bebidas = [
	{ name: 'Aguas frescas 100% naturales', prices: [{ name: '½ litro', price: 25 }, { name: '1 litro', price: 45 }], note: '½ litro / litro', detail: 'Jamaica · Limón con chía · Tamarindo' },
	{ name: 'Refrescos', prices: [{ name: 'Refresco', price: 30 }], detail: 'Coca-Cola · Coca-Cola sin azúcar' },
	{ name: 'Agua natural', prices: [{ name: 'Agua natural', price: 18 }] },
];

export const combos = [
	{ name: 'Combo tacos', includes: '3 tacos (cualquier combinación suave/dorado) + agua chica o refresco', price: 95 },
	{ name: 'Combo torta', includes: 'torta ahogada de chamorro + consomé + refresco', price: 100 },
	{ name: 'Combo chamorro', includes: 'chamorro entero + agua chica o refresco', price: 150 },
	{ name: 'Combo quesamorro', includes: '3 quesamorros + agua chica o refresco', price: 105 },
];

export const direccion = {
	calle: 'Isla Cozumel 2670',
	colonia: 'Col. Jardines de la Cruz',
	ciudad: 'Guadalajara, Jal.',
	codigoPostal: '44950',
	// Ficha del negocio verificada en Maps; no es una búsqueda de la dirección.
	maps: 'https://www.google.com/maps/place/Distrito+chamorro/@20.6453932,-103.3783167,17z/data=!3m1!4b1!4m6!3m5!1s0x8428ad007aeeece9:0xc301c0bfb13ccc3e!8m2!3d20.6453932!4d-103.3783167!16s%2Fg%2F11z5886pgt',
};

export const contacto = {
	telefono: '+523348475300',
	telefonoVisible: '+52 33 4847 5300',
	whatsapp: 'https://wa.me/523348475300',
	email: 'hola@distritochamorro.mx',
};

export const reparto = {
	uberEats: 'https://www.ubereats.com/mx/store/distrito-chamorro-guadalajara/x-76WQvDUmmrywqDtzOmoQ',
	didiFood: 'https://www.didi-food.com/es-MX/food/store/5764613591823811544/Distrito-Chamorro',
	rappi: 'https://www.rappi.com.mx/restaurantes/1930424606-distrito-chamorro',
};

export const redes = {
	instagram: 'https://instagram.com/distritochamorro',
	facebook: 'https://facebook.com/distritochamorro',
	tiktok: 'https://tiktok.com/@distritochamorro',
};

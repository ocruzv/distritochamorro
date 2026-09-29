import type { APIRoute } from 'astro';
import { horarios, tacos, tortaAhogada, chamorroEntero, bebidas, combos, direccion, contacto, reparto, redes } from '../data/restaurante';

const plato = (item: { name: string; price: number; detail?: string }) =>
	`### ${item.name}\n\nPrecio: $${item.price} MXN.${item.detail ? `\n\n${item.detail}` : ''}`;

// Astro genera un archivo estático en cada build; comparte los datos con el HTML y JSON-LD.
export const GET: APIRoute = ({ site }) => {
	const url = new URL('/', site).href;
	const markdown = `---
title: "Distrito Chamorro — menú, horarios y ubicación"
url: "${url}"
language: "es-MX"
---

# Distrito Chamorro

Chamorro entero con consomé, tacos y tortas de chamorro en Jardines de la Cruz, Guadalajara, Jalisco. Para comer en el local, llevar o pedir a domicilio.

[Sitio oficial y menú](${url})

## Ubicación y contacto

- Dirección: ${direccion.calle}, ${direccion.colonia}, ${direccion.ciudad}, C.P. ${direccion.codigoPostal}, México.
- [Ver Distrito Chamorro en Google Maps](${direccion.maps})
- Teléfono: [${contacto.telefonoVisible}](tel:${contacto.telefono})
- [WhatsApp](${contacto.whatsapp})
- Correo: [${contacto.email}](mailto:${contacto.email})

## Horarios del local

- ${horarios.dias}: ${horarios.horas} (hora local de Guadalajara, America/Mexico_City).
- Cerrado: ${horarios.cerrado}.

## Menú

Precios del menú en el local, en pesos mexicanos (MXN). Servicio no incluido. Los precios en plataformas de reparto pueden variar; consulta el total antes de pedir.

${[tortaAhogada, chamorroEntero, ...tacos].map(plato).join('\n\n')}

## Combos

${combos.map((combo) => plato({ ...combo, detail: combo.includes })).join('\n\n')}

## Bebidas

${bebidas.map((bebida) => `### ${bebida.name}\n\n${bebida.prices.map((precio) => `- ${precio.name}: $${precio.price} MXN.`).join('\n')}${bebida.detail ? `\n\n${bebida.detail}` : ''}`).join('\n\n')}

## Pedidos a domicilio

Ingresa tu dirección en la app para consultar cobertura, horario de entrega y costo de envío.

- [Pedir en Uber Eats](${reparto.uberEats})
- [Pedir en DiDi Food](${reparto.didiFood})
- [Pedir en Rappi](${reparto.rappi})

## Redes sociales oficiales

- [Instagram](${redes.instagram})
- [Facebook](${redes.facebook})
- [TikTok](${redes.tiktok})
`;
	return new Response(markdown, {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
};

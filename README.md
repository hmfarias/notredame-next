[![Status][statuss-shield]][statuss-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/hmfarias/notredame-next">
    <img src="https://github.com/hmfarias/notredame-next/blob/main/public/logo.png" alt="Logo" width="350" height="auto">
  </a>
  <h2 align="center">Descubre lo que necesites en cada click</h2>


  <p align="center">
    Polirubro online
    <br />
    <a href="https://notredame-next.vercel.app/" target="_blank" ><strong>Explora el sitio ONLINE»</strong></a>
    <br />
    <br />
    <a href="https://github.com/hmfarias/notredame-next">Ver repositorio</a>
    ·
    <a href="https://github.com/hmfarias/notredame-next/issues">Reportar un error</a>
    ·
    <a href="https://github.com/hmfarias/notredame-next/issues">Solicitar función</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<a name="top"></a>

### Tabla de contenidos

1. [Introducción](#introduccion)
2. [Construido con](#consturido)
3. [Algunas Consideraciones](#consideraciones)
   * [Usuario y clave](#usrPassword)
   * [Static Params](#static)
   * [Local Storage](#localstorage)
   * [Comentarios en el código](#comentarios)
5. [Esquema de la App](#esquema)
6. [Ejecutando el Deploy](#deploy)
7. [Instalación en local](#instalacion)
8. [Contribuyendo](#contribuyendo)
9. [Licencia](#licencia)
10. [Contacto](#contacto)

<hr>

<!-- ABOUT THE PROJECT -->

<a name="introduccion"></a>

## INTRODUCCION

Bienvenidos a **Notre Dame**, tu tienda polirubro online exclusiva. Aquí encontrarás una selección variada de artículos de gran calidad. Nuestro compromiso es ofrecer elementos de alta calidad, elaborados con los mejores materiales y un enfoque en la atención al detalle.

Este repositorio contiene el código fuente de nuestra plataforma, desarrollada para brindar una experiencia de compra fluida y segura, asegurando que nuestros clientes puedan explorar y adquirir sus artículos favoritas de manera sencilla y rápida. ¡Gracias por visitarnos!

Esta aplicación es una plataforma de comercio electrónico desarrollada con Next.js, que permite a los usuarios explorar productos, agregar artículos al carrito y realizar compras. Implementa un sistema de autenticación para administrar accesos y un panel de administración para gestionar productos. Se apoya en Firebase Firestore como base de datos y utiliza Context API para el manejo del estado global.

[Volver al menú](#top)

<div align="center">
  <a href="https://github.com/hmfarias/notredame-next">
    <img src="https://github.com/hmfarias/notredame-next/blob/main/public/hero-desktop.png" alt="Hero image" width="600" height="auto">
  </a>
</div>

<hr>

<a name="consturido"></a>

### CONSTRUIDO CON

![Static Badge](https://img.shields.io/badge/NextJS-black?style=for-the-badge) como framework de desarrollo web que se basa en React y permite crear aplicaciones web interactivas.

<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/> (HyperText Markup Language) como lenguaje de marcación de hipertéxto estándar utilizado para crear y diseñar páginas web.

![Static Badge](https://img.shields.io/badge/TailwindV4-orange?style=for-the-badge) para controlar el aspecto visual de las páginas web, separando el contenido (HTML) de la presentación visual (CSS).

<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> como lenguaje de programación interpretado, de alto nivel y dinámico. Se ejecuta en el navegador del cliente, lo que permite la creación de páginas web interactivas y dinámicas.

![Static Badge](https://img.shields.io/badge/Firesbase-yellow?style=for-the-badge) como base de datos de documentos NoSQL de Google Cloud Platform que permite almacenar, sincronizar y consultar datos para aplicaciones web y móviles.

![Static Badge](https://img.shields.io/badge/Vercel-black?style=for-the-badge) como plataforma en la nube que permite a los desarrolladores crear, implementar, gestionar y escalar aplicaciones y sitios web.

[Volver al menú](#top)

<hr>

<a name="consideraciones"></a>

## ALGUNAS CONSIDERACIONES

<a name="usrPassword"></a>

### USUARIO Y CLAVE
Tratándose de una app con fines didacticos y para prueba, se proporciona a continuación el usuario y la clave para loguearse al sistema:

- Usuario: admin@notredame.com

- clave: admin123

[Volver al menú](#top)

<hr>


<a name="static"></a>

### STATIC PARAMS
La aplicación está diseñada para funcionar con “Static Params”; sin embargo, en la versión final, el código que habilita esta funcionalidad ha sido comentado. Esto se debe a que, al generar páginas estáticas para productos y categorías, la aplicación en producción (desplegada en Vercel) no reflejaba correctamente los nuevos productos añadidos ni las actualizaciones de stock tras una orden de compra.

El uso de Static Params es ideal cuando el contenido general cambia poco. Esto mejora el rendimiento ya que reduce la carga en la base de datos, pues las páginas se generan solo una vez durante el build. Además, se optimiza el SEO ya que como las páginas ya están generadas, los motores de búsqueda pueden indexarlas más rápido.

Sin embargo, para poder mostrar en producción las funcionalidades de carga de productos y procesamiento de ordenes con actualización de stock, y que los resultados de esas cargas en la BD puedan observarse, en este caso no resulta ideal la generacion de páginas estáticas, ya que el módulo de Admin está pensado para agregar productos y el procesamiento de una Orden de Compra actualiza el stock en los productos. Estos cambios no se reflejarán en la app hasta un nuevo despliegue, lo cual resulta bastante incómodo.

Como solución, con fines didácticos se optó por una estrategia de renderizado dinámico para garantizar que los cambios en la base de datos se reflejen de inmediato en la interfaz del usuario.

[Volver al menú](#top)

<hr>

<a name="localstorage"></a>

### LOCAL STORAGE

La App guarda el estado del carrito de compras en el Local Storage del navegador y lo mantiene actualizado cada vez que el mismo tiene alguna modificación. Finalmente lo vacía en caso de que el usuario procese una orden de Compra con éxito.

[Volver al menú](#top)

<hr>

<a name="comentarios"></a>

### COMENTARIOS EN EL CÓDIGO

Tratándose de una aplicación de índole DIDACTICO, se han dejado en el código comentarios útiles para su estudio. Pero se destaca que en un proyecto real, los mismos deben ser utilizados lo menos posible.

[Volver al menú](#top)


<hr>

<a name="esquema"></a>

## ESQUEMA DE LA APP
 
<div align="center">
  <a href="">
    <img src="https://github.com/hmfarias/notredame-next/blob/main/public/appDiagram.png" alt="Logo" width="900" height="auto">
  </a>
</div>

## 📖 Flujo de la Aplicación

### 🔹 Layout Principal
La aplicación inicia en `app/layout.js`, que engloba los **providers de contexto**:
- `AuthProvider.js` → Maneja la autenticación.
- `CartProvider.js` → Maneja el estado del carrito.

### 🔹 Navegación
El `Header.js` contiene:
- **Logo**
- **CartWidget** → Muestra el estado del carrito.
- **Navbar** → Menú de navegación principal.

### 🔹 Página de Inicio
`(home)/page.js` → Página principal de la app.

### 🔹 Productos
- `app/products/page.js` → Página de productos.
- `ProductListContainer.js` → Obtiene productos desde Firebase.
- `ProductList.js` → Muestra los productos en tarjetas (`ProductCard.js`).

### 🔹 Autenticación
- `app/login/page.js` → Página de inicio de sesión.
- `handleLogin` en `AuthContext` maneja la autenticación del usuario.

### 🔹 Administración de Productos
- `app/admin/page.js` → Página de administración.
- Permite **cargar nuevos productos** en Firebase.

### 🔹 Carrito de Compras
- `app/cart/page.js` → Página del carrito.
- `Cart.js` muestra los productos agregados al carrito.

### 🔹 Proceso de Compra
- `app/admin/page.js` → Página de pago.
- Captura datos del usuario y envía el pedido a Firebase (`createOrderInServer`).

### 🔹 Footer
- `components/Footer.js` → Pie de página de la app.

[Volver al menú](#top)

<hr>


<a name="deploy"></a>

## EJECUTANDO EL DEPLOY

Explora el sitio online haciendo click 🔗 [AQUÍ](https://notredame-next.vercel.app/) (Ctrl + clic para abrir en una nueva pestaña)

[Volver al menú](#top)

<hr>

<a name="instalacion"></a>

## INSTALACIÓN EN LOCAL

Prerequisitos de instalación:
Debes contar con un editor de código como Visual Estudio Code o similar.

1- En tu árbol de directorios sitúate en la carpeta donde deseas instalar la app.

2- Clona el repositorio escribiendo en la terminal o consola de tu pc el siguiente código:
<code>
  git clone https://github.com/hmfarias/notredame-next.git
</code>


Esto creará la carpeta "notredame-next" y en su interior los archivos de aplicación.

3- Ejecuta tu editor de código y sitúate dentro de la carpeta notredame-next. Podrás ver el código de la aplicación.

4- Abre una terminal y asegurate de estar ubicado dentro de la carpeta notredame-next

5- Ejecuta:
<code>
  npm install 
</code>

Esto instalará la aplicación de manera local.

6- Ejecuta:
<code>
  npm run dev 
</code>

Esto iniciará la aplicación en modo desarrrollador, y mostrará un link del tipo "http://localhost:3000", mediante el cual podrá accederse a la aplicación en modo local.



[Volver al menú](#top)

<hr>

<a name="contribuyendo"></a>

## CONTRIBUYENDO

Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. Cualquier contribución que haga es **muy apreciada**.

Si tiene una sugerencia para mejorar este proyecto, por favor haga un "fork" al repositorio y cree un "pull request". También puede simplemente abrir un "issue" con la etiqueta "mejora".
¡No olvide darle una estrella al proyecto! ¡Gracias de nuevo!

1. Fork al Proyecto
2. Cree una nueva rama para su característica (`git checkout -b feature/newFeature`)
3. Commit para los cambios (`git commit -m 'Add some newFeature'`)
4. Push a la nueva rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

[Volver al menú](#top)

<hr>

<!-- LICENSE -->

<a name="licencia"></a>

## LICENCIA

Distribuido bajo la licencia MIT. Consulte `LICENSE.txt` para obtener más información.

[Volver al menú](#top)

<hr>

<!-- CONTACT -->

<a name="contacto"></a>

## CONTACTO

Marcelo Farias - [+54 9 3512601888] - hmfarias7@gmail.com

[Volver al menú](#top)

<hr>

<!-- ACKNOWLEDGMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->

<!-- [statuss-shield]: https://img.shields.io/badge/STATUS-Developing-green -->

[statuss-shield]: https://img.shields.io/badge/STATUSS-finished-green
[statuss-url]: https://https://github.com/hmfarias/NotreDame#readme
[forks-shield]: https://img.shields.io/github/forks/hmfarias/NotreDame
[forks-url]: https://github.com/hmfarias/NotreDame/network/members
[stars-shield]: https://img.shields.io/github/stars/hmfarias/NotreDame
[stars-url]: https://github.com/hmfarias/NotreDame/stargazers
[issues-shield]: https://img.shields.io/github/issues/hmfarias/NotreDame
[issues-url]: https://github.com/hmfarias/NotreDame/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg
[license-url]: https://github.com/hmfarias/NotreDame/blob/master/LICENSE.txt
[product-screenshot]: https://github.com/hmfarias/NotreDame/blob/main/assets/images/screenShot.webp
[product-screenshot-navbar]: https://github.com/hmfarias/NotreDame/blob/main/assets/images/navbar.webp
[others-url]: https://github.com/hmfarias/NotreDame

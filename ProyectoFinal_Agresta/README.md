
# Proyecto Final Agresta

Este proyecto es una aplicación de comercio electrónico para la venta de insumos médicos, desarrollada con React y Vite.

## Estructura del Proyecto:

```
ProyectoFinal_Agresta/

├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public/
│   ├── assets/
│   ├── fonts/
│   │   ├── FredokaOne-Regular.ttf
│   │   └── OFL.txt
│   └── images/
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartWidget.jsx
│   │   ├── Checkout.jsx
│   │   ├── Congrats.jsx
│   │   ├── context/
│   │   │   └── CartContextProvider.jsx
│   │   ├── Error404.jsx
│   │   ├── Footer.jsx
│   │   ├── Item.jsx
│   │   ├── ItemCount.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemList.jsx
│   │   ├── ItemListContainer.jsx
│   │   ├── NavBar.jsx
│   │   └── Variables.jsx
│   └── main.jsx
└── vite.config.js


```

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/leinadatserga/ProyectoFinal_Agresta_Reactjs.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd ProyectoFinal_Agresta
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Inicia la aplicación en modo de desarrollo.\
Alt+click en la dirección mostrada en el terminal [ http://localhost:5173/ ] para verlo en tu navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.\
Empaqueta React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

### `npm run preview`

Sirve la aplicación construida para producción localmente.

### `npm run lint`

Ejecuta ESLint para encontrar y corregir problemas en el código.

## Dependencias

- `react`
- `react-dom`
- `react-router-dom`
- `firebase`
- `firebase-admin`
- `bootstrap`
- `react-bootstrap`
- `sweetalert2`

## Contexto del Carrito

El contexto del carrito se maneja en [`CartContextProvider`](src/components/context/CartContextProvider.jsx), que proporciona funciones para agregar, eliminar y limpiar artículos del carrito, así como calcular el total de artículos y el total a pagar.

## Componentes Principales

- [`NavBar`](src/components/NavBar.jsx): Barra de navegación principal.
- [`ItemListContainer`](src/components/ItemListContainer.jsx): Contenedor de la lista de productos.
- [`ItemDetailContainer`](src/components/ItemDetailContainer.jsx): Contenedor de los detalles del producto.
- [`Cart`](src/components/Cart.jsx): Página del carrito de compras.
- [`Checkout`](src/components/Checkout.jsx): Página de finalización de compra.
- [`Congrats`](src/components/Congrats.jsx): Página de confirmación de compra.
- [`Error404`](src/components/Error404.jsx): Página de error 404.
- [`Footer`](src/components/Footer.jsx): Pie de página.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
```

Este archivo 

README.md

 proporciona una visión general del proyecto, instrucciones de instalación, scripts disponibles, dependencias y una descripción de los componentes principales.

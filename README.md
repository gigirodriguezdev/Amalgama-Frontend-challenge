# Frontend Challenge - Giselle Rodriguez

Para ejecutar el proyecto, utilizar el siguiente comando:

### `npm start`

En la pantalla inicial se encuentran los links a los tres ejercicios 

## Ejercicio 1 

1. Problemas encontrados y posibilidades de mejora sujeridas

El codigo no esta indentado, lo cual hace dificil su lectura.
El codigo no compila ya que existen errores de sintaxis y funciones que no estan definidas: truncate() y findById()
El componente es muy grande y posee mucha logica, se podria separar en componentes mas pequeños, lo que facilitaria su mantenimiento y escalabilidad.
El componente no posee manejo de errores, si alguna de las propiedades no existe, el componente fallara.
El problema principal es que el componente ContactsScreen no estaba siendo reactivo a los cambios, es decir que cuando el componente se montaba, estaba definiendo en la variable contactsToDisplay los valores iniciales de contacts. Si estos cambian en el componente padre que le pasa las props a ContactsScreen, estos nuevos contacs no se veran reflejados en dicho componente.

Para solucionar esto ultimo, se opto por utilizar el hook useMemo para que la funcion parseContacts solo se ejecute cuando contacts cambie.

2. La refactorizacion del codigo se pueden encontrar los distintos componentes utilizados dentro del archivo Ejercicio1.js
A fines practicos y para una correccion mas simple opte por definir los distintos componentes y funciones dentro del mismo archivo. La forma mas prolija es crear cada componente en un archivo distinto.

3. 
Se agrego un manejo de errores cuando se llama a la funcion findById: Ahora se retorna "Unknown City" o "Unknown State" en caso de que no se encuentre la ciudad o el estado, evitando posibles errores. Se hardcodeo el retorno del string "Argentina" para fines practicos.
El componente ContactScreen va a llanar a los componentes ContactCard y ContactProfile (este ultimo pedido en el punto 4)
El componente ContactCard va a recibir los contactos (contacts), y dentro del mismo llama a un componente Address.

4. Se agrego la correspondiente vista de perfil de contacto, para lo cual se definio el componente ContactProfile, el cual recibe las propiedades contacts, cities y states del componente padre ContactScreen


## Ejercicio 2

Para resolver el ejercicio, se decidio implementar Radux para manejar los estados. Se podria haber utilizado context API ya que el ejercicio es sencillo y podia ser resuelto mediante esta arquitectura. Asumimos que no se conoce el scope total del proyecto, por lo que se prioriza la escalabilidad y robustez del mismo, avanzando asi con la instalacion e implementacion mediante Redux toolkit.
Como los dos endpoints traen libros (books) y usuarios (users) respectivamente, se crearon dentro de la carpeta "store" los correspondientes booksSlice.js, usersSlice.js, en los cuales se consultaran a los endpoints utilizando la libreria Axios, la cual fue debidamente instalada dentro del proyecto. En el archivo store.js se encuentra configurado el store.

Instale la herramienta json-server para mockear las respuestas de las APIs
Al correr siguientes comandos (en distintas instancias de terminales), los endpoints estaran habilitados para utilizar con las rutas 

http://localhost:3001/books
http://localhost:3001/users

### `npm run start:mock-books `

### `npm run start:mock-books `

Las ventajas de la solucion propuesta son las siguientes:
+ Al utilizar Redux en lugar de Context API, logramos un manejo de estado eficiente. Si la aplicacion crece en un futuro (en cantidad de componentes y mas actualizaciones de estados), la arquitectura elegida nos permite un diseño escalable.
+ Redux me permite un correcto uso de middleware (como Redux Thunk) para manejar las llamadas a las APIS, lo que mejora de manera significativa la organizacion del codigo, separando la logica de negocio del manejo de etados. 
+ Al utilizar Axios permite manejar errores al realizar distintas operaciones.
+ Optar por Axios en este caso particular en lugar de fetch, me evita llamar al metodo .json() en la respuesta para obtener los datos en formato JSON. En Axios el metodo get realiza esto automaticamente.



## Ejercicio 3

Opte por instalar la libreria Axios para realizar el POST, ya que simplifica el manejo de errores para respuestas del protocolo HTTP.
Se aprovecho la implementacion de la libreria Redux, para guardar en el store la informacion del login.
Se definio una pantalla PrivateScreen que contiene la logica para validar el token de autenticacion.


Aclaracion: no tuve tiempo de darle estilos a la solucion, optaria por utilizar tailwind para los estilos de los distintos componentes, ya que son ejercicios sueltos y me permite crear una solucion responsive de manera mas rapida que creando los estilos con CSS de desde cero.
Tambien podria usar styled components, definiendo estilos globales.

* La implementacion de React Router me facilito mostrar los 3 ejercicios dentro de un mismo proyecto, permitiendome gestionar la navegación, mantener el código organizado y mejorar la experiencia del usuario.
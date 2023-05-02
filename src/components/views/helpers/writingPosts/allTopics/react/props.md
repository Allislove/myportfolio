Vamos a leer y a comprender el Component View.jsx. Este componente contiene la data de los Usuarios, (Data que hemos creado aqui mismo!) pero esta data, va a ser representada y manipulada directamente desde el componente de users.jsx, con esto logramos encapsular nuestro código y asi tener un mayor control sobre el mismo. Luego tenemos el Component Users.jsx Recibimos las propiedades que le pasamos desde el componente view, y ahora trabajamos con ellas, logrando asi que nuestro componente de users.jsx, pueda manipular la data  (users="allUsers" )  que nosotros le pasamos desde el componente view.
Descomenta si deseas ver que contiene users, antes de ser mostrado en el navegador!  console.log(users);  Con el map recorremos el array.

```js
// Este es el primer componente, View.jsx

import React from 'react';
import Users from './users';

const View = (props) => {
  const allUsers = [
    { id: 1, "name": "Jesús" },
    { id: 2, "name": "Andres" },
    { id: 3, "name": "Bill Gates" },
    { id: 4, "name": "Douglas Crockford" },
    { id: 5, "name": "Jeff Bezos" },
  ]

  return (
    <div className="userLists">
        <Users users={ allUsers } title="Lista de Usuarios!" />
    </div>
);
}

export default View;

// Analiza cada uno de los componentes para entenderlos de una   
manera mas agradable!


// Este es el segundo componente, Users.jsx

import React from 'react'

const Users = (props) => {
  const users = props.users;
  const title = props.title;

  const renderUsers = users.map((user, index) => {
    return (
      { user.name }
    )
  })
  return (
    <div>
      <h2>{ title }</h2>
      { renderUsers }
    </div>
);
}

export default Users;   

```   


¡Vaya hay interés eso es genial :) ! Veamos entonces, si eres un programador con más de un año de experiencia, podria ser que te has encontrado con problemas en diseño que te llevan a preguntarte o te hacen ver, que ya existe un componente que contiene dicha informacion y además esta en perfecto estado, pero te das de cuenta de que no debes usar toda la informacion del componente, solo necesitas usar una parte de la misma, por ejemplo, mostrar una imagen, producto o un código de descuento dependiendo si el usuario esta registrado o no, ¿Rayos pues ya tengo este componente creado? ¿Voy a editarle algunas cosas y creo otro con solo lo que necesito? Noo, no es necesario!
  

**Aqui es donde entrar las Props (Propiedades de React)**

*Entonces, ¿Que haremos? ¿Que aprenderemos hoy Andrés?,* vamos a aprender a utilizar las propiedades y nos enteraremos porque son tan importantes y utiles en nuestros proyectos Web, lo que hace que nos guste mucho el uso de las propiedades, y que nos ayude a reutilizar nuestros componentes de la manera correcta, que por ende, para esto se han creado. Entonces veamos como funcionan las propiedades, y como utilizarlas. Recordemos entonces el principio de este documento, que es que las propiedades son una forma de pasar informacion entre componentes, y que esta informacion se puede utilizar para hacer que un componente se comporte de manera unica en cada Pagina Web. Volviendo al primer ejemplo sobre el Código de descuento etc, Vamos a pensar un poco más, **imaginemos** que trabajamos en una libreria, sabemos que muchos de nosotros compramos libros a menudo y existen muchos que lo hacen por primera vez, genial! todos estamos leyendo, pero a nuestro jefe se le ha ocurrido una gran idea, y es de dar un descuento de 10% en todos los libros que compramos, **pero solo para usuarios que esten registrados en el sitio web,** pues genial, ¿facil no ? Asi es, facil.

Por ende, supondremos pues que ya existe un **componente con nombre Book.js (Que sera el componente hijo),** y tambien que hay un **componente Products(Products.js),** que es el que engloba, cada uno de los productos(Book.js), el componente hijo tiene una propiedad llamada descuento, que sea donde aplicaremos el porcentaje a descontar de cada articulo, sabemos que en este caso son libros, puede ser cualquier otro producto, ¿Que hacemos ahora para que todo esto se cumpla y además muestre entonces el precio acorde para cada usuario que visite nuestro Sitio Web?
Te mostrare entonces primero unas imagenes del código, para que comprendamos un poco mejor!

![Props](//images.ctfassets.net/hhragbcnrbkm/4ytWfYL6voOKkrjpoweyZf/1c89747af0ee416b007dc66e48678446/props-Hijo-Component.png)


**Componente props hijo**

Vemos entonces en la imagen de arriba, que estamos consumiendo una API, para mostrar cada uno de los libros, y además, casi al final de la imagen, existe un operador ternario, que es el que usamos para mostrar el precio a los usuarios ¿Que pasa aqui? Pues lo que hacemos directo, es que dependiendo de si el usuario esta registrado, se le mostrara un determinado precio.

![Props en react](//images.ctfassets.net/hhragbcnrbkm/73NeNMhhzjcGrxt49PweGb/af362dc88d3f9a432f8185eaceef53cf/props-Padre-Component.png)

Y en esta ultima imagen lo que sucedio fue, que recibe a el componente Hijo(Book.js), y le pasamos una prop(Propiedad) a dicho componente, con un valor de tipo booleano, con un estado falso, que es lo que hara posible el uso de el componente hijo, en otro lugar si asi lo deseamos, y mostrar un dato diferente en cada lugar en donde lo utilicemos. Teniendo esto en cuenta, imagina la respuesta! La has adiviniado!! Asi es!, va a mostrar el precio a cada uno de los usuarios dependiendo, si este esta o no registrado y logeado en el sistema.



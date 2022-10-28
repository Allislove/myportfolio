Vamos a leer y a comprender el Component View.jsx. Este componente contiene la data de los Usuarios, (Data que hemos creado aqui mismo!) pero esta data, va a ser representada y manipulada directamente desde el componente de users.jsx, con esto logramos encapsular nuestro código y asi tener un mayor control sobre el mismo. Luego tenemos el Component Users.jsx Recibimos las propiedades que le pasamos desde el componente view, y ahora trabajamos con ellas, logrando asi que nuestro componente de users.jsx, pueda manipular la data  (users="allUsers" )  que nosotros le pasamos desde el componente view. Descomenta si deseas ver que contiene users, antes de ser mostrado en el navegador!  console.log(users);  Con el map recorremos el array.

<pre>
<Code language="javascript">

import React from 'react';
import React from 'react'
import Users from './users';

const View = (props) => {
    const allUsers = [
        { id: 1, "name": "Jesús" },
        { id: 2, "name": "Andres" },
        { id: 3, "name": "Bill Gates" },
        { id: 4, "name": "Douglas Crockford" },
        { id: 5, "name": "Jeff Bezos" },
    ]

    return(
        <div className="userLists">
            <Users users={ allUsers } title="Lista de Usuarios!" />
        </div>
    );
}

export default View;

// Analiza cada uno de los componentes si es necesario para entenderlos de una manera mas agradable!

import React from 'react'

const Users = (props) => {
    const users = props.users;
    const title = props.title;

    const renderUsers = users.map((user, index) => {
        return(
                <li key={index}>
                    { user.name }
                </li>
        )
    })

    return(
        <div className="userLists">
            { title }
            <ol>
                { renderUsers }
            </ol>
        </div>
    );
}

export default Users;  

 </Code>
</pre>

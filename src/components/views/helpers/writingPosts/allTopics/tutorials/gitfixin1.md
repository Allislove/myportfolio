# **Error al intentar realizar git fetch && git pull**
 
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

Y luego nos muestra las siguientes instrucciones,

    	git pull <remote> <branch>

	    If you wish to set tracking information for this branch you can do so with:

    	git branch --set-upstream-to=origin/<branch> crear-formulario-registro


**¿Como solucionar este problema?**

***Solución:*** La forma mas sencilla para resolverlo y seguir avanzando en nuestro proyecto sin dañar nada, es no utilizar **ninguna de las opciones que nos brinda**, esto nos tornara a algo más largo y se nos volvera un dolor de cabeza, por lo tanto continua leyendo, que en solo dos minutos veras la solución, facil y rapida.
Veamos, pues suponiendo que nosotros estamos en una rama en cuestion que llamaremos en este momento **crear-formulario-registro**, y queremos traernos todos los cambios que ya se han subido antes **en la rama de desarrollo, que la llamaremos dev**, esta rama de desarrollo es la rama en donde se estan enviado todos los issues que se estan resolviendo por tu equipo de desarrollo en la empresa que laboras, .:. para tu laborar de manera segura y sin afectar a ningun otro compañero y además no atrasar la entrega de el producto, tu debes de realizar el comando el cual nos ha mostrado la alerta que queremos solucionar = git fetch && git pull, pero wowww, nos encontramos con ese dolor de cabeza de esa alerta, entonces yendo al grano ahora si, solo debes de hacer esto: Se supone pues que en este momento estas en la rama a donde quieres traerte todos los cambios, la cual es **crear-formulario-registro**, puedes verificar si estas situado en dicha rama escribiendo ```git branch``` y te mostrara en cual estas ahora, luego de saberlo ya es facil y solo ejecutas el siguiente comando

```
git merge origin/dev --allow-unrelated-historie
```
**¿Pero Andrés que le hace esto a mi código?** 

***Veamos:***

El comando ```git merge origin/dev --allow-unrelated-histories``` fusiona el historial de dos ramas de git que no tienen un ancestro común. Esto puede ocurrir si las dos ramas se han desarrollado de manera independiente y no se han fusionado previamente.

El argumento **"origin/dev"** especifica la rama remota (en este caso, **"dev"**) que se desea fusionar con la rama actual. El modificador "--allow-unrelated-histories" indica que se permita la fusión de ramas que no tienen una historia común.

Es importante tener en cuenta que al fusionar ramas no relacionadas, se pueden producir conflictos en los archivos que se han modificado en ambas ramas. Es recomendable revisar cuidadosamente los cambios y resolver cualquier conflicto antes de completar la fusión.

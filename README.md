# challenge-rebill

### Diagrama Entidad Relación

![alt text](https://github.com/joseampuero/challenge-rebill/blob/main/img/der-challenge.png?raw=true)

La idea es la siguiente:
- Cada rectangulo representa una entidad. 
- Los rombos, salvo `Student_Course_Professor` (interrelacion ternaria), representan la relacion que existe entre las entidades. No se implementan, dado que son de cardinalidad 1 a N.
- Tanto Course como Evaluation_Note son entidades con jerarquía. En ambas no ocurre overlaping, por lo tanto existe un discriminardor que indica que son disjuntas. 


### Pasos a seguir
- Antes de empezar asegurarse de tener instaldo node y mysql.

- Clonar el repositorio

```bash
$ cd core-backend/
$ npm install
$ cd ..
$ cd database/
$ npm install
```

### core-backend 
- Expone el puerto 3201 y ademas se comunica a traves de una red TCP por el puerto 3200.
- Contamos con los endpoints para crear, editar, eliminar y listar usuarios desde student/.
- Las notas de los estudiantes se actualizan desde score/.

### database
- Expone el puerto 3101 y ademas se comunica a traves de una red TCP por el puerto 3100.
- En professor/ contamos con los endpoints para crear, editar, eliminar, listar, asginar curso.
- En course/ contamos con los endpoints para crear, editar, eliminar, listar.
- En student/ contamos con los endpoints para que el alumno se registre en un curso.

### docker
- No implementado

### auth
- No implementado

### notification
- No implementado

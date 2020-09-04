# CRUD - React, Redux, REST API & Axios

Instalar **react router dom**
~~~
npm i react-router-dom
~~~

## Usando Json Server

Simulador de API: https://github.com/typicode/json-server

Instalar
~~~
npm install -g json-server
~~~

Crear un archivo con el nombre **db.json** con un contenido
~~~json
{
  "productos": [
    {
      "id": 1,
      "nombre": "Jugo de Zanahoria",
      "precio": "31111"
    },
    {
      "id": 2,
      "nombre": "Jugo de Naranja",
      "precio": "1"
    },
    {
      "nombre": "Jugo de Naranja",
      "precio": "300",
      "id": 3
    },
    {
      "nombre": "Rib Eye 800g",
      "precio": "200",
      "id": 4
    },
    {
      "nombre": "Jugo de Fresa",
      "precio": "200",
      "id": 5
    }
  ]
}
~~~

Ejecutar archivo **db.json** con JSON Server en el puerto 4000
~~~
json-server db.json --port 4000
~~~

## Configurar Redux

Instalar Redux
~~~
npm i react-redux redux redux-thunk
~~~

Instalar extensión de Chrome **Redux DevTools Ofrecido por: remotedevio**

Documentación Redux devtools extension: https://github.com/zalmoxisus/redux-devtools-extension

## Instalar Axios

Instalar
~~~
npm i axios
~~~

## Instalar Sweet Alert 2

Instalar
~~~
npm install sweetalert2
~~~

Documentación: https://github.com/sweetalert2/sweetalert2, https://sweetalert2.github.io/
# Ejercicio 1
## Identificar característiques dels llenguatges de marques en diferents documents (svg, html, xml...)

### Ejemplo de svg

***Respuesta:***

-----

    <svg
    width="198mm"
    height="166mm"
    viewBox="0 0 198 166"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(2.2373964,0,0,2.2374086,-1351.9834,-2209.4334)">
        <path
        style="fill:#fb9c08"
        d="m 647.75482,988.4343 -14.19848,24.169 h 6e-5 l -6.8e-4,17.3938 h -10.21745 l -18.15292,30.901 h -10e-5 l 42.56957,10e-5 z" />
        <path
        style="fill:#653097"
        d="m 623.33811,1012.6033 v 17.3938 l 10.21823,-17.3938 z" />
        <path
        style="fill:#653097"
        d="m 663.88003,1012.6033 v 17.3938 h 10.21813 l 18.15101,30.9009 h -42.5676 v -72.4637 z" />
        <path
        style="fill:#fb9c08"
        d="m 674.0981,1012.6033 v 17.3938 l -10.21825,-17.3938 z" />
    </g>
    </svg>

Podemos observar que utiliza las siguientes etiquetas.
----

    <svg> : es un lenguaje basado en XML-para describir imágenes vectoriales.
    <g> : agrupa un conjunto de elementos SVG.
    <path> se utiliza para definir formas complejas mediante un conjunto de comandos de dibujo.


### Ejemplo de html
Podemos observar que utiliza las siguientes etiquetas según esta la estructura pero que puede haber más etiquetas.
----

    <!DOCTYPE html>
        <html>
        <head>
            <meta>
            <title>
        <body>
            <h1>
            <p>
            <ul>
                <li>
                    <b>

### Ejemplo de xml
Podemos observar que utiliza las siguientes etiquetas según esta su estructura.
----
    
    <?xml version="1.0" encoding="utf-8"?>
    <manifest>
        <uses-permission>
        <application>
        <activity>
        <intent-filter>
            <action>
            <category>

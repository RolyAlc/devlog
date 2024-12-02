# Ejercicio 2
## Identificació dels espais de noms en documents (AndroidManifest.xml). Aquest article es podria combinar amb l'anterior.

***Respuesta:***

-----

El Namespace define la librería de donde se cogen los tags xml que se usan en el documento xml. Los Namespace identifican de manera única código/librerías. Los Namespaces se usan para no tener colisiones entre los nobmres de los elmentos.

La etiqueta *xmlns:android* permite el uso de etiquetas y atributos especificos de Android. Cada una de ellas deberá empezar por *android:* que relaciona con los fundamentos del sistema Android. Como por ejemplos
    
    android:name
    android:allowBackup
    android:icon
    android:label
    android:roundIcon
    android:supportsRtl
    android:theme


AndroidManifest.xml

    <?xml version="1.0" encoding="utf-8"?>
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
        package="com.example.myapp">

        <!-* Permisos necessaris per a l'aplicació -->
        <uses-permission android:name="android.permission.INTERNET" />
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

        <!-* Configuració de l'aplicació -->
        <application
            android:allowBackup="true"
            android:icon="@mipmap/ic_launcher"
            android:label="@string/app_name"
            android:roundIcon="@mipmap/ic_launcher_round"
            android:supportsRtl="true"
            android:theme="@style/AppTheme">

            <!-* Activitat principal -->
            <activity android:name=".MainActivity">
                <intent-filter>
                    <action android:name="android.intent.action.MAIN" />
                    <category android:name="android.intent.category.LAUNCHER" />
                </intent-filter>
            </activity>
        </application>
    </manifest>

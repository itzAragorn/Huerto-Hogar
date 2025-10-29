# 🌿 Huerto Hogar

![Portada](./6356bcaa-e3ee-4f98-979d-9cb39bb8fb66.png)

**Huerto Hogar** es una aplicación web desarrollada con **React** que promueve el cultivo doméstico y la autogestión alimentaria.  
Su objetivo es ofrecer una experiencia práctica y educativa, desde la siembra hasta la cosecha, todo **directamente desde tu navegador**.

---

## 🏡 Características principales

- 🌱 Catálogo de productos naturales y semillas  
- 🧺 Interfaz moderna y adaptable a distintos dispositivos  
- 💾 Persistencia de datos con **localStorage**  
- 🔒 Flujo de autenticación local: registro e inicio de sesión  
- ⚙️ Desplegada en **AWS EC2 (Ubuntu)** con **Nginx** como servidor estático  

---

## ⚙️ Tecnologías utilizadas

| Tipo | Herramienta |
|------|--------------|
| Frontend | React, React Router, Bootstrap |
| Testing | Jasmine, Karma, Jest |
| Servidor | Nginx (Ubuntu, AWS EC2) |
| Persistencia | localStorage |
| Control de versiones | Git + GitHub |

---

## 💻 Instalación local

Clona el repositorio:

```bash
git clone https://github.com/itzAragorn/Huerto-Hogar.git
cd Huerto-Hogar
```

Instala las dependencias:

```bash
npm install
```

Ejecuta el proyecto en modo desarrollo:

```bash
npm start
```

El sitio estará disponible en:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧪 Pruebas unitarias

Huerto Hogar integra **Jasmine**, **Karma** y **Jest** para garantizar la estabilidad del proyecto.

### Ejecutar todas las pruebas

```bash
npm run test:all
```

### Ejecución individual

| Framework | Comando |
|------------|----------|
| Jasmine | `npx jasmine` o `npm run test:jasmine` |
| Karma | `npm run test:karma:single` |
| Jest | `npm test` |

### 📸 Ejemplos de ejecución

**Karma + Jasmine en Visual Studio Code**  
![Tests con Karma y Jasmine](./4ec55167-173a-4296-8bdf-236ecb252635.png)

**Jest con errores y éxitos**  
![Tests con Jest](./a7414db7-6e8e-45b4-a4ea-f0344fad4556.png)

---

## 🚀 Despliegue en AWS EC2 con Nginx

La aplicación está desplegada en una instancia **Ubuntu (EC2)** sirviendo el build de React con **Nginx**.

### Pasos generales

```bash
# En el servidor
cd /var/www/Huerto-Hogar/huerto-hogar
git pull origin main
npm run build

# Reiniciar Nginx
sudo systemctl restart nginx
```

El sitio se sirve desde:

```
/var/www/Huerto-Hogar/huerto-hogar/build
```

---

## 🧩 Estructura del proyecto

```
Huerto-Hogar/
│
├── src/
│   ├── components/      # Componentes React
│   ├── tests/           # Pruebas unitarias (Jasmine / Jest)
│   ├── services/        # LocalStorageService, API local
│   └── App.js           # Punto principal de la app
│
├── public/
│
├── karma.conf.js
├── jasmine.json
├── jest.config.js
├── package.json
└── README.md
```

---

## 🧠 Estado del proyecto

✅ Versión estable  
🚧 Próximas mejoras:

- Conexión con base de datos real (MongoDB o PostgreSQL)  
- Panel de usuario avanzado  
- API REST para catálogo y pedidos  

---

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**.  
Desarrollado por **Javier Muñoz**, **Jairo Huaman** y **Nicolás Osses** 🧑‍💻

📬 Contacto: [itzAragorn](https://github.com/itzAragorn)

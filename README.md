# **NOTES** | Individual Project

## **📌 Introduction**

- ** NOTE APP** is a Single Page Application using the following technologies: **React**, **Redux**, **Node**, **Express**, and **Sequelize**.
- With styling and design resources (UX: UI) in CSS.

<br />

## ** Scripts ** 

- **Windows**:   ./start.sh


<br />

<!-- 
## ** Necessary chrome://extensions/ ** 
The following google extensions are necessary for the correct visualization of the app:

- **Allow CORS: Access-Control-Allow-Origin**
- **Moesif Origin & CORS Changer**

<br /> -->

---

## ** Login **

It is necessary to enter the following username and password to access the application:

- **Username**: quiva@noteApp
- **Password**: 101010

<br />

---

## ** Dependencies Used **

It is necessary to have the following versions to be able to correctly install the dependencies necessary to run the project. Currently the required versions are:

-  **Node**:18.13.0 
-  **NPM**: 8.19.3

To verify which version you have installed:

```bash
node -v
npm -v
```

**backend:** The current dependencies are located in the package.json folder of the backend project used during the realization of this project:
-  **cors**: 2.8.5
-  **dotenv**: 16.3.1
-  **express**: 4.18.2
-  **pg**: 8.11.3
-  **pg-hstore**: 2.3.4
-  **sequelize**: 6.35.2

<br />

---

**frontend:** The current dependencies are located in the package.json folder of the React project called: frontend used during the realization of this project:
- **axios**: 1.6.3
- **react**: 18.2.0
- **react-redux**: 9.0.4
- **react-scripts**: 5.0.1
- **redux**: 5.0.1
- **redux-thunk**: 3.1.0

<br />

---

## ** Command to run in development environment **

**backend:** 

```bash
npm run dev
```

**frontend:** 

```bash
npm run start
```

<br />

---


### **🖱 Database**


This project uses a relational database (PostgreSQL), ORM Sequelize and various relationships.


---

<br />

### ** RESTFul API **
.
Built a RESTApi server using **NodeJS** and **Express**.


The RESTApi has the following routes for notes:

#### **📍 GET | /api/notes**

- Gets an array of objects, where each object is a note

#### **📍 GET | /api/notes/actives**

- Obtains an array of objects, where each object is a note that is active

#### **📍 GET | /api/notes/ archived**

- Obtains an array of objects, where each object is a note that is archived.

#### **📍 PUT | /api/notes/reverseActive/:id'**

- This path changes the value of the active key, that is, it changes the status from active to archived or vice versa.
- The note is received by parameter (ID).

#### **📍 POST | /api/notes**

- This route will receive all the data necessary to create a new note and relate it to the associated notes.
- All information must be received by body.
- You must create the note category in the database, and this must be related to the indicated notes (at least one).

#### **📍 PUT | /api/notes/:id**

- This route will receive all the data necessary to edit a note
- The id must be received by parameter

#### **📍 DELETE | /api/notes/:id**

- This route will receive all the data necessary to delete a category
- The id must be received by parameter

<br />

--

The RESTApi has the following routes for the categories:

#### **📍 GET | /api/categories**

- Gets an array of objects, where each object is the category of a note.

#### **📍 GET | /api/categories/:id**

- This route obtains the details of a specific category.
- The category is received by parameter (ID).

#### **📍 GET | /api/categories/:id/notes**

- This route obtains all the notes that are related to a specific category and receives the id of the category for which you want to know the notes.

#### **📍 POST | /api/categories**

- This route will receive all the data necessary to create a new category and relate it to the associated notes.
- All information must be received by body.
- You must create the note category in the database, and this must be related to the indicated notes (at least one).


#### **📍 PUT | /api/categories/:id**

- This route will receive all the data necessary to edit a category
- The id must be received by parameter.

#### **📍 DELETE | /api/categories/:id**

- This route will receive all the data necessary to delete a category
- The id must be received by parameter.

<br />

--

## **If you need more information about this project, do not hesitate to [contact me](https://www.linkedin.com/in/nathalyquiva/ "LinkedIn profile").**


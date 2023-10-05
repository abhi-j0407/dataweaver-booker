# Screenshots

![Screenshot](./public/screenshots/Screenshot%2001.jpg)

![Screenshot](./public/screenshots/Screenshot%2003.jpg)

![Screenshot](./public/screenshots/Screenshot%2004.jpg)

![Screenshot](./public/screenshots/Screenshot%2002.jpg)

![Screenshot](./public/screenshots/Screenshot%2005.jpg)

# Description

- A React based SPA, developed as an assessment submission for the roel of React Developer with Dataweaver.
- An online books repository/library, that allows user to view books & their details.
- Major functionalities include - Adding a new book, updating existing entry, filtering, sorting based on indivual fields.
- Responsive design with a toned down color palette and fonts implemented.

# Instructions to run locally

- Clone repository.
- Change directory to project folder, and run 'npm install' in terminal to install the required dependencies.
- To run project, run command 'npm run dev'.

# Deployment

The application has been deployed on [Vercel](https://dataweaver-booker-f73f2vbsn-abhi-j0407.vercel.app/), but since Vercel provides a HTTPS domain, and the API call is HTTP, the call fails. This will work as and when the API uses HTTPS. 

# Improvements

There's always a scope of improvement, and due to the limited time, not all could be implemented as of yet.

- Filtering does not support multiple fields filtering simultaneously, current code exchanges that ability with the ability to update filtered content on field data removal.
- The application is fully responsive for small mobile screens, tablets, desktops, to high resolution monitors. However, this was achieved via generalised design pattern, and could be improved upon, using multiple media queries and designs for indiviual screen sizes.
- Some reused code exists, that can be generalised and replaced with a singular component instead of two.
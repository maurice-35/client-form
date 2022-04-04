[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Courier+new&color=%23808080&size=40&width=800&duration=6969&lines=✋🏾Hello!+Welcome+to+this+full-stack-project!)]

# Overview
A simple full-stack applicaation built to send user's info to the database.

# Bref

- Using TypeScript (Or any your language of choice)
- Build a React UI, using the hooks API
- Build a Node API, using a framework like Express
- Validate user input in the UI:
- In the UI before proceeding to the next form section
- In the UI before submitting to the API
- In the API before saving to the database
- Form section headers should be clickable to expand/collapse the body
- Save all form data into an SQLite database, using an ORM like Sequelize (or similar) 
- Match the UI to the artwork files – as close to pixel perfect as you can
- Detailed README.md file with commands on how to setup the app
- Follow relevant OWASP best practices: https://en.wikipedia.org/wiki/OWASP

#  Technologies
## Languages
- JavaScript (ES6)
- HTML
- Bootstrap
## Frameworks and Libraries
- React
- React-Router-Dom
- Node.js
## Dependencies and Components
- Axios
- Express
- Nodemon
- Mongoose
- MongoDB

#  Install
- Set-up the development folder on GitHub.
- Create branches of the development folder.
- Install MongoDB `brew tap mongodb/brew`.
- Start the database `mongod --dbpath ~/data/db`.
- Create frontend folder `npx create-react-app client`.
- Install `Yarn` and add dependencies in the root of the project `yarn add express`, `yarn add mongoose`, `yarn add bootstrap`.
- Install dependencies in the client folder `cd client && yarn`.

To run the app, make sure you're using node version 16 or npm v8.
- `cd Backend`, `yarn seed`, `yarn serve`.
- `cd client`, `yarn start`.
You can do the above in separate terminals.

# Approach

The first day and part of the second day was focused on the backend. I worked on the backend creating models, controllers and routes. Completed the rest of the frontend and styling in the other two and a half days.

## Users Schema

		```
		const userSchema = new mongoose.Schema({
			firstName: { type: String, required: true, unique: true, maxLength: 30 },
			surname: { type: String, required: true, unique: true, maxLength: 30 },
			email: { type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
			telephone: { type: Number, required: true, unique: true, maxLength: 15, miinLength: 11 },
			gender: { type: String, required: true, maxLength: 10 },
			dateOfBirth: { type: Date, required: true },
			comment: { type: String, required: true, maxLength: 500 },
			
		})
		```

## Users Model
		```
		const [userInfo, setUserInfo] = useState({
				firstName: '',
				surname: '',
				email: '',
				telephone: '',
				gender: '',
				dateOfBirth: '',
				comment: '',
			})
		```

# Users'requests in insomnia

![Screenshot 2022-02-28 at 15 05 36](https://user-images.githubusercontent.com/84001897/156020551-592c8fd9-e613-48f9-ab65-2ec055274e7b.png)

# Frontend post request
![Screenshot 2022-02-28 at 16 26 33](https://user-images.githubusercontent.com/84001897/156020607-1c3de871-9cc2-43ff-995c-e638a5f7ed5f.png)


#  Wins
- This is my first full-stack project after my training. It was a great experience. 

#  Challenges
The frontend has been particularly challenging. The UI is particularly demanding. 
This final output does not cover all  intentions and plan for the project. If possible, I would like to improve on that.

#  Contribution to the project
I welcome any criticisms, corrections and contributions to this project.

### © Finer Vision

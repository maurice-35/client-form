# test-finer-v

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
- Install MongoDB `brew tap mongodb/brew`
- Install `Yarn` and add dependencies in the root of the project `yarn add express`, `yarn add mongoose`, `yarn add bootstrap`.
- Install dependencies in the client folder `cd client && yarn`.
- Start the database `mongod --dbpath ~/data/db`.

# Approach

The first day and part of the second day was focused on the backend. I worked on the backend creating models, controllers and routes.

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



#  Wins
- This is my first full-stack project after my training. It was a great experience. 

#  Challenges
The frontend has been particularly challenging. The UI is particularly demanding. 
This final output does not cover all  intentions and plan for the project. If possible, I would like to improve on that.

#  Contribution to the project
I welcome any criticisms, corrections and contributions to this project.

### © Finer Vision
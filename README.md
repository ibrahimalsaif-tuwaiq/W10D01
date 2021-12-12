# Next.js Posts

vercel: https://w10-d01-fma02r02w-ibrahimalsaif-tuwaiq.vercel.app/

## User Stories

- **Signup:** As an anon I can sign up in the platform so that I can start using the website
- **Login:** As a user I can login to the app so that I use the website
- **Logout:** As a user I can logout from the website
- **Add Post** As a user I can add a post to the website
- **Edit Post** As a user I can edit one of my posts in the website
- **Delete Post** As a user I can delete one of my posts in the website
- **Like a Post** As a user I like a post in the website
- **Add Comment** As a user I can add a comment to a post in the website
- **Edit Comment** As a user I can edit one of my comments in the website
- **Delete Comment** As a user I can delete one of my comments in the website
- **See Users** As a user with a `admin` role I can see all the users
- **Delete Users** As a user with a `admin` role I can delete any user
- **Delete User Post** As a user with a `admin` role I can delete any user post
- **Delete User Comment** As a user with a `admin` role I can delete any user comment

## Getting Started

### Installing Dependencies

#### Node js

Follow instructions to install the latest version of Node js for your platform in the [Node js docs](https://nodejs.org/en/).

#### NPM Dependencies

Once you have the project in your local machine, install dependencies by running:

```bash
npm install
```

This will install all of the required packages.

##### Key Dependencies

- [React](https://reactjs.org/) A JavaScript library for building user interfaces.

- [next](https://nextjs.org/) Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed..

- [axios](https://www.npmjs.com/package/axios) is a promise based HTTP client for the browser and node.js.

## Running the server

To run the server, execute:

```bash
npm start
```

## Router Routes

| Path         | pages   | Behavior            |
| ------------ | ------- | ------------------- |
| `/`          | Home    | Home page           |
| `/about`     | About   | About page          |
| `/contact`   | Contact | Contact page        |
| `/posts`     | Posts   | Shows all the posts |
| `/posts/:id` | Post    | Shows a post        |


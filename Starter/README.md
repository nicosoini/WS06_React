# WS06 Starter

This folder contains the starter version of the WS06 full stack blog exercise.

Students will complete both parts:

- `backend/` for the API and MongoDB logic
- `frontend/` for the React app and CRUD user interface

## Student ToDos

### Backend

Work inside `Starter/backend`.

Brief tasks:

- install dependencies and start the server
- connect the app to MongoDB
- complete the `Post` model validation rules
- finish the missing `PUT` and `DELETE` routes
- verify that all API responses return valid JSON

Main files:

- `server.js`
- `models/Post.js`
- `routes/posts.js`

See the detailed instructions in `backend/README.md`.

### Frontend

Work inside `Starter/frontend`.

Brief tasks:

- install dependencies and run the Vite app
- complete the React Router setup
- build navigation links in the header
- fetch and render all blog posts
- create a new post with the reusable form
- show a single post page
- edit an existing post
- delete a post and redirect back to the blog list

Main files:

- `src/App.jsx`
- `src/components/Header.jsx`
- `src/components/PostForm.jsx`
- `src/pages/HomePage.jsx`
- `src/pages/NewPostPage.jsx`
- `src/pages/EditPostPage.jsx`
- `src/pages/PostPage.jsx`

See the detailed instructions in `frontend/README.md`.

## Recommended Order

1. Finish the backend first.
2. Start the backend server.
3. Complete the frontend against the running API.
4. Test the full CRUD flow end to end.
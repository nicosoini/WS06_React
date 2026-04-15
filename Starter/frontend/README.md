# Frontend Starter

Starter package for WS06 React tasks.

Your goal is to build the full React frontend that works with the backend API.

## Before You Start

1. Start the backend server first (from `Starter/backend`).
2. Then start this frontend app.

Frontend commands:

```bash
npm install
npm run dev
```

The app uses Vite proxy, so API calls to `/api/posts` go to `http://localhost:3000` in development.

## What You Need To Build

Implement the TODOs inside these files:

- Routing:
  - `src/App.jsx`
- Navigation:
  - `src/components/Header.jsx`
- Reusable form:
  - `src/components/PostForm.jsx`
- Pages:
  - `src/pages/HomePage.jsx`
  - `src/pages/NewPostPage.jsx`
  - `src/pages/EditPostPage.jsx`
  - `src/pages/PostPage.jsx`

## Suggested Milestone Order

1. Routing and navigation
	- Make sure routes and links work for `/`, `/blog`, and post routes.

2. Read all posts
	- In `HomePage`, fetch `GET /api/posts`.
	- Show loading and error states.
	- Render posts using `PostCard`.

3. Create a post
	- In `NewPostPage`, handle form submit.
	- Send `POST /api/posts`.
	- Navigate to `/posts/:id` after success.

4. Read one post
	- In `PostPage`, fetch `GET /api/posts/:id` using route param.
	- Render post detail content.

5. Edit a post
	- In `EditPostPage`, load current data with `GET /api/posts/:id`.
	- Submit updates with `PUT /api/posts/:id`.

6. Delete a post
	- In `PostPage`, implement delete with `DELETE /api/posts/:id`.
	- Navigate back to `/blog` after delete.

## API Endpoints

- `GET /api/posts`
- `GET /api/posts/:id`
- `POST /api/posts`
- `PUT /api/posts/:id`
- `DELETE /api/posts/:id`

## Done Checklist

- [ ] All TODOs in selected frontend files are completed
- [ ] Blog list page loads posts from API
- [ ] New post form creates a post
- [ ] Single post page shows one post by id
- [ ] Edit page updates post data
- [ ] Delete action removes a post and redirects to blog
- [ ] No console errors in browser
- [ ] App works with backend running on port 3000

# Pizza Hallen

A React-based Pizza Store management system that allows users to view, add, edit, update, and search pizza listings.

> Note: This app does not include ordering or cart functionality.

## Features

- View all pizzas
- Add new pizza listings
- Edit and update existing pizza information
- search pizzas
- Smooth loading animation with `react-spinners`
- Notifications using `react-toastify`
- Form validation using `Formik` and `Yup`

## Screenshots
![image](https://github.com/user-attachments/assets/8ca34593-2d75-4ae6-862e-3c09b42e78f2)
![image](https://github.com/user-attachments/assets/dd157523-dc89-4c7a-a6c4-6171b7b7e22f)
![image](https://github.com/user-attachments/assets/6efa4a97-8e3b-4448-8428-bf93800ddad7)
![image](https://github.com/user-attachments/assets/f3c3e90e-5aba-4bdc-aebc-ca4395a5c69b)
![image](https://github.com/user-attachments/assets/e1aa4021-d582-4b7a-aac5-508d360fbd24)

## Installation

1. Clone the repository:
```base
git clone https://github.com/surajroy7430/pizza-store.git

cd pizza-store
```

2. Install dependencies:
```base
bun install
```

## Available Scripts

In the project directory, you can run:

`bun run dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.

`bun run build`

Builds the app for production to the `dist` folder.
- Optimizes and minifies React code
- Includes hashed filenames for caching
- Ready for deployment

`bun run preview`

- Previews the production build locally.

## Technologies Used

- React 19
- Vite as the build tool
- React Router v7 for routing
- React Bootstrap for UI components
- Bootstrap 5 for styling
- Axios for API calls
- React Toastify for notifications
- React Spinners for loading animations
- Formik + Yup for form validation

## Note

- The Search functionality fetches results from the `Edamam API` (recipes database).
- It does not search within the local pizza listings in the app.
- Only queries containing the word `"pizza"` return results; other queries will show a “No results found” message.
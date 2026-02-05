# Task Manager Tracker

A web application to manage tasks and track progress, built with **Django** (backend) and **React** (frontend). This project demonstrates a full-stack setup with REST APIs and JWT authentication.

---

## What to Expect

Log in or use the superuser account to access the admin panel

Create Users, Tenants and tasks, update or delete existing ones.

Navigate the React frontend to see the Login page where you can login as a user and see what tasks are assiged to you

API endpoints are available for further integration or testing

---

## Features

- User authentication with JWT
- Task creation, update, and deletion
- REST API for frontend consumption
- Local development ready with SQLite
- React frontend using React Router and TailwindCSS for styling
- CORS enabled for development

---

## Tech Stack

- **Backend**: Django, Django REST Framework, SimpleJWT, SQLite (local dev)
- **Frontend**: React, React Router, Bootstrap, TailwindCSS
- **Other**: Whitenoise for static file handling, CORS headers

---

## Requirements

- Python 3.11+
- Node.js 18+ / npm
- pip
- Optional: virtualenv for Python environment

---

## Getting Started (Local Development)

## Follow the steps below to test it for yourself.

1) Cone the repository
```bash
git clone https://github.com/Marsh-ops/Django-react-task-tracker
cd DjangoJobTrackerReact

2) Setup Python environment
python -m venv venv

# Activate the virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

3) Setup React frontend
cd frontend  # if you have a frontend folder
npm install

4) Apply migrations
python manage.py migrate

5) Create a superuser (admin)
python manage.py createsuperuser

6) Run the backend
python manage.py runserver
Then visit: http://localhost:8000/admin - to access the Django admin.

7) Run the frontend
npm start
Then visit: http://localhost:3000 - to access the frontend.

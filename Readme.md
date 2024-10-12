# Nigar Ahmadova
# Student ID: 101431281

# Comp3123 Week06 Exercise - Notes Application

Build a Restful CRUD API for a simple Note-Taking application using Node.js, Express and MongoDB.

## Project Requirements:
- Build a RESTful API to perform CRUD operations on notes.
- Use MongoDB Atlas for database storage.
- Use Postman to test all the API routes.

## Steps to Setup

1. Install dependencies
- npm install

2. Run Server
- node server.js

You can browse the apis at <http://localhost:4000>

## Instruction
1. API Endpoints:

- POST /notes – Create a new note.
  Request body (JSON):

  {
      "noteTitle": "Title",
      "noteDescription": "Description",
      "priority": "HIGH"
  }

- GET /notes – Retrieve all notes.

- GET /notes/:noteId – Retrieve a note by its ID.

- PUT /notes/:noteId – Update a note.
  Request body (JSON):
  {
      "noteTitle": "Updated Title",
      "noteDescription": "Updated Description",
      "priority": "MEDIUM"
  }

  - DELETE /notes/:noteId – Delete a note by its ID.

2. Testing:
  - Use Postman to send HTTP requests to the above endpoints.
  - Make sure to set Content-Type: application/json for POST and PUT requests.


## Submission:
- A ZIP file containing the source code: 101431281_COMP3123-exec06.zip
- Screenshots of Postman tests: Output_lab6_Nigar.pdf
- GitHub Link: 
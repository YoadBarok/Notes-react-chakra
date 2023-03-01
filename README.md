<h1>IMPORTANT!</h1>
Before running the front-end, make sure you that:
1. The backend server is running
2. The DB provider should be Postgres (because MySQL & Prisma support string length of maximum 191 chars).
3. You ran in the backend the following commands:
  * npx prisma migrate dev
  * npx prisma db seed

This is important because when you will create a new post, it takes the user ID of one of the users that are created during the DB seeding (since I didn't implement any authentication/authorization for this project).

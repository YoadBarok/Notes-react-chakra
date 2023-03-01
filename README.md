<h1>IMPORTANT!</h1>
Before running the front-end, make sure that:
<ol>
 <li>The backend server is running</li>
<li>The DB provider should be Postgres (because MySQL & Prisma support string length of maximum 191 chars).</li>
<li>You ran in the backend the following commands:
 <ul>
  <li>npx prisma migrate dev</li>
  <li>npx prisma db seed</li>
 </ul>
</ol>

This is important because when you will create a new post, it takes the user ID of one of the users that are created during the DB seeding (since I didn't implement any authentication/authorization for this project).

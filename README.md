# cs465-fullstack
CS-465 Full Stack Development with MEAN


# Architecture:
 - Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

SPAs, like the one I implemented, generally provide better performance after the initial load since they avoid constant page reloads by dynamically loading content. This creates a seamless user experience, which is a key advantage of SPAs. However, they are more complex to develop due to client-side routing and state management. Additionally, SPAs often pose challenges for SEO, requiring techniques such as server-side rendering or pre-rendering to ensure search engine optimization (SEO) friendliness.
On the other hand, traditional Express-based multi-page apps, which involve full-page refreshes, may feel slower compared to SPAs. However, these apps are generally easier to optimize for search engines since they serve fully rendered HTML pages directly from the server, making SEO implementation more straightforward.

 - Why did the backend use a NoSQL MongoDB database?

MongoDB is a NoSQL database that stores data in a flexible. This structure is ideal for web apps where the data may not have a rigid schema and needs to be updated frequently. MongoDB’s schema-less nature allows you to store various types of data, which is ideal for modern web applications that may evolve over time, and queries in MongoDB are fast, especially for read-heavy applications, which benefits performance for user-facing apps.

# Functionality
 - How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

The JSON and JavaScript serve different purposes in web development. JavaScript is a programming language used to make web pages interactive, allowing developers to define logic, manipulate the DOM, and handle events. On the other hand, JSON is a lightweight data interchange format used to represent structured data. Although inspired by JavaScript object syntax, JSON is strictly for data representation and does not include methods or behavior. In a full-stack application, JSON acts as the bridge between the frontend and backend. For example, when a user interacts with the UI in a SPA, an API call is made to the backend, typically an Express server, using JSON format. The backend processes the request and returns data in JSON, which the frontend then consumes to update the user interface. This seamless exchange of data enables smooth communication between the two ends of the application.

 - Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.


In the full stack process, I refactored API endpoints to handle authentication more securely by using reusable middleware for checking JWT tokens. On the frontend, I also refactored reusable UI components, such as trip cards and buttons, which improved the overall efficiency and maintainability of the codebase. The benefits of using reusable UI components include ensuring consistency across the application, as they provide a uniform look and feel in different sections. Additionally, maintainability is enhanced since updates to a component are automatically reflected across the app, reducing code redundancy. This also increases efficiency by minimizing code duplication, which in turn reduces development time and decreases the likelihood of bugs.

# Testing
 - Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

In a full stack application, various API testing methods are essential to ensure smooth request and retrieval processes. Unit testing is used to verify individual components, such as functions or methods, to ensure they work as expected. Integration testing ensures that different modules, like the frontend calling the backend API, function together properly. Endpoint testing specifically targets API routes using tools like Postman or automated libraries like Jest or Mocha, allowing for the testing of routes such as POST /api/trips or GET /api/trips/
. However, testing becomes more complex when security layers are involved, such as JWT authentication. Testers must mock or generate valid tokens, simulate invalid ones, and handle role-based access control (RBAC) scenarios. Additionally, ensuring security measures are functioning correctly—such as encrypting sensitive data using bcrypt, managing token expiration, and testing for vulnerabilities like CSRF (Cross-Site Request Forgery)—is critical to the overall API testing process. These layers add complexity but are necessary for ensuring secure and reliable endpoints.

# Reflection
 - How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has provided hands-on experience with modern web technologies such as Express, MongoDB, Angular, and Node which are essential for a career in software engineering. Throughout the course, I developed skills in full stack development, gaining knowledge of both frontend and backend technologies and how they integrate. I also learned database management by working with a NoSQL database like MongoDB. Additionally, I mastered security practices, including implementing JWT authentication to secure applications. A key takeaway was understanding the importance of reusable components and efficient design, which aligns with the DRY (Don't Repeat Yourself) principle, ultimately enhancing productivity and making me a more marketable developer. Each of these skills directly supports my software engineering career goals, giving me a well-rounded perspective on building, testing, and maintaining web applications.

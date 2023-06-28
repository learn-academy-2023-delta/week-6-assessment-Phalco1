# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Add the update information through migrate.

Researched answer:

1. Go to terminal

2. Generate a new migration

3. Open the migration file and locate the change method

4. Save the file

5. Migrate through the command "rails db:migrate

foreign key name: cohort_id

The cohort model.



2. Which RESTful routes must always be passed params? Why?

Your answer:

I know I've seen params id with show, I dont know the others. To identify the route.

Researched answer: 

The Show, Update, and Delete routes. They need to be identified specifically. Without parameters, it wouldn't know what to show, update or delete.

3. Name three rails generator commands. What is created by each?

Your answer: 

Model, Migrate, and cant remember the third. To take the workload.

Researched answer: 

Model, Controller, and Scaffold. They create the necessary files and boilerplate code to reduce the amount of manual work.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students Index-Retrieves all students from database and renders a view.

action: "POST" location: /students Create-recieves the form data for creating a new student and saves the new student record to the database.

action: "GET" location: /students/new New-It will render a view with a form to create a new student.

action: "GET" location: /students/2 Show-retieves the student wit ID of 2 from the database and render a view to display the student's details.

action: "GET" location: /students/2/edit Edit-rendering the form to edit a specific student.

action: "PATCH" location: /students/2 Update-action for updating a specific student

action: "DELETE" location: /students/2 Destroy-action for deleting a specific student.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1. As a user, I want to be able to create a new task with a title and description, so I can add items to my to-do list.

2. As a user, I want to be able to view a list of all my tasks, so I can see what needs to be done.

3. As a user, I want to be able to mark a task as completed, so I can keep track of my progress.

4. As a user, I want to be able to edit the details of a task, such as the title or description, in case any changes are needed.

5. As a user, I want to be able to prioritize tasks, so I can focus on the most important ones first.

6. As a user, I want to be able to assign due dates to tasks, so I can stay organized and manage my time effectively.

7. As a user, I want to be able to categorize tasks into different lists or categories, so I can group related tasks together.

8. As a user, I want to be able to set reminders for tasks, so I can receive notifications when they are due.

9. As a user, I want to be able to search for specific tasks or filter tasks based on different criteria, so I can easily find what I'm looking for.

10. As a user, I want to be able to delete tasks that are no longer relevant or completed, so I can keep my to-do list clean and organized.



# Admin Panel
## Requirements
- Login Page
- Landing Page
- Update Today's Tasks Page
- My Timings Page

## Login Page
- Shall Contain Hardcoded Username and Password from Db as sete by Admin
- No Register Required
- If User Name and Password Matches, then we will be sent to Landing Page

## Landing Page
- Shall contain Navbar
- From Nav bar we can navigate to
    - Update Today's Tasks Page
    - My Timings Page

## Update Today's Tasks Page
- This Page Will have a form
    - The form will have 3 inputs
        - Task Name
        - Task Description
        - From Time   
        - To Time ( Difference between From Time and To Time can be Max 2 hours, else a alert will come to asking user to break the task further to subtasks and mention each subtask's From Time and To Time )   
    - ThThise Form will be Repeatable
    - Meaning there will be an Add Another Task Button using which the above 3 inputs can be repeated and more tasks can be added.
    - Update Button will save the tasks in the backend (Automatically for Today's Date).
    - If User presses fill the form again and presses update, the previous tasks will get replaced by the ewly filled tasks.

## My Timings Page
- A select month and year calendar must be there
- See Timings Button should render the details below
    - Table showing all the entries that the user made regarding all the tasks and how much time was required for executing each tasks.
    - Total Time Given this month

| slno | Date Time | Task Name | Task Description | Hours Spent |
|:----:|:---------:|-----------|------------------|-------------|
|   1  |    abc    | task 1    | qwerty           | 1.5         |
| 2    | abc2      | task2     | qwertyu          | 2.5         |




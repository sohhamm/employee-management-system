# Admin Panel
## Requirements
- Login Page
- Landing Page
- Add/Remove/Update Employee Page
- Employee Timings Page

## Login Page
- Shall Contain Hardcoded Username and Password from Db
- No Register Required
- If User Name and Password Matches, then we will be sent to Landing Page

## Landing Page
- Shall contain Navbar
- From Nav bar we can navigate to
    - Add/Remove/Update Employee Page
    - Employee Timings Page

## Add/Remove/Update Employee Page
- We should be able to Add/Update the following Information of Employee
    - Name
    - Employee Cod
    - Employee Username
    - Employee Password
- We should be able to remove an Employee
- All The Employees details must be shown in a Table.

## Employee Timings Page
- A select Employee Drop down must be there
- A select month and year calendar must be there
- See Timings Button should render the details below
    - Table showing all the entries of the Employee regarding all the tasks and how much time was required for executing each tasks.
    - Total Time Given this month


| slno | Date Time | Task Name | Task Description | Hours Spent |
|:----:|:---------:|-----------|------------------|-------------|
|   1  |    abc    | task 1    | qwerty           | 1.5         |
| 2    | abc2      | task2     | qwertyu          | 2.5         |


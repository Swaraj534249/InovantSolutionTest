# InovantSolutions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
 
## Procedure 

After downloading the project open it in some IDE then go to the terminal and run
`npm install`

![image](https://user-images.githubusercontent.com/82468713/195413119-07b7da40-c6db-4e8b-8cac-dc0737ad0888.png)
<br>

Then in terminal, paste this `ng serve` and press enter

This is to run the angular application

After completion you will see Complied successfully in your terminal

![image](https://user-images.githubusercontent.com/82468713/195413258-bd15bdca-715f-4641-99e0-75337f260b24.png)


Now you can go to your browser and search this `http://localhost:4200/`

![image](https://user-images.githubusercontent.com/82468713/195413393-8ea72a11-5f83-4176-8f6c-9859a9f418e7.png)


You can find this link in your terminal as well.

But the login and signin won't work cause 'json-server' is not running

<br>

Go back to your IDE and open another terminal, paste this `json-server --watch db.json` and press enter

![image](https://user-images.githubusercontent.com/82468713/195413483-d28c4a11-0cf4-4345-971f-3dcd38c51b4b.png)


This is to run your json-server

After completion now you can go back to your terminal and try Signing up and then Login

Once you login you can see all Signed in users and do CRUD operations

To see your json API you can open another tab and search this `http://localhost:3000/signupUsers`

![image](https://user-images.githubusercontent.com/82468713/195413564-5b9b9690-05cd-4dc8-8940-403fda1a3bf1.png)


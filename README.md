# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# How to Contribute

 - First of all Clone the git repository by using the command ```git clone```
 - Then checkout to the branch you want to work upon,(Never use main branch for committing your code) by using the command ```git checkout -b <branch name>```
 - Then after writing the code, type the command ```npm run test "<Commit Message>"``` in your terminal. This command comes with 4 commands under the hood which includes ```git pull origin main``` that pulls the code from the main branch in order to avoid the merge conflict being resolved at maintainer level, instead resolve them at the local level. Then it comes with the commant ```eslint \"src/**/*.{js,jsx,json}\"``` which checks the correctness and compliance of the code with the eslint rules such that optimum code gets deployed at the production level. Then it runs the vite build command that checks whether the code written is build safe or not. If not build safe, then it cannot be deployed in the production and thus needs to be fixed. Then it runs the ```git add .``` command and finally ```git commit -m``` command after which it gets your commit message and finally your code is committed.
 - Next you will have to push the code to the github repository using the command ```git push origin <branch name>```
 - If you install new package or see a error message showing that you must commit the changes before pulling, you should run the command ```git add <filename/s>``` with the file names shown in the error message and then commit the same file with a commit messsage

# How to write commit Message:
  - You should use the tag feat whenever you add some additional feature as ```"feat: added the nav icon```
  - You should use the tag chores whenever you update the existing feature, make any style changes or make any functionality change to the existing feature like ```chores: added functionality to nav icon```

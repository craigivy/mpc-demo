# TateDemoUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy

Run `dist.sh` which will run a ng prod build and copy over the nginx config file to the dist directory.  Then check dist directory into git and push it. Deploy to your openshift instance using below:

deploy to openshift with:
```
oc new-app registry.access.redhat.com/rhscl/nginx-112-rhel7~https://github.com/ambaumann/mpc-demo-ui.git --context-dir=dist/tate-demo-ui/ --name ui
oc expose svc/ui
```

If this is not your first deploy make sure you delete the ui image from the repository first.  You only need to expose the route once as part of your first deploy


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

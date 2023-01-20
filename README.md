version : angular 13

npm i -g @angular/cli@13.0.0

for project creation:
ng new mis3 --style=scss --routing

module beforeLogin:
ng g m beforeLogin --route beforeLogin --module app.module

module afterlogin:
ng generate module afterLogin --route afterLogin --module app.module

afterLogin component:
ng g c after-login/list
ng generate component after-login/change-password

beforeLogin component:
ng generate component before-login/forgotPassword
ng generate component before-login/header
ng generate component before-login/register

CanActivate Guard:
ng g guard shared/auth

ng g interceptor shared/auth
ng g interceptor shared/header

service:
ng generate service provider/server


 

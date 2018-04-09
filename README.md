# easy-connect-angular
A package makes life easier. Joking, it does the next best thing. It makes authentication using easy-connect even easier.
.To install it:

#### npm i -S easy-connect-angular

or

#### yarn add easy-connect-angular

#### Usage:

#### Configuration:

#### In app.module.ts:

#### Token authentication.

```javascript
import { EasyAuthService, AuthType } from 'easy-connect-angular';

// All of the parameters are optional you can just use what you need.
// Token auth config
let config = {
  loginUrl: 'Your api login url',
  logoutUrl: 'Your api logout url',
  registerUrl: 'Your api register url',
  validateUrl: 'Your api validation url',
  prefix: 'your token prefix', 
  key: 'token' // can be whatever you return in the body
}

@NgModule({
  providers: [
    EasyAuthService,
    { provide: 'AUTH_TYPE', useValue: AuthType.TOKEN_AUTH },
    { provide:'AUTH_CONFIG', useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### Session Authentication.

```javascript
import { EasyAuthService, AuthType } from 'easy-connect-angular';

// All of the parameters are optional you can just use what you need.
// Token auth config
let config = {
  loginUrl: 'Your api login url',
  logoutUrl: 'Your api logout url',
  registerUrl: 'Your api register url',
  validateUrl: 'Your api validation url'
}

@NgModule({
  providers: [
    EasyAuthService,
    { provide: 'AUTH_TYPE', useValue: AuthType.SESSION_AUTH },
    { provide:'AUTH_CONFIG', useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
#### Sample usage:

```javascript
import { Component, OnInit } from '@angular/core';
import { EasyAuthService } from 'easy-connect-angular';


@Component({
  selector: 'app-pain',
  templateUrl: './pain.component.html',
  styleUrls: ['./pain.component.css']
})
export class PainComponent implements OnInit {

  constructor(private auth: EasyAuthService) { }

  ngOnInit() {
    // login
    this.auth.login ({
      email: "peter@klaven",
      password: "cityslicka"
    }).subscribe(x => console.log(x));
    // logout
    this.auth.logout();
    // register
    this.auth.register({
      email: "peter@klaven",
      password: "cityslicka"
    }).subscribe(x => console.log(x));
    // validation
    this.auth.validate();
  }

}
```

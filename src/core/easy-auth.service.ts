import { Injectable, Inject } from '@angular/core';
import { IAuth, 
         EasyTokenAuth, 
         EasyAuth,
         IConfig } from 'easy-connect';
import { Observable } from 'rxjs/Rx';

export enum AuthType {
  TOKEN_AUTH,
  SESSION_AUTH
}

@Injectable()
export class EasyAuthService implements IAuth {
  private auth: IAuth;

  constructor (
    @Inject('AUTH_CONFIG') private config : IConfig,
    @Inject('AUTH_TYPE') private authType: AuthType
    ) {
    this.auth = (authType == AuthType.TOKEN_AUTH)
    ? new EasyTokenAuth(config): new EasyAuth(config);
  }

  public login (loginParams: Object): Observable<any> {
    return this.auth.login(loginParams);
  }

  public logout (): Observable<any> {
    return this.auth.logout();
  }

  public register(registerParams: Object): Observable<any> {
    return this.auth.register(registerParams);
  }

  public validate() {
    return this.auth.validate();
  }
}
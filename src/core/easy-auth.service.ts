import { Injectable, Inject } from '@angular/core';
import { IAuth,
         AuthType,
         EasyTokenAuth, 
         EasyAuth,
         IConfig } from 'easy-connect';
import { Easily } from 'easy-injectionjs'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EasyAuthService implements IAuth {
  private auth: IAuth;

  constructor (
    @Inject('AUTH_CONFIG') private config : IConfig,
    @Inject('AUTH_TYPE') private authType: AuthType
    ) {
    Easily('CONFIG', config)
    Easily('AUTH_TYPE', authType)
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

  public validate (): Observable<any> {
    return this.auth.validate();
  }

  public validateData (data: Object): Observable<any> {
    return this.auth.validateData(data);
  }
}
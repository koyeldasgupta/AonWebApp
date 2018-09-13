import { TestBed, getTestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';

describe('GithubApiService', () => {
  let injector;
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });

    injector = getTestBed();
    service = injector.get(LoginService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getUsers', () => {
    it('should return an Observable<User>', () => {
      const dummyUser: User = {
        "id": 2,
        "userName": "princyjasper905",
        "email": "jp2908@gmail.com",
        "creationDate": "2018-09-02T00:00:00",
        "role": "Admin",
      }
      service.isVaildIser("princyjasper905").subscribe(data => {
        expect(data).toEqual(dummyUser);
        expect(data.role).toEqual("Admin");
        expect(data.userName).toEqual("princyjasper905");
      });

      const req = httpMock.expectOne(`${service.API_URL}/users`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUser);
    });
  });

});
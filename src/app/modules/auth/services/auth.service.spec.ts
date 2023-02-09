import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthService } from './auth.service';
import * as dataRaw from '../../../data/user.json';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  const data = (dataRaw as any).default
  let httpClientSpy : {post: jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
      
    });
    httpClientSpy = jasmine.createSpyObj('httpclient', ['post'])
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe retornar un obj con data y tokenSession', (done: DoneFn) => {

    const user: any = data.userOk;
    let objResponse = {
      data: {},
      tokenSession:''
    }

    httpClientSpy.post.and.returnValue(
      of(objResponse)
    );

    service.sendCredentials(user.email, user.password).subscribe(
      response =>{
        const getProperties = Object.keys(response);
        expect(getProperties).toContain('data');
        expect(getProperties).toContain('tokenSession')
        done()
      }
    )

  });

  it('retorne la suma de dos números', () =>{
    const a = 4;
    const b = 5;

    const c = service.suma(a, b);
    expect(c).toEqual(9)
  })

});

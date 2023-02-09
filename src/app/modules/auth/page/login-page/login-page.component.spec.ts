
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [LoginPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // mi primera prueba

  it('deberia de retornar formulario inválido', () => {
    //Aranque
    const mockCredentil = {
      email: 'add215asdsadsasas.com',
      password: 'asas12cdcdasas'
    }

    const emailForm = component.formLogin.get('email');
    const passwordForm = component.formLogin.get('password');

    //Actua
    emailForm?.setValue(mockCredentil.email);
    passwordForm?.setValue(mockCredentil.password);

    //A resultado

    expect(component.formLogin.invalid).toEqual(true);
  });


  it('botón debería contener palabra "Iniciar sesión"', () => {
    //Aranque

    const elementRef = fixture.debugElement.query(By.css('.form-action button'));

    //Actua
    const elementText = elementRef.nativeElement.innerText;

    //A resultado

    expect(elementText).toEqual('Iniciar sesión');
  });

  it('botón debería contener palabra "Iniciar sesión"', () => {
    //Aranque

    const elementRef = fixture.debugElement.query(By.css('.form-action button'));

    //Actua
    const elementText = elementRef.nativeElement.innerText;

    //A resultado

    expect(elementText).toEqual('Iniciar sesión');
  });

  it('botón debería contener palabra "Continuar con Socialón"', () => {
    //Aranque

    const elementRef = fixture.debugElement.query(By.css('.btn-fb'));

    //Actua
    const elementText = elementRef.nativeElement.innerText;

    //A resultado

    expect(elementText).toEqual('Continuar con Social');
  });
});

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSesion: boolean = false;
  formLogin!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private cookie: CookieService
  ) {

  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]]

    })
  }

  sendLogin() {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredentials(email, password).subscribe(res => {
      const { tokenSession, data } = res
      this.cookie.set('tokenSesion', tokenSession, 4, '/');
      this.router.navigate(['/', 'tracks'])
    },
      error => {
        console.error(error);

        this.errorSesion = true;
        setTimeout(() => {
          this.errorSesion = false;
          this.formLogin.reset();
        }, 3000)
      })

  }

}

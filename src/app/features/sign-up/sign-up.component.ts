import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, CardModule, InputTextModule, ReactiveFormsModule,
    FloatLabelModule, ButtonModule, CheckboxModule, RouterModule, ToastModule],
  providers: [AuthService, MessageService, Router],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private messageService: MessageService, private router: Router) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /**
   * method to submit the form
   */
  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signUp(this.signUpForm.value)
      .subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Exito', detail: response.message });
          setTimeout(() => {
            this.messageService.clear();
            this.refresh();
          }, 3000);
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error interno del servidor, por favor intente nuevamente más tarde.' });
        }
      });
  }

  /**
   * method to refresh the page
   */
  refresh() {
    this.router.navigate(['/login']);
  }
}



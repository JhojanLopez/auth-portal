import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'sign-up',
        loadComponent: () => import('./features/sign-up/sign-up.component')
            .then(m => m.SignUpComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./features/login/login.component')
            .then(m => m.LoginComponent)
    },
    {
        path: 'activate-account',
        loadComponent: () => import('./features/activate-account/activate-account.component')
            .then(m => m.ActivateAccountComponent)
    },
    {
        path: '',
        redirectTo: 'sign-up',
        pathMatch: 'full'
    }
];

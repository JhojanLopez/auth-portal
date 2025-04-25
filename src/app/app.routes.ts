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
        path: '',
        redirectTo: 'sign-up',
        pathMatch: 'full'
    }
];

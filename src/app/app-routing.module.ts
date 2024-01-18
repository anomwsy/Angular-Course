import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './modules/course/course.component';
import { ProductComponent } from './modules/product/product.component';
import { TaskListComponent } from './modules/tasks/task-list/task-list.component';
import { TasksComponent } from './modules/tasks/tasks.component';
import { ArchivedComponent } from './modules/archived/archived.component';
import { CardComponent } from './modules/card/card.component';
import { ContactFormComponent } from './modules/contact-form/contact-form.component';
import { LoginComponent } from './modules/Auth/login/login.component';

const routes: Routes = [
  { path: '', component: CourseComponent, data: { layout: 'default' } },
  { path: 'product', component: ProductComponent, data: { layout: 'default' } },
  { path: 'tasks', component: TasksComponent, data: { layout: 'default' }},
  { path: 'archived', component: ArchivedComponent, data: { layout: 'default' } },
  { path: 'card', component: CardComponent, data: { layout: 'default' } },
  { path: 'contact-form', component: ContactFormComponent, data: { layout: 'default' } },
  { path: 'login', component: LoginComponent, data: { layout: 'auth' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

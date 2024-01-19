import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './modules/course/course.component';
import { CourseService } from './modules/course/course.service';
import { ProductComponent } from './modules/product/product.component';
import { ProductService } from './modules/product/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './shared/pipes/summary/summary.pipe';
import { LayoutComponent } from './shared/layouts/layout/layout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LayoutService } from './shared/layouts/layout/layout.service';
import { HeaderComponent } from './shared/header/header.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { TaskListComponent } from './modules/tasks/task-list/task-list.component';
import { TaskItemComponent } from './modules/tasks/task-list/task-item/task-item.component';
import { ArchivedComponent } from './modules/archived/archived.component';
import { ArchivedService } from './modules/archived/archived.service';
import { TaskService } from './modules/tasks/task.service';
import { TasksComponent } from './modules/tasks/tasks.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { CardComponent } from './modules/card/card.component';
import { CardItemComponent } from './modules/card/card-item/card-item.component';
import { CardInputComponent } from './modules/card/card-input/card-input.component';
import { InputFormatDirective } from './shared/directives/input-format.directive';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { ContactFormComponent } from './modules/contact-form/contact-form.component';
import { LoginComponent } from './modules/Auth/login/login.component';
import { PostComponent } from './modules/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './modules/post/post.service';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { UserComponent } from './modules/user/user.component';
import { UserService } from './modules/user/user.service';
import { DetailUserComponent } from './modules/user/detail-user/detail-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ProductComponent,
    SummaryPipe,
    LayoutComponent,
    NavbarComponent,
    HeaderComponent,
    CustomerComponent,
    TaskListComponent, 
    TaskItemComponent,
    TasksComponent,
    ArchivedComponent,
    AuthLayoutComponent,
    CardComponent,
    CardItemComponent,
    CardInputComponent,
    InputFormatDirective,
    HighlightDirective,
    ContactFormComponent,
    LoginComponent,
    PostComponent,
    NotFoundComponent,
    UserComponent,
    DetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    ProductService,
    LayoutService,
    ArchivedService,
    TaskService,
    PostService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

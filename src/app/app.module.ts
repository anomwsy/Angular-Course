import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './modules/course/course.component';
import { CourseService } from './modules/course/course.service';
import { ProductComponent } from './modules/product/product.component';
import { ProductService } from './modules/product/product.service';
import { FormsModule } from '@angular/forms';
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
    ArchivedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseService,
    ProductService,
    LayoutService,
    ArchivedService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

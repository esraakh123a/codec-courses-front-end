import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PackageDetailsComponent } from './components/package-details/package-details.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { InstructorDashboardComponent } from './components/instructor-dashboard/instructor-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },          // أول صفحة تسجيل الدخول
  { path: 'auth', component: AuthComponent },                   // تسجيل الدخول / إنشاء حساب
  { path: 'home', component: HomeComponent },                   // الصفحة الرئيسية
  { path: 'courses', component: CoursesComponent },             // قائمة الكورسات
  { path: 'courses/:id', component: CourseDetailsComponent },   // تفاصيل كورس
  { path: 'packages', component: PackagesComponent },           // قائمة الباكدجات
  { path: 'packages/:id', component: PackageDetailsComponent }, // تفاصيل باكدج
  { path: 'admin', component: AdminDashboardComponent },        // داشبورد الأدمن
  { path: 'student', component: StudentDashboardComponent },    // داشبورد الطالب
  { path: 'instructor', component: InstructorDashboardComponent }, // داشبورد المحاضر
  { path: '**', redirectTo: 'auth' }                            // أي لينك غلط يرجع تسجيل الدخول
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


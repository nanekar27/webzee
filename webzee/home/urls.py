from django.contrib import admin
from django.urls import path
from home import views
urlpatterns = [
    path("home", views.index, name='home'),
    path("services", views.services, name='services'),
    path("dashboard", views.dashboard, name='dashboard'),
    path("Living", views.Living, name='living'),
    path('',views.LoginPage,name='login'),
    path('logout/',views.LogoutPage,name='logout'),
    path('signup/',views.SignupPage,name='signup'),
    path('about',views.About,name='about')
]

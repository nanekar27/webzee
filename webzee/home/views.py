from django.shortcuts import render, HttpResponse
from datetime import datetime
from django.contrib import messages
from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
     #return HttpResponse("this is home")
    return render(request, "index.html")

def services(request):
     #return HttpResponse("this is home")
    return render(request, "services.html")

def dashboard(request):
     #return HttpResponse("this is home")
    return render(request, "dashboard.html")

def Living(request):
     #return HttpResponse("this is home")
    return render(request, "Living.html")

def About(request):
     #return HttpResponse("this is home")
    return render(request, "about.html")



def SignupPage(request):
    if request.method=='POST':
        uname=request.POST.get('username')
        email=request.POST.get('email')
        pass1=request.POST.get('password1')
        pass2=request.POST.get('password2')

        if pass1!=pass2:
            return HttpResponse("Your password and confrom password are not Same!!")
        else:

            my_user=User.objects.create_user(uname,email,pass1)
            my_user.save()
            return redirect('login')
        



    return render (request,'signup.html')

def LoginPage(request):
    if request.method=='POST':
        username=request.POST.get('username')
        pass1=request.POST.get('pass')
        user=authenticate(request,username=username,password=pass1)
        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            return HttpResponse ("Username or Password is incorrect!!!")

    return render (request,'login.html')

def LogoutPage(request):
    logout(request)
    return redirect('login')
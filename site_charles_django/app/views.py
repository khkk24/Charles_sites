from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html') # This is the home page
from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader
# Create your views here.

def index(request):
    #return HttpResponse("allloo....")
    template = loader.get_template('index.html')
    context = { 
        'data' : 'data123'
    }
    return HttpResponse(template.render(context, request))
    
def error(request):
    return HttpResponse("error....")


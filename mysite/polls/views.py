from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader
from django.shortcuts import render_to_response
from polls.models import Question, Choice

#def index (request):
#    return render_to_response('app/index.html')

# Create your views here.


#from django.http import HttpResponse

#def index(request):
#    return HttpResponse("Hello, world. You're at the polls index.")


from django.http import HttpResponse
from django.template import Context, loader

def index(request):
    #template = loader.get_template("app/index.html")
    #template.render()
    #return HttpResponse(template.render)
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('polls/index.html')
    context = { 
        'latest_question_list' : latest_question_list
    }
    return HttpResponse(template.render(context, request))


def detail(request, question_id):
    return HttpResponse("You are looking at %s." % question_id)

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("you're voting question %s" % question_id)

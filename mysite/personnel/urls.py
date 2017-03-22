from django.conf.urls import url
from django.views.generic.base import TemplateView
from . import views

urlpatterns = [
    #url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^$', views.index, name="index"),
    # ex : polls/5/
    #url(r'^(?P<question_id>[0-9]+)/$', views.detail, name="detail"),
    #url(r'^(?P<question_id>[0-9]+)/results$', views.results, name="results"),
    #url(r'^(?P<question_id>[0-9]+)/vote$', views.vote, name="vote")
]
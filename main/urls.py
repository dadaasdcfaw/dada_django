from django.urls import path

from django.conf.urls.i18n import i18n_patterns
from django.utils.translation import ugettext_lazy as _

from . import views
from django.urls import include
app_name = 'polls'
urlpatterns = [

    ## Forma latigo
    ## ex: /polls/
    #path('', views.index, name='index'),
    #
    ## ex: /polls/5/
    #path('<int:question_id>/', views.detail, name='detail'),
    #
    ## ex: /polls/5/results/
    #path('<int:question_id>/results/', views.results, name='results'),
    #
    ## ex: /polls/5/vote/
    #path('<int:question_id>/vote/', views.vote, name='vote'),

    ##Forma buena

    path('', views.Index, name='index'),
    path('formacion', views.Formacion, name='formacion'),
    path('experiencia', views.Experiencia, name='experiencia'),
    path('extra', views.Extra, name='extra'),
    path('botPokemon', views.PokemonBot, name='pokemon'),
    path('jiay', views.jiay, name='pokemon'),
    ]

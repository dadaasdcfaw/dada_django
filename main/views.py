from django.http import HttpResponse
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.http import Http404
from django.views import generic
from django.utils import timezone
from django.utils.translation import gettext
from django.utils import translation
from django_user_agents.utils import get_user_agent

# Create your views here.

def Index(request):

    return render(request, 'main/index.html')

def Formacion(request):
    return render(request, 'main/formacion.html')

def Experiencia(request):
    return render(request, 'main/experiencia.html')

    
def Extra(request):
    return render(request, 'main/extra.html')

def PokemonBot(request):
    return render(request, 'main/botPro.html')

def jiay(request):
    user_agent = get_user_agent(request)
    if user_agent.is_pc:
        return render(request, 'main/spaceInvaders.html')
    else:
        return render(request, 'main/only_desktop.html')

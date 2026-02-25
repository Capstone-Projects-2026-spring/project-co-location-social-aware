from django.urls import path
from . import views

urlpatterns = [
    path('<int:user_id>/preferred-words/', views.preferred_words, name='preferred_words'),
]

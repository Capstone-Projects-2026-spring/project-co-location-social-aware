from django.urls import path
from . import views
from .views import register_user, login_user,profile

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/', login_user, name='login_user'),
    path('<int:user_id>/preferred-words/', views.preferred_words, name='preferred_words'),
    path("profile/", profile)
]

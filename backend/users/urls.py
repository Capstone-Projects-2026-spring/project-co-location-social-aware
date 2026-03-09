from django.urls import path, include
from . import views
from .views import register_user, login_user

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/', login_user, name='login_user'),
    path("api/users/", include("users.urls")),
    path('<int:user_id>/preferred-words/', views.preferred_words, name='preferred_words'),
]

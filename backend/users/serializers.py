from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'role']
        model = Child #idk how to do this, def fix
        fields = ['id', 'username', 'password', 'role', 'guardian']
    
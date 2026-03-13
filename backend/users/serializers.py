from rest_framework import serializers
from .models import User

class AdminRegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'role']

    def create(self, validated_data):
        validated_data['role'] = 'admin'
        return User.objects.create(**validated_data)
    
class ChildRegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'guardian']

    def create(self, validated_data):
        validated_data['role'] = 'child'
        return User.objects.create(**validated_data)
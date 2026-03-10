import token

from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token

# Create your views here.

def preferred_words(request, user_id):
    if request.method == 'POST':
        preferred_words = request.POST.getlist('preferred_words[]')
        print(f"Returning preferred words for user {user_id}: {preferred_words}")
        # Process the preferred words for the specific user
        return JsonResponse({'status': 'success', 'user_id': user_id, 'preferred_words': preferred_words})
    elif request.method == 'GET':
        # Return preferred words for the specific user
        preferred_words = ['Dinosaur', 'Monster Truck', 'NBA']
        print(f"Returning preferred words for user {user_id}: {preferred_words}")
        return JsonResponse({'status': 'success', 'user_id': user_id, 'preferred_words': preferred_words})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)

@api_view(['POST'])
def register_user(request):

    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "user": serializer.data,
            "token": token.key
        })

    return Response(serializer.errors, status=400)

@api_view(['POST']) #look into hashing passwords and authentication tokens for security in the future
def login_user(request):

    email = request.data.get("email")
    password = request.data.get("password")

    try:
        user = User.objects.get(email=email, password=password)

        return Response({
            "message": "Login successful",
            "user_id": user.id,
            "role": user.role
        })

    except User.DoesNotExist:
        return Response({"error": "Invalid credentials"}, status=400)
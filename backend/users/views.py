#from django.shortcuts import render
import uuid
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .models import User
from .serializers import AdminRegisterSerializer, ChildRegisterSerializer, UserSerializer
from django.contrib.auth import authenticate #look into using Django's built-in authentication system for hashing passwords
from .auth import get_user_from_token

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
def register_admin(request):

    serializer = AdminRegisterSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()
    
        token = str(uuid.uuid4())
        user.token = token
        user.save()
        
        return Response({
            "user": serializer.data,
            "token": token
        })
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def register_child(request):

    serializer = ChildRegisterSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()

        token = str(uuid.uuid4())
        user.token = token
        user.save()

        return Response({
            "user": serializer.data,
            "token": token
        })
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def profile(request):

    user = get_user_from_token(request)

    if not user:
        return Response({"error": "Unauthorized"}, status=401)
    
    if role == 'admin':
        return Response({
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "role": user.role
    })
    if role == 'child':
        return Response({
        "id": user.id,
        "username": user.username,
        "role": user.role,
        "guardian": user.guardian.id if user.guardian else None
    })

@api_view(['POST']) #look into hashing passwords and authentication tokens for security in the future
def login_admin(request):

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
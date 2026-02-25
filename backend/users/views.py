from django.shortcuts import render
from django.http import JsonResponse

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
from .models import User

def get_user_from_token(request):
    auth_header = request.headers.get("Authorization")

    if not auth_header:
        return None

    token = auth_header.replace("Token ", "")

    try:
        return User.objects.get(token=token)
    except User.DoesNotExist:
        return None
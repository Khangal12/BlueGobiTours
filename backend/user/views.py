from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny

class LoginAPIView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "success": True,
                "message": "Login successful",
                "data": {
                    "username": user.username,
                    "token": token.key
                }
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                "success": False,
                "message": "Invalid credentials",
            }, status=status.HTTP_400_BAD_REQUEST)

class CheckTokenAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "success": True,
            "message": "Token is valid",
            "data": {
                "username": request.user.username,
                "email": request.user.email,
                "first_name": request.user.first_name,
                "last_name": request.user.last_name,
                "id": request.user.id
                                        }
        }, status=status.HTTP_200_OK)

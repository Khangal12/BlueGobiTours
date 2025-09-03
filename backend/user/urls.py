from django.urls import path
from .views import LoginAPIView, CheckTokenAPIView

urlpatterns = [
    path('login/', LoginAPIView.as_view(), name='login'),
    path('token/', CheckTokenAPIView.as_view(), name='check_token'),
]

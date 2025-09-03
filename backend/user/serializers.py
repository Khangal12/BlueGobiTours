from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(username=data.get('username'), password=data.get('password'))
        if user and user.is_active:
            data['user'] = user
            return data
        raise serializers.ValidationError({"credentials": "Invalid username or password"})
    
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']
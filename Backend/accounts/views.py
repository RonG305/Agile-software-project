from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from accounts.serializers import UserRegistrationSerailizer, LoginSerializer
from django.utils import timezone
from rest_framework.views import APIView

from rest_framework.authtoken.models import Token


# Create your views here.
class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerailizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

 
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data['user']
            user.last_login = timezone.now()
            user.save()

            # Generate or retrieve the token associated with the user
            token, created = Token.objects.get_or_create(user=user)
    
            return Response({'message:': 'login succesifull'},status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)     

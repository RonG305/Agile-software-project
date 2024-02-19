from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from accounts.serializers import UserRegistrationSerailizer
from rest_framework.views import APIView


# Create your views here.
class UserRegistration(APIView):
    def post(self, request):
        serializer = UserRegistrationSerailizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

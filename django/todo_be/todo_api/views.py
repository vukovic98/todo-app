from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from .serializers import UserSerializer, ToDoSerializer
from .models import ToDo

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    #permission_classes = [permissions.IsAuthenticated]

class ToDoViewSer(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    #permission_classes = [permissions.IsAuthenticated]

class CustomUserRegister(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = UserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newUser = reg_serializer.save()
            if newUser:
                return Response(data=reg_serializer.data , status=status.HTTP_201_CREATED)
        
        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoggedUserData(APIView):
    permission_classes = [AllowAny]
    

    def get(self, request):
        user_data = UserSerializer(request.user).data

        return Response(data=user_data)

class UserToDoItems(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    permission_classes = [AllowAny]
    serializer_class = ToDoSerializer

    def get_queryset(self):
        return self.queryset.filter(user = self.request.user)

        

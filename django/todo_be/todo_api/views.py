from django.shortcuts import render
from rest_framework import permissions, viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer, ToDoSerializer
from .models import ToDo

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class ToDoViewSer(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    #permission_classes = [permissions.IsAuthenticated]

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import ToDo

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'password', 'username')

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class ToDoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ToDo 
        fields = ('id', 'title', 'description', 'priority', 'completed', 'user')

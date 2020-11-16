from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register(r'alltodos', views.ToDoViewSer, basename="todo")
router.register(r'users', views.UserViewSet, basename='user')
router.register(r'todos', views.UserToDoItems, basename='user_todos')


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('register/', views.CustomUserRegister.as_view(), name='create_user'),
    path('user/me', views.LoggedUserData.as_view(), name='logged_user'),
] 
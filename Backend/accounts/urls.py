
from django.urls  import path
from accounts.views import UserRegistrationView, LoginView

urlpatterns = [
    path('signup/', UserRegistrationView.as_view()),
    path('signin/', LoginView.as_view())
]
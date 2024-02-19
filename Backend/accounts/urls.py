
from django.urls  import path
from accounts.views import UserRegistration

urlpatterns = [
    path('signup/', UserRegistration.as_view())
]
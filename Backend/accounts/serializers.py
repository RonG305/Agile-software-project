
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate



class UserRegistrationSerailizer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})



    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email', 
            'password', 
            'password2',
          
        ]

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("The two password fields must match.")
        return data

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop('password2')

        # Create the user instance
        user = User.objects.create_user(password=password, **validated_data)

        return user
    


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    class Meta:
        
           model = User
           fields = {
               'username',
               'password'
           }

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = authenticate(request=self.context.get(
                'request'), username=username, password=password)

            if not user:
                raise serializers.ValidationError(
                    "Invalid credentials. Please try again.")

            data['user'] = user
        else:
            raise serializers.ValidationError(
                "Both username and password are required fields.")

        return data        
     

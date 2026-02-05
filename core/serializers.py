from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    assigned_to = serializers.StringRelatedField()  # or PrimaryKeyRelatedField
    tenant = serializers.StringRelatedField()

    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'completed', 'created_at', 'tenant', 'assigned_to']
from rest_framework import viewsets, permissions
from .models import Task
from .serializers import TaskSerializer
from django.http import JsonResponse

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Only return tasks assigned to the logged-in user
        return Task.objects.filter(
            tenant=self.request.user.tenant,
            assigned_to=self.request.user
        )

    def perform_create(self, serializer):
        # Assign the task to the logged-in user by default (optional)
        serializer.save(
            tenant=self.request.user.tenant,
            assigned_to=self.request.user
        )

def home(request):
    return JsonResponse({"message": "Task Manager API running"})
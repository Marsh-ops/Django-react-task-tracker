from django.contrib import admin
from .models import Tenant, User, Task

admin.site.register(Tenant)
admin.site.register(User)
admin.site.register(Task)
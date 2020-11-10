from django.db import models

class ToDo(models.Model):
    PRIORITY = (
        ('1', 'Low'),
        ('2', 'Medium'),
        ('3', 'High')
    )
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=500)
    priority = models.CharField(max_length=1, choices=PRIORITY)
    completed = models.BooleanField(default=False)


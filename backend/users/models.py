from django.db import models

class User(models.Model):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('child', 'Child'),
    )

    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.CharField(max_length=255, null=True, blank=True)
    role = models.CharField(max_length=255, choices=ROLE_CHOICES, default="admin")
    room = models.ForeignKey('beacons.Beacon', null=True, on_delete=models.SET_NULL)
    token = models.CharField(max_length=255, null=True, blank=True)

    guardian = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL, limit_choices_to={'role': 'admin'}) #guardian field for child users

    def __str__(self):
        return self.email
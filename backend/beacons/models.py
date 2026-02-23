from django.db import models

class Beacon(models.Model):
    serial_num = models.IntegerField()
    location_name = models.CharField(max_length=255)
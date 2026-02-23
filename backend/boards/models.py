from django.db import models

class Interest(models.Model):
    name = models.CharField(max_length=255)
    interest_icon = models.CharField(max_length=255)

class Phrase(models.Model):
    phrase_text = models.CharField(max_length=255)
    phrase_icon = models.CharField(max_length=255)
    interest = models.ForeignKey(Interest, on_delete=models.CASCADE)

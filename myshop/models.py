from django.db import models
from django.conf import settings

# Create your models here.
class Item(models.Model):
    title = models.CharField(max_length=150)
    price = models.FloatField()


class OrderItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)


class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODELS, on_delete=models.CASCADE)
    order = models.BooleanField(default=False)
    items = models.ManyToManyField(OrderItem)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)

# Generated by Django 3.1.4 on 2020-12-05 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='complit',
            field=models.BooleanField(default=False),
        ),
    ]

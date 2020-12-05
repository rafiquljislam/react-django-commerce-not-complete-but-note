from rest_framework import serializers
from shop.models import *
from django.apps import apps



class AdminSerializers(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = "__all__"

class CustomerSerializers(serializers.ModelSerializer):
    class Meta:
        model=Customer
        fields = "__all__"

class ProductSerializers(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = ['id' ,'title','slug','category','marked_price','selling_price','description','warranty','return_policy','view_count','image_url']
    def get_image_url(self, product):
        request = self.context.get('request')
        image_url = product.image.url
        return request.build_absolute_uri(image_url)

class ProductSerializersSimple(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class CartSerializers(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"
        depth = 1

class CartProductSerilizer(serializers.ModelSerializer):
    class Meta:
        model = CartProduct
        fields = "__all__"
        depth = 1
        
class OrderSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"
        depth = 1
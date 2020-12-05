from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('admin',AdminView,basename="AdminView")
router.register('product',ProductView,basename="ProductView")
router.register('category',CategoryViewSet,basename="category")
router.register('CartViewset',CartViewset,basename="CartViewset")
router.register('CartProductViewsets',CartProductViewsets,basename="CartProductViewsets")
router.register('OrderViewset',OrderViewset,basename="OrderViewset")

urlpatterns = [
    path('',include(router.urls)),
    path('add-to-cart-<int:id>/',AddtoCartView.as_view(),name='addtocart'),
    path('edit-cart-<int:id>/',EditOrDelateCartProduct.as_view(),name='edit-cart')
]
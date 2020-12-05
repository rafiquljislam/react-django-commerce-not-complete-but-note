from django.shortcuts import render
from .serializers import *
from rest_framework import  viewsets
from rest_framework.permissions import IsAuthenticated ,IsAuthenticatedOrReadOnly
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from .models import *


class AdminView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, ]
    authentication_classes=[TokenAuthentication, ]
    queryset = Admin.objects.all()
    serializer_class = AdminSerializers

class ProductView(viewsets.ViewSet):
    # permission_classes = [IsAuthenticated, ]
    # authentication_classes=[TokenAuthentication, ]
    def list(self,request):
        query = Product.objects.all().order_by('-id')
        serializer = ProductSerializers(query,context={"request": request}, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        query = Product.objects.all()
        product = get_object_or_404(query,pk=pk)
        print(product.view_count)
        product.view_count+=1
        product.save()
        serializer = ProductSerializers(product,context={"request": request})
        return Response(serializer.data)


class CategoryViewSet(viewsets.ViewSet):
    def list(self,request):
        query = Category.objects.all()
        serializers = CategorySerializers(query,many=True,context={"request",request})
        
        catagoriesall_products=[]
        for catagory in serializers.data:
            catagory_products = Product.objects.filter(category__id=catagory["id"])
            catagory_products_serializers = ProductSerializersSimple(catagory_products, many=True)
            catagory['products']=catagory_products_serializers.data
            catagoriesall_products.append(catagory) # ProductSerializers # ProductSerializersSimple

        return Response(catagoriesall_products)

class CartViewset(viewsets.ViewSet):
    permission_classes = [IsAuthenticated, ]
    authentication_classes=[TokenAuthentication, ]
    def list(self,request):
        user = request.user
        quereset = Cart.objects.filter(customer=request.user.customer,complit=False)
        # quereset = Cart.objects.all()
        serializer = CartSerializers(quereset,many=True,context={"request",request})
        # print(serializer,"rrrrrrrrr")

        cart_product_full=[]
        for cartproduct in serializer.data:
            # print(cartproduct,"***********")
            cart_products = CartProduct.objects.filter(cart__id=cartproduct["id"])
            cart_product_serializer = CartProductSerilizer(cart_products,many=True)
            cartproduct["cartproducts"] = cart_product_serializer.data
            cart_product_full.append(cartproduct)
        return Response(cart_product_full)

class CartProductViewsets(viewsets.ViewSet):
    def list(self,request):
        carttt = Cart.objects.get(customer=request.user.customer)
        query = CartProduct.objects.filter(cart=carttt)
        serializers = CartProductSerilizer(query,many=True)
        return Response(serializers.data)

class AddtoCartView(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes=[TokenAuthentication, ]
    def post(self,request,id):
        # print(request.user.customer)
        product_obj = Product.objects.get(id=id)

        cart_cart= Cart.objects.filter(customer=request.user.customer).filter(complit=False).first()
        print(cart_cart,"cart_cartcart_cartcart_cart")
        # print(cart_cart.complit)
       
        if cart_cart:
            print(cart_cart)
            print("OLD CART")
            this_product_in_cart = cart_cart.cartproduct_set.filter(
                product = product_obj
                )
            if this_product_in_cart.exists():
                cartproduct = CartProduct.objects.filter(product=product_obj).first()
                cartproduct.quantity +=1
                cartproduct.subtotal +=product_obj.selling_price
                cartproduct.save()
                cart_cart.total += product_obj.selling_price
                cart_cart.save()
            else:
                cartproduct = CartProduct.objects.create(
                    cart = cart_cart,
                    product=product_obj,
                    rate=product_obj.selling_price,
                    quantity=1,
                    subtotal=product_obj.selling_price
                )
                cart_cart.total += product_obj.selling_price
                cart_cart.save()
        else:
            print(cart_cart)
            print("New  CART")
            Cart.objects.create(customer=request.user.customer,total=0,complit=False)
            gercart = Cart.objects.filter(customer=request.user.customer).filter(complit=False).first()
            cartproduct = CartProduct.objects.create(
                cart = gercart,
                product=product_obj,
                rate=product_obj.selling_price,
                quantity=1,
                subtotal=product_obj.selling_price
            )
            gercart.total +=product_obj.selling_price
            gercart.save()                   
       

        send_data = id        
        response_data = {'error':False,'message':"Product Added to cart Successfully","data":send_data}
        return Response(response_data)

class EditOrDelateCartProduct(APIView):

    def post(self,request,id, *args, **kwargs):
        cp_obj = CartProduct.objects.get(id=id)
        cart_obj = cp_obj.cart
        cart_obj.total -= cp_obj.subtotal
        cart_obj.save()
        cp_obj.delete()
        return_response={"error":False,'message':"REMOVE CART PRODUCT","data":id}
        return Response(return_response)

    def put(self,request,id, *args, **kwargs):
        cp_obj = CartProduct.objects.get(id=id)
        # print(cp_obj)
        cart_obj = cp_obj.cart
        # print(cart_obj)
        
        cp_obj.quantity -=1
        cp_obj.subtotal -=cp_obj.rate
        cp_obj.save()
        cart_obj.total -=cp_obj.rate
        cart_obj.save()
        if(cp_obj.quantity==0):
            cp_obj.delete()

        return_response={"error":False,'message':"DECRISE PRODUCT QUENTITY","data":id}
        return Response(return_response)

    def delete(self, request, id, *args, **kwargs):
        cart_obj = Cart.objects.filter(id=id).first()
        if cart_obj:
            cart_obj.delete()
            return_response={"error":False,'message':"FULL CART IS DELETED","data":id}
        else:
            return_response={"error":False,'message':"THARE IS NO CART","data":id}
        return Response(return_response)

class OrderViewset(viewsets.ViewSet):
    permission_classes = [IsAuthenticated, ]
    authentication_classes=[TokenAuthentication, ]
    def list(self,request):
        cart = Cart.objects.filter(customer=request.user.customer).first()
        qurtyset = Order.objects.filter(cart=cart)
        serializers = OrderSerilizer(qurtyset,many=True)

        full_orderviewset = []
        for cart_product in serializers.data:
            order_cartProduct = CartProduct.objects.filter(cart_id=cart_product["cart"]['id'])
            order_cartProduct = CartProduct.objects.all()
            serializers_cartProduct = CartProductSerilizer(order_cartProduct,many=True)
            cart_product["cartProducts"] = serializers_cartProduct.data
            full_orderviewset.append(cart_product)
        
        return Response(full_orderviewset)
    def create(self,request):

        cart_id = request.data["cartId"]
        cart_obj = Cart.objects.get(id=cart_id)
        try:
            Order.objects.create(
            cart=cart_obj,
            ordered_by=request.data["ordered_by"],
            shipping_address=request.data["shipping_address"],
            mobile=request.data["mobile"],
            email=request.data["email"],
            subtotal=cart_obj.total,
            discount=4,
            total=cart_obj.total,
            order_status="Order Received"
            )
            cart_obj.complit=True
            cart_obj.save()
            return_response = {"error":False,'messages':"Order IS created","data":cart_id}        
        except:
            return_response = {"error":True,'messages':"Order not created"}        
        return Response(return_response)
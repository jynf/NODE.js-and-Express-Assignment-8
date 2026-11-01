GET /api/resources	200 OK       -displayed all resources  

GET /api/resources/1	-200 OK	  
{
    "id": 1,
    "name": "Desktop",
    "category": "Computer"
}  

GET /api/resources/7	--404 Not Found	    "message": "Resource not found"  

POST /api/resources	    --201 Created  
{
    "id": 5,
    "name": "Pants",
    "category": "Clothing"
}  

PUT /api/resources/1	--200 OK  
{
    "id": 1,
    "name": "Gaming Laptop",
    "category": "Computers"
}  
  
DELETE /api/resources/2	   --200 OK  
    "message": "Resource deleted successfully",
    "resource": {
        "id": 1,
        "name": "Gaming Laptop",
        "category": "Computers"
    }  

DELETE /api/resources/8	   --404 Not Found	   "message": "Resource not found"
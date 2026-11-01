# NODE.js-and-Express-Assignment-8
Assignment 8 Submission github

Server runs on address http://localhost:3000/api/resources  

use  http://localhost:3000/api/resources/# for specific element IDs,   

ex http://localhost:3000/api/resources/1  

Test	Request	Expected Result	Actual Result
ET /api/resources	200 OK        -displayed all resources  

GET /api/resources/1	200 OK	  -{
    "id": 1,
    "name": "Desktop",
    "category": "Computer"
}  

GET /api/resources/7	404 Not Found	    "message": "Resource not found"   
POST /api/resources	  201 Created  
PUT /api/resources/1	200 OK  
{
    "id": 1,
    "name": "Gaming Laptop",
    "category": "Computers"
}  
DELETE /api/resources/2	200 OK	[Fill after testing]  
    "message": "Resource deleted successfully",
    "resource": {
        "id": 1,
        "name": "Gaming Laptop",
        "category": "Computers"
    }  

DELETE /api/resources/999	404 Not Found	   "message": "Resource not found"

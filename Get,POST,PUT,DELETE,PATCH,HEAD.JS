/*
GET: The GET method requests a representation of the specified resource.
Requests using GET should only retrieve data and should have no other effect. 
(For example, this method cannot be used for creating new resources.)


POST:  The POST method is primarily used to submit data to be processed to a 
specified resource. It's often used when you want to create a new resource on 
the server or send data to a server for further processing, such as submitting a 
form, uploading a file, or making a comment on a blog post.

PUT : The PUT method is used to update or replace a resource at a specific URI 
(Uniform Resource Identifier). It is used when you want to update an existing 
resource with new data. The data sent with a PUT request should completely 
replace the resource at the specified URI.
   
        //   DIFF BETWEEN PUT AND POST 
POST  ---- is used for creating new resources or submitting data for processing.
PUT   ---- is used for updating or replacing an existing resource.

With POST,----- the server typically handles data as a request to process, and 
the handling can vary depending on the server's implementation.
With PUT,  ---- the data is expected to replace the resource at the specified 
URI, and the server should update the resource accordingly.


PATCH   --- The PATCH method in HTTP is used to partially update a resource on
           the server. Unlike the PUT method, which is used to completely replace 
           an existing resource, PATCH is used to apply partial modifications to
            an existing resource. It's often used when you want to update specific
         fields or properties of a resource without affecting the entire resource.

HEAD --   The HTTP HEAD method is one of the standard HTTP request methods used 
          in the Hypertext Transfer Protocol (HTTP). It is similar to the GET
         method but with a key difference: when you send a HEAD request, the 
         server responds with headers and metadata about the requested resource
          but does not include the actual resource body in the response. In other
           words, a HEAD request retrieves the same headers that a GET request 
        would, but without the content of the resource.

OPTIONS -- 
The HTTP OPTIONS method is one of the standard HTTP request methods used in the 
Hypertext Transfer Protocol (HTTP). It is primarily used to query the 
communication options available for a target resource. When you send an OPTIONS
 request to a server, the server responds with a list of the HTTP methods and
  other communication options that are supported for the specified resource.

*/
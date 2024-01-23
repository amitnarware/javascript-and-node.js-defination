    /// WHAT IS CORS 
/*    Certainly! In Node.js, CORS (Cross-Origin Resource Sharing) is
 a way to manage how different websites or domains can interact with
  your Node.js server.

Imagine your Node.js server is like a library, and various websites 
are like different people who want to borrow books from that
 library. CORS is like the library's rules for lending books to
  different people. */

/*  1.. Same-Origin Policy:
   Normally, web browsers enforce a rule called the Same-Origin 
   Policy. It means that a web page from one domain
(like example.com) can't directly request data from a different
    domain (like api.example2.com). This rule is to keep things
      secure.

      2...CORS in Node.js:
       If your Node.js server provides data that other websites
        might want, you can use CORS to specify which websites are
         allowed to access your data. It's like saying,
          "These specific websites are allowed to borrow books from
           our library."

  3..HTTP Headers: 
  CORS works through HTTP headers. When a request is made to your
   Node.js server, it checks the headers to see if the requesting 
   website is allowed. If it is, your server responds with the 
   appropriate headers to allow the request. If it's not allowed,
    your server will block the request.  */
   function y(){
  console.log(this.length)
}

var x = {
  length : 5,
  method: function(y){
    arguments[0]();
  }
}
x.method(y,1)
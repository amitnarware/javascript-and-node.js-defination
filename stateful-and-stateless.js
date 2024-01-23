//  WHAT IS STATUFUL 
/*
If a client delivers a request to the server in a stateful protocol, it expects 
a response of some sort. If it does not receive a response, it will send the 
request again.

An example of stateful is FTP (File Transfer Protocol). For the course of an FTP 
session, which often includes many data transfers, the client establishes a 
Control Connection. After this, the data transfer takes place.

            //  ADVANTAGES
1.  Stateful protocol keeps track of the connection information, and as a result,
  delivers superior performance because of continually keeping track of 
  information.
2. Stateful protocols are more intuitive because they can maintain data on the 
server between two requests.
3.They can improve performance when data retrieval is required only once.

                //  DISADVANTAGES
1. Stateful protocol requires memory allocation in order to store data.
2. In the event of inefficient maintenance of session storage, there can be a
 decrease in the performance. It requires continuous management of the service’s 
 full lifecycle.
3.These protocols are highly dependent on the server-side state.
4. Usually, stateful protocols require backing storage.
5. Since the state is maintained, stateful is not very secure.


//           What is Stateless?

A stateless protocol is one in which the receiver is not required to keep session
 state from previous requests. The sender sends relevant session state to the 
 receiver in such a way that each request may be interpreted without reference
  to prior requests’ session state, which the receiver retains. HTTP (HyperText
     Transfer Protocol) is an example of Stateless Protocol because each request 
     is executed independently of the requests that came before it. This implies 
that once a transaction is completed, the connection between the browser and the 
server is also terminated.

//   ADVANTAGES
1-Since the monitoring system does not have to look beyond a single request to
 determine its whole nature, visibility of the protocol is improved. 
2-It is easier to recover from partial failures like crashes since no state is
 maintained, which improves reliability. 
3.-The server does not have to store session state between requests, hence,
 scalability  is enhanced as deploying the services to any number of servers is
  possible, and implementation is simplified even more.
4-It only necessitates a small number of resources because the system doesn’t
 need to keep track of communication over numerous lines, as well as session 
 information.
5-In Stateless Protocols, each individual communication is unconnected and
 distinct from the ones that come before or after it.
6-Here, each packet of data travels on its own. There is no need to refer to
 another packet in these packets. */
![garuda logo](assets/garuda_title.png?raw=true "title")
> ### A multiplayer game server framework for BEAM
  > Build and run game servers intuitively.
  
Garuda  is an Authoritative Multiplayer Game Server for phoenix framework.

The project focuses on providing a *game framework system*, *matchmaking*, *real-time game-session monitoring system* and ease of usage both on server-side and client-side, by leveraging the powerful phoenix framework.   

The goal of the framework is to be a standard netcode & matchmaking solution for all type of games. Let's build and run game servers, in a much more intuitive way.

Current feature list. 
 -   WebSocket-based communication (Will support more transports layer in future, thanks to phoenix)
 -   Simple API in the server-side and client-side.
 -  Game specific module behaviours.
 -   Matchmaking clients into game sessions.
 -   Realtime interactive game session monitoring. 
## Deep Dive
Major components that builds up  Garuda.
### Framework System
Frameworks systems are basically a group of behaviours and utilities that allows developers to focus on writing game logic, rather than spending time on networking, game process management, cleanup etc..
Main behaviours, 
 - Garuda.GameSocket -> for user_socket.ex  
 - Garuda.GameChannel -> for channel modules
 - Garuda.GameRoom -> for core game logic process
Frameworks abstracts the redundant part of netcode that developer has to do for every new game server. It also allows developers to view the phoenix app more from game specific view than normal api framework.
### MatchMaking System
Garuda comes inbuilt with a flexible matchmaking system. It supports creating matches between random players and also matches specified by the client.
### Realtime interactive game session monitoring
Garuda comes inbuilt with a live interactive game session monitoring system, which is very useful during development and can also use on production.
Monitoring is powered by phoenix live-view. 
Features.
 - Inspect live game room states.
 - Realtime Game specific stats.
 - Managing game rooms (ex disposing) from the dashboard itself.
 ### Client Side Support.
 Garuda ships with a javascript client **garudajs**, which allows easy communication with the server.
  

 
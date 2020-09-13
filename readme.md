![garuda logo](assets/garuda_title.png?raw=true "title")
# Garuda
> ### A multiplayer game server framework for phoenix.
  > Build and run game servers intuitively.
  
Garuda  is an Authoritative Multiplayer Game Server for phoenix framework.

The project focuses on providing a *game framework system*, *matchmaking*, *real-time game-session monitoring system* and ease of usage both on server-side and client-side, by leveraging the powerful phoenix framework.   

The goal of the framework is to be a standard netcode & matchmaking solution for all type of games. BEAM directly maps the use cases of a typical game server. So Let's build and run game servers, in a much more intuitive way.

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
  
## Repo Structure
 - garuda -> The core framework.
 - garudajs -> Javascript client.
 - tictactoe_client -> The client side game, built with phaser3 engine.
 - tictactoe_phx -> The game server for tictactoe game, using Garuda.
 ## Running Systems
 Documentations and how to run are in their own folder's readme.

# NOTE
### The Project is not complete and cannot be tested.

# garudajs
 Javascript client for Garuda.
## Installation

    npm install garudajs
## Usage

    let garudaClient = new Garuda(ws://localhost:4000)
Create garudaClient by giving the socket url as params

    Garuda.getGameChannel("tictactoe", {player_count: 2}, onGameChannel)

Returns a phoenix channel in the onGameChannel callback function, with the matchData.

    let gameChannel;
    function onGameChannel(game_channel, matchData) {
	    gameChannel = game_channel;
    }
    gameChannel.join()
	    .recieve("ok" => {"joined game channel successfully})
	    .receive("error" => {console.log("error")} 

gameChannel then works like a normal phoenix channel object. We can use all the functions of a channel onto gameChannel also.

# Garuda
## Usage

    defp deps do
    [
      {:garuda, git:  "https://github.com/spawnfest/garuda.git", branch:  "develop"}
    ]
### In user_socket.ex

    defmodule  DummyWeb.UserSocket  do
	    use  Garuda.GameSocket
        game_channel "room_name", DummyWeb.roomChannel,Dummy.gameRoom
### In channel module

    defmodule  DummyWeb.ClickerChannel  do
      use  Garuda.GameChannel
      
      alias  Dummy.ClickRoom
  
      @impl  true
      def  on_join(_params, _socket) do
      IO.puts("Player joined Clicker game")
      end
    
      @impl  true 
      def  authorized?(_params) do
        # auth code
      end
      
      # Handling event by typical handle_in
      @impl  true
      def  handle_in("click", _message, socket) do
      IO.puts("clicking")
      ClickRoom.on_click(id(socket))
      {:noreply, socket}
      end
      
      @impl  true
      def  on_leave(reason, _socket) do
      # leave callback, disposing rooom 
      end
    end


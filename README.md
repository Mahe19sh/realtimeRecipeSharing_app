# realtimeRecipeSharing_app
## A simple web app built with using React.js for frontend and Django for backend for sharing cooking recipes.

### The overall system design for online cooking recipe sharing chat app.

1. **Architecture overview**
     - Frontend : Reactjs for user interface.
     - Backend : Django for RestAPI and websocket communication.
     - Database : PostgreSQL , a RDBMS for storing recipes and chat messages.
2. **Components breakdown**
     - Frontend components :
       - Recipes list : Displays a list of recipes which are fetched from backend
       - Chat : Real-time chat interface using WebSocket.
       - AddRecipe : Form to submit new recipes.
     - Backend components :
       - Models : for 'Recipes' and 'Chat mesaages'.
       - Serializaers : Converts models to JSON format.
       - Views : Handles RestAPI requests for recipes.
       - Consumer : Handle WebSocket communication.

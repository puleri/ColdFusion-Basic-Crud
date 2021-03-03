
# Lucky Number JS/ColdFusion Client
This application works as a client, serving users to post, view, delete, and eventually update their lucky numbers.

---

### Planning Strategy
In the first days of strategizing, I read countless documentation from the official Adobe ColdFusion page, from OrtuSolutions, and watching official videos on Youtube. Next came downloading and practicing basic uses of CommandBox and starting a CF project. When running the local server via CommandBox for the first time and using the <cfoutput> tags I began feeling confident with the new language. It was at this point I started to create the backend with Express which I am comfortable with. The point being to introduce less unknown variables to the learning process of learning ColdFusion. When connecting the front and backend I began seeing handshake issues and diverted to fixing this in Node and JS.

We decided to produce a minimal viable product before completing the Socket Middleware but still managed to establish a Socket Connection and Disconnect linked to the Chat Index CRUD Action.

---

### Important Links
- [Client Repository](https://github.com/Mandeloreann/chat-room-express-2)
- [Deployed Client](https://mandeloreann.github.io/chat-room/#/)
- [Deployed API](https://chatroommm.herokuapp.com/)

---

#### Technologies Used
- ColdFusion
- Express
- JavaScript

---

#### Unsolved Issues
- In the time allotted, I was not able to fully finish a working CRUD application with the amount of ColdFusion I wanted to import.

 - I was also interested in talking with peers about ColdFusion but none of them were familiar which left me mostly confined to the resources listed above.

---

#### Commands
| Terminal | Action   | Command               |
|--------|--------|------------------------|
| CommandBox | starts local host   | `server start cfengine=adobe@2018`             |
| CommandBox | stops local host   | `server stop --all`             |
| Node.js | starts local host | `grunt serve`            |
| Node.js | stops local host  | ctrl + c   |
| Node.js | deploy    | `grunt deploy`             |


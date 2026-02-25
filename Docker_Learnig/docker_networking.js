// Docker Networking
// in Docker Networking allow containers to communicate with each other and the outside of the world.

// Docker provides several networking methods to controll how each container Interact

// 1) Bridge Network (default):
// running container without specifying the network. Docker connects it to the default (bridge network).

// 2) Host Network:
// 2) None Network:
// 2) Custom Network:
// You can create custom networks in Docker, where containers can communicate using their container names (e.g., mongodb-container, app-container). These networks are often used to group related containers together, like in a multi-container setup for a MERN stack.
// 3) External Networks:
// Docker also supports connecting to external networks (like the host network or a pre-existing network from another application).
// Docker Basics
// Docker is a platform that simplifies building, packaging, and deploying applications in lightweight, portable containers. Key components include Dockerfiles (build instructions), Images (snapshots), and Containers (running instances). Essential commands cover pulling images, building from Dockerfiles, running containers with port mapping, and managing both containers and images.


// What are Containers?
// Containers are lightweight, portable, and isolated software environments that package applications with their dependencies for consistent execution across different platforms. They streamline development, deployment, and management while ensuring applications run reliably regardless of underlying infrastructure.


// Bare Metal vs VM vs Containers
// Bare metal runs applications directly on hardware with maximum performance but limited flexibility. VMs use hypervisors to run multiple OS instances with strong isolation but higher overhead. Containers share the host OS kernel, providing lightweight isolation with better resource efficiency than VMs while maintaining portability.

// ========== Underlying Technologies ============ //

// What are Namespaces? This creates the isolated environments for containers

// cgroups (controls group) these are the linux kernel which manages the system resources like CPU,memory, and I/O for process groups

// ========= Docker Components ============= //

// There are mainly three Docker components
// 1) DockerFile: A text file containing instructions (commands) to build a Docker Image
// 2) Docker Image: A snapshot of a container, created Dockerfile. images are stored in the Docker Hub
// 3) Docker Container: A running instance of a Docker image

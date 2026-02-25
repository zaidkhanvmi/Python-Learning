// ========= Docker Commands

// 1) docker pull <image>: This command will pull the image from the registry Docker Hub
// 2) docker build -t <image_name> <path>: Build an image from a dockerFile and give a accurate path
// 3) docker image ls: List of all images available on your local machine
// 4) docker run -d -p <host_port>:<container_port> --name <container_name> <image> 
// -p this is also called Port Mapping 
// -d means dettached
// 5) docker container ls: List of running containers
// 6) docker container rm <container_name || container_id>
// 7) docker image rm <image_name || image_id>
// for the shorthand => docker rm <container_name> docker rmi <image_name>
// rm => remove, rmi => remove image

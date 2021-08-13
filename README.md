## A sample bootstrap for kubernetes and skaffold with connection to mongodb

**Skaffold needs to be installed**

Steps

1. build docker image of your app (inside the dockerfile)

2. if you need to add new apps, create the infra files with their services as well.(please note all of the services using a db needs a db service attached to it)

3. cd into your master folder and run

> skaffold dev

### Kubernetes deployment instructions

1. Create the docker file
2. run
   > docker build -t <tag-name> ./

3.? Push to dockerhub 4. create a deployment for kubernetes (latest does not seem to work for some reason) 5. these commands in sequence

```sh
kubectl apply -f <yourfile>.yaml
```

### Some helpful commands

```sh
kubectl get pods
```

```sh
kubectl describe pod <youdpodname>
```

```sh
kubectl describe pod <yourpodname>
```

```sh
kubctl rollout restart deployment <yourdeplfile>
```

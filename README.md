# log-sensor-express (in progress)
Logs sensor data (DHT11) in local data base (sqlite), visualize in browser (express and chart.js) and backup online in firebase. </br>

Main reference (e-Book): Full Stack Web Development with Raspberry Pi 3 (Packt).

My site: https://cv.antonello.com.br

# Instruções

## First, install the curl command:
sudo apt-get update && sudo apt-get install curl
## Then, install nvm via the install script:
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
nvm --version __
nvm install 6 __

## Will look like this:
pi@raspberrypi:~ $ node -v __
v6.10.2 __
pi@raspberrypi:~ $ npm -v __
3.10.10 __

</h4>Create git</h4>
mkdir sensor-project
mkdir sensor-project/hello-world
touch sensor-project/hello-world/hello-world.js
cd sensor-project
git init

# Add all files to staging area
git add -A

# Commit to repository. Mark the commit with a message
git commit -m "Initialized first project"

# Add the remote link
git remote add origin https://my-remote-repo-url.com/sensor-project.git

# Push all changes to the remote repo
git push origin master

Now, all your code is present on the cloud. All you have to do now is go into your Raspberry Pi's Terminal and run this:

git clone https://my-remote-repo-url.com/sensor-project.git
cd ~/sensor-project

You now have the project fully cloned on your Pi. To make changes and reflect them on your Pi, first, make the changes to files or folders on your computer and then add and push the changes to the repository:

# Run these commands after making changes to code files
git add -A
git commit -m "Made some changes"
git push origin master
Then on your Pi, run this:

cd ~/sensor-project
git pull origin master

<h4>Create your express project </h4>
mkdir server
cd server
npm init // script that creates package.json, etc...
echo "node_modules" >> .gitignore


After that and with index.js completed you can run the server
node server (server is the folder where you have the index.js)



### APENDICE Github
#Minha sugestao é criar o repositorio online, fazer o clone para baixar para a maquina local, incluir e alterar os arquivos e depois add, commit e push...
#Use git pull pra atualizar da nuvem para local em repo já criado
##Comandos
#Change the current working directory to your local project.
#git init #Initialize the local directory as a Git repository.
#git add . # Adds the files in the local repository and stages (organize) them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.
#git commit -m "First commit" # Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
#git remote add origin remote repository URL # Sets the new remote
#git remote -v ## Verifies the new remote URL
#git push origin master # Pushes the changes in your local repository up to the remote repository you specified as the origin
#Importing a Git repository using the command line
#git clone https://external-host.com/extuser/repo.git # cria a pasta repo.git
#cd repo.git
#git push --mirror https://github.com/ghuser/repo.git # Pushes the mirror to the new GitHub repository
#cd .. E rm -rf repo.git # apaga a pasta temporaria
















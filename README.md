# log-sensor-express (in progress)
Logs sensor data (DHT11) in local data base (sqlite), visualize in browser (express and chart.js) and backup online in firebase. </br>
Main reference (e-Book): Full Stack Web Development with Raspberry Pi 3 (Packt).
My site: https://cv.antonello.com.br

<h3>Instruções</h3>


First, install the curl command:
sudo apt-get update && sudo apt-get install curl

Then, install nvm via the install script:
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

nvm --version

nvm install 6

Will look like this:
pi@raspberrypi:~ $ node -v
v6.10.2
pi@raspberrypi:~ $ npm -v
3.10.10

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


















<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Location Tracker</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ArifSanaullah/React-Native)](https://github.com/ArifSanaullah/React-Native/issues)
[![GitHub Pull Requests](https://img.shields.io/badge/pulls-0-yellow)](https://github.com/ArifSanaullah/React-Native/pulls)
[![License](https://img.shields.io/github/license/ArifSanaullah/React-Native)](/LICENSE)

</div>

---

<p align="center">It's a small project coded by me. The MVP is just tracking the route of a user while he is moving. Once tracking is done, the route is then displayed on the home screen and user can view that saved track whenver he wants that will show him the map he have been moving through.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

A simple location tracker.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

To run this project you need to have nodejs installed. Please refer to [nodejs official website](https://nodejs.org/en/) to install it.

### Installing

To run this project locally on your machine you need to run following commands in your command line or terminal

Say what the step will be

```
git clone https://github.com/ArifSanaullah/React-Native
```

then change current working directory by follwing command

```
cd React-Native
```

in that directory run to install all the dependencies

```
npm install
```

if you are not using npm as package manager then you'll have to install the dependencies with your installed package manager.

once installed, You will have to run the start script by executing the command

```
npm start
```

Once command executed successfully a new browser tab will open in your default browser with a QR code at the bottom left corner.

From now on you've got 3 options to run the application.

1. Running on android emulator
2. Running on iOS simulator
3. Running on your physical android/iOS device

I'm using the last one as it is easier to setup.
On your physical device you have to install expo application. You can download expo app from google playstore(android) or app store(ios).

After app's installation done. Open up the app tap on the top most option in tha app(Scan QR code) and scan the QR code displayed in your browser's tab.

After scanning the code app bundle will automatically start to build up and in a few seconds application will be on your mobile phone.

## 🎈 Usage <a name="usage"></a>

1. At first you will see a Sign In or Sign Up screen. If you already have an account in the app you can signin using that one or you can navigate to sign up screen by pressing the link given after the Sign Up button. From sign in screen you will pass your email and a password and you will be directed to the home screen.
2. At home screen you will see all of your saved tracks. If you are a new user, You'll see a blank screen. Now there is a best time to create a track of your own.
3. Navigate to Add Track screen by pressing the button placed at the bottom center of the screen.
4. In there, You'll see a map pointing at your current location, an input field for the name of your track and a button to start the tracking.
5. Enter the name of your track(e.g. Going to super market) and press Start Recording button and start moving.
6. As you continue to move you'll see a black colored line drawn on you map. This is the line pointing your taken path throughout your entire track.
7. Reached at your destinition? press the Stop button right after the input field.
8. As soon as you press the Stop button, there will be another button saying Save Track.
9. Once the track is saved you'll be redirected to the home screen and your saved track will be over there with the title you passed in the input field.
10. You can tap on that title and see the route you took while you were moving toward your destinition.
11. To Sign Out press the Account button placed at the bottom right corner of the screen and press the Sign out button in that screen. You will be redirected to Sign In screen.

## 🚀 Deployment <a name = "deployment"></a>

To deploy this, I used Google cloud platform and Kubernetes. It is great application for your application if you are looking if you are looking for auto scaling and load balancing.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJS](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Kubernetes](https://kubernetes.io/) - Container-orchestration system
- [Docker](https://www.docker.com/) - Containerization platform

## ✍️ Authors <a name = "authors"></a>

- [@ArifSanaullah](https://github.com/ArifSanaullah) - Idea & Initial work
  See also the list of [contributors](https://github.com/ArifSanaullah/React-Native/graphs/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References

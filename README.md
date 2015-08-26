######################
###    x-Square    ###
######################

This app is supposed to be a somewhat basic CRUD application with user authentication.The goal is a solid API which can be used to build out web and mobile applications. The general purpose of the app is for people to record and keep track of "adventures". I'd eventually like to look into seeing how difficult it would be to make some sort of sharable feature for things like facebook and twitter.

The example we have used so far is recording a dive. The diver is able to recordthings like the location, name of divemaster and boat captain or charter if applicable, record or add things like pictures or sea life from the dive. Also tag other divers that they were with. This would record the entire experience and then allow them to share it via other social media and allow other people to come check out what they've done.

### Install an app

Run the following command in root directory of an app in command prompt.

###### *Install node packages*

server/ npm install

###### *Install bower components*

client/src/ bower install

### Run an app

###### *Run Server*

Run the following command in root directory of an app in command prompt.

server/ node server.js

You can see the port number in command prompt after successful run

You can change the settings in server/config/config.js file

Change email id in server/config/config.js which will be used to send account credential when new account is created.

### *User Story*

	1. Register new user. Registration requires a valid email address which will be used as his username.

	2. An email address can only be registered once.

	3. After registration a verification link is send to user email address.

	4. Verify your account by clicking on link send to your email address and on successful verification you will be redirected to login page.

	5. If you are not verified your account after creation, you will not be allowed to land to dashboard after success login.

	6. You can only go to dashboard if your account is verified.

	7. Will have the option to resend the password to registered email address in case you forget.

	8. Will also have the option to resend verification link to registered email address to verify account.


### *API Available*

###### *Create User*

	POST: http://localhost:8000/user

	{
	"userName": "email@x-square.com",
	"password": "passwd"
	}

An email is send to email@domain.com to verify account created. Email contains a verification link which on click will verify your account and redirect to login page.

Verification Link will look like http://127.0.0.1:8000/verifyEmail/token, where verifyEmail is the url for login page and token you get is used to verify account. Using token you get you need to hit the below api

###### *Verify User*

	POST: http://localhost:8000/verifyEmail

	Authorization Header: Bearer token

###### *Resend Verification Email*

	POST: http://localhost:8000/resendVerificationEmail

	{
	"userName": "email@x-square.com",
	"password": "passwd"
	}

###### *User Login*

	POST: http://localhost:8000/login

    {
	"userName": "email@x-square.com",
	"password": "passwd"
	}

###### *Forgot Password*

	POST: http://localhost:8000/forgotPassword

    {
	"userName": "email@x-square.com"
	}

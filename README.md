# NodeJs Login, Signup, and Dummy Data Authorisation ☋
 
A Node.js project for implementing login, signup, JWT token authentication, and providing dummy data as endpoints. These functionalities can be utilized in various applications, including web and Android applications.

## How To Use This Project

1. If you already have Node.js configured on your machine, that's great! You're already set up as a developer. If not, please use this link to configure Node.js   "https://www.youtube.com/watch?v=qYwLOXjAiwM", or you can choose any other tutorial available on the web according to your convenience.
2. Download the Zip Folder "https://github.com/adarshkesarwani006/Node_auth_code" on your machine.
3. Open it on any IDE most preferably Visual Code.
4. Load the Extensions asked by your IDE if needed.
5. Open Terminal and change your directory to the folder where "app.js" file is there using cd command and then run your app.js using command.
    ```bash
    node app.js 👈
    ```   
6. After that, some lines of terminal code will run  and you will see the following sets of lines at the end.
    ```bash
    PS C:\Users\hp\Desktop\node_ply_picker> node app.js      
    Server is running on http://127.0.0.1:3000 👈
    ```
    Note: The file path may vary depending on the location of your files.
7. Just click on that server link "http://127.0.0.1:3000/" or use CTRL+click if single click doesn't work.
8. After that the Node program will automatically start on your Chrome Browser or Default Browser where you will found white screen with a message "Cannot GET\". See Step 9.

## Testing

9. As this is a node program is without UI so there will be nothing on browser, To test the endpoints or Node API follow below steps:
10. Download and install POSTMAN from "https://www.postman.com/downloads/"
11. Open Postman and click on the "+" sign. In the opened window, select the method "POST" and enter the URL "http://127.0.0.1:3000/register". Then, in the Body section, select form-data (indicated by green dots). Enter the username and password, and click "Send". You will receive a "User Registered Successfully" response. Refer to the image below for everything written in step 11.

    ![image_2024_02_12T05_13_46_958Z](https://github.com/adarshkesarwani006/Node_auth_code/assets/75213719/83524c67-017d-438d-b4fc-c75f8178b44b)

12. The steps remain the same, only the URL changes to "http://127.0.0.1:3000/login" for logging in. Refer to the image below to check the Login endpoint or API.

    ![image_2024_02_12T05_14_06_022Z](https://github.com/adarshkesarwani006/Node_auth_code/assets/75213719/a7b3916e-cde1-4c5e-94d2-3e175e3426cc)

13. Now, copy the token you received during login. Then, use the following URL: "http://127.0.0.1:3000/data?token=[paste your copied token here without these square brackets]". Change the method to "GET" and hit Send, you will receive your dummy data in response. Refer to the image below for passing credentials.

    ![image_2024_02_12T05_20_24_333Z](https://github.com/adarshkesarwani006/Node_auth_code/assets/75213719/2b5f3a9a-d1a2-4e86-a4bb-732db8323be1)

14. And it's done! Congratulations!🎉 You've successfully created your first Node.js authorization app with endpoints/APIs. Well done!

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. 🎃

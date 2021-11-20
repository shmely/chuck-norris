# to run the application:
1. clone the branch from github: https://github.com/shmely/chuck-norris.git
2. open project folder with visual studio code.
3. run on the teminal 'npm start';
4. open browser on: http://localhost:3000
5. start playing...

# remarks:
1. update from 21/11/2021 evening ,the chuk norris api not working.(yes it sound wierd but it's the truth it wroks yesterday also     test   it with postman).
    * so the code calling to the https service is commented.
    * if the service is working in the when you check it you can uncomment the call to the service, and I hop it's working becasue I  did not check it.
2. the filter and the sort arrow svg was not download correctly so I download other svg.
3. I did not use redux because their is no data updated.
4. when I finish the test I was thinking that I did not take care of the refresh page and the state of the data,
   (I would have done it with query params and for each params i save in storage the result and load it on refresh)
hope I did not forget anything. 

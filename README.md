# Technical Sample

As part of your application, please submit a small code sample hosted on your favorite code repository hosting service (e.g. Github). The code sample should either be:

- A working web application in Python, Ruby, or Javascript which includes a README of what the web application does. If the web application is a shared group project, please note the portions you specifically contributed.
  
(OR) -

- If you don’t have a current code sample you can share, please write a small web application in one of the above languages (Python/Ruby/Javascript). The application only needs to do the following:
  -  Accept a POST request to the route “/test”, which accepts one  argument “string_to_cut”
  - Return a JSON object with the key “return_string” and a string containing every third letter from the original string

Note: To see expected behavior you can test against a current working example with the command: curl -X POST https://lyft-interview-test.glitch.me/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'

(OR) -  

- Code for a working app/feature developed on iOS, using Swift, which includes a README of what the app or feature does, and a couple of app-screenshots of what the functionality would look like visually to the user
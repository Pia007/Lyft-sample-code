// import express from express and assign it to a variable
const express = require('express');
const res = require('express/lib/response');

// create the port 
const PORT = process.env.PORT || 3000;


// initialize the app
const app = express();

// give app ability to parse json data
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Requirement: Return a JSON object with the key “return_string” and a string containing every third letter from the original string
const getThirdLetter = (str) => {
    let everyThirdLetter = '';
    const newArr = str.split('');
    for (let i = 2; i < newArr.length; i += 3) {
        if ((i + 1) % 3 === 0) {
            everyThirdLetter += newArr[i];
        }
    }
    return {return_string: everyThirdLetter };
    
}

// Reqirement: Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
app.post(
    '/test',
    (req, res) => {
        const { string_to_cut } = req.body;    // assign string_to_cut object to the body of the request

        if(string_to_cut && typeof string_to_cut === 'string') {       // is there a request and is it a string
            res.json(getThirdLetter(string_to_cut))                    // truthy, return the object with the key “return_string” and a string containing every third letter from the original string
        } else  {
            err = new Error(`Expected Input: { string_to_cut: string }`); 
            res.statusCode = 400;
            res.send({error: err.message});
        }
    }
);


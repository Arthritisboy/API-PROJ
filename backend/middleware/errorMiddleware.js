// functions that execute during the request response cycle (req, res).

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500 /* this line of code sets the statusCode 
                                                              * variable to the value of res.statusCode 
                                                              * if it exists, otherwise it sets it to 500.*/
                                                             

    res.status(statusCode); // and here we initialize that line of code.

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = { errorHandler };
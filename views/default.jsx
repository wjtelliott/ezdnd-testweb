const React = require('react');
const path = require('path');

const Default = html => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{html.title || process.env.TITLE}</title>
                {/* <!-- Latest compiled and minified CSS --> */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
                {/* <!-- jQuery library --> */}
                {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */}
                {/* <!-- Latest compiled JavaScript --> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
                <link rel='stylesheet' href='/styles/main.css'/>
            </head>
            <body>
                <img className='db hero' src='/images/heroBackground.JPG' alt='A background picture for DnD'/>
                {html.children}
            </body>
        </html>
    );
};

module.exports = Default;
# stackup-digital
Technical Test for Stackup Digital to create a weather widget.
© 2021 Ian Curtis
Author: Ian Curtis

Built With:
• Visual Studio Code
• Wampserver

Tested On:
• Mozilla Firefox Version 87.0 (64-bit)
• Google Chrome Version 89.0.4389.90 (64-bit)
• Opera Version 74.0.3911.218 (64-bit)
• Microsoft Edge Version 89.0.774.63 (64-bit)

Responsive Design Tested Using Mozilla Firefox Responsive Design Tools

Installing

If you just want to see the widget working:

1.  Download the whole folder to the root folder of your local server. It is self-contained so;
2.  Open your browser and add /stackup-digital/ to the end of your local server url path.

As an example, I built the widget using WAMPServer, so I created a folder called stackup-digital in the www folder of WAMP.
In the browser, the path is localhost/stackup-digital/

If you want to implement the widget in an existing web page, please follow these instructions:

1.  Copy the weather-js and weather-css folders to the relevant folder of your web page.

2.  Add the following lines to the <head> section of your index file:
    <!--    CSS     -->
    <link rel="stylesheet" type="text/css" href="weather-css/styles.css">
    <!--    JavaScript      -->
    <script src="weather-js/scripts.js"></script>
    <!--    FONTS   -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,700&display=swap" rel="stylesheet">

3.  Add the following div to the <body> section at the point where you would like to place the widget:
    <div id="weather"></div>

4.  Open your browser and navigate to your website.

Happy widgeting!
Ian C.

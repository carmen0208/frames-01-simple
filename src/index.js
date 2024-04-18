const express = require('express');
const app = express();

// Define a route to handle requests for generating meta tags
app.get('/', (req, res) => {
  const metaTags = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta property="og:image" content="http://fc-dev-call.replit.app/image">
    <meta property="og:title" content="01 Simple Frame">
    <meta property="og:description" content="This is my simple frame, 101">
    <meta property="fc:frame" content="vNext">
    <meta property="fc:frame:image" content="http://fc-dev-call.replit.app/image">
    <meta property="fc:frame:button:1" content="Frame Doc">
    <meta property="fc:frame:button:1:action" content="link">
    <meta property="fc:frame:button:1:target" content="https://docs.farcaster.xyz">

    <meta property="fc:frame:button:2" content="Image">
    <meta property="fc:frame:button:2:action" content="link">
    <meta property="fc:frame:button:2:target" content="http://fc-dev-call.replit.app/image">
    
    <meta property="fc:frame:button:3" content="Frame Validator">
    <meta property="fc:frame:button:3:action" content="link">
    <meta property="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames">
    
    <meta property="fc:frame:button:4" content="Me">
    <meta property="fc:frame:button:4:action" content="link">
    <meta property="fc:frame:button:4:target" content="https://github.com/carmen0208">
    <!-- Add more meta tags as needed -->
    </head>
    <body>
    Hello World
    </body>
    </html>
  `;

  // Send the meta tags as a response
  res.send(metaTags);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

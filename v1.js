function sendDataToAPI() {
    // Gather necessary information
    var pageURL = window.location.href;
    var userAgent = navigator.userAgent;
    
    // Creating a unique identifier (using a simple example here)
    var domain = (new URL(pageURL)).hostname;
    var identifier = domain + '_' + userAgent; // Adjust as per your unique identifier requirements
    
    // Prepare data to send
    var data = {
        pageURL: pageURL,
        userAgent: userAgent,
        identifier: identifier
    };
    
    // Send data to PHP API
    var apiUrl = 'https://your-api-url.example.com'; // Replace with your API endpoint
    var xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Data sent successfully');
        }
    };
    xhr.send(JSON.stringify(data));
}

// Call the sendDataToAPI function every 2 seconds
setInterval(sendDataToAPI, 2000);

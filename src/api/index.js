/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

export const getData = (url, cb) => {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:9988' + url);

    request.onreadystatechange = function() {
        if(request.readyState === 4) {
			if(request.status === 200) {
				cb(JSON.parse(request.responseText));
			}
		}
	};

	request.send();
};

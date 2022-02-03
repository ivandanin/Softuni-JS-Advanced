function validate(object) {
    
    let validMethods = ['GET', 'POST', 'CONNECT', 'DELETE'];
    let uriRegex = /[\\w.]+/;
    let validHTTP = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messageRegex = /[<>\\&'"]+/;

    if (object.method == undefined ||
        !validMethods.includes(object.method)) {
       throw new Error('Invalid request header: Invalid Method');
   }

   if (object.uri == undefined ||
        !uriRegex.test(object.uri)) {
       throw new Error('Invalid request header: Invalid URI');
   }

   if (object.version == undefined ||
        !validHTTP.includes(object.version)) {
       throw new Error('Invalid request header: Invalid Version');
   }

   if (object.message == undefined ||
        object.message !== '' ||
         messageRegex.test(object.message)) {
       throw new Error('Invalid request header: Invalid Message');
   }
    return object;
}

validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
    });
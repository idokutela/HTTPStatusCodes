# HTTPStatusCodes
A list of HTTP status codes in typescript.

The codes are available individually as constants, or in grouped in
the categories:

 - 100s: Informational,
 - 200s: Success,
 - 300s: Redirection,
 - 400s: ClientError,
 - 500s: ServerError.

For example:

``` js
import * as HTTP from "HTTPStatusCodes";

HTTP.NOT_FOUND === 404; // For example

// Or:
HTTP.SeverError.NETWORK_AUTHENTICATION_REQUIRED === 511; 
```

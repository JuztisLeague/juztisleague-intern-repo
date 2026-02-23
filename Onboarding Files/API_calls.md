#  Making API Calls with Axios

It is useful to create a reusable Axios Instance since during API calls or functions used, it is easier and more convenient for developers to use this method by just calling the Instance. The ability to just call the instance rather than keep using different API functions repeatedly, which also prevents code duplication in the program or application.

The interceptors are for modifying every outgoing request before it's sent. This is pretty useful for authentication because you can automatically attach tokens, handle token expiration, and modify requests. This is in order automatically attaches a token every time you make a request and prevents requests from failing due to expired tokens.

If the API request times out, the server doesn't respond in time, and it throws a timeout error, another reason is that by initializing a timeout value, it is set for you to request within that time frame. To handle time out, you must use a try-catch block, set a retry mechanism, or increase the timeout if the API is slow.

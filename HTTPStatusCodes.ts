// codes and meanings from https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

/**
 * The server has received the request headers and the client should
 * proceed to send the request body (in the case of a request for
 * which a body needs to be sent; for example, a `POST`
 * request). Sending a large request body to a server after a request
 * has been rejected for inappropriate headers would be
 * inefficient. To have a server check the request's headers, a client
 * must send `Expect: 100-continue` as a header in its initial request
 * and receive a `100 Continue` status code in response before sending
 * the body. If the client receives an error code such as `403 (Forbidden)`
 * or `405 (Method Not Allowed)` then it shouldn't send the request's
 * body. The response `417 Expectation Failed` indicates that the
 * request should be repeated without the `Expect` header as it
 * indicates that the server doesn't support expectations (this is the
 * case, for example, of HTTP/1.0 servers).
 */
export const CONTINUE = 100;
export type CONTINUE = 100;

/**
 * The requester has asked the server to switch protocols and the
 * server has agreed to do so.
 */
export const SWITCHING_PROTOCOLS = 101;
export type SWITCHING_PROTOCOLS = 101;

/**
 * A [WebDAV](https://tools.ietf.org/html/rfc2518) request may
 * contain many sub-requests involving file operations, requiring a
 * long time to complete the request. This code indicates that the
 * server has received and is processing the request, but no response
 * is available yet. This prevents the client from timing out and
 * assuming the request was lost.
 */
export const PROCESSING = 102;
export type PROCESSING = 102;

/**
 * Used to return some response headers before final HTTP message.
 *
 * [RFC 8297](https://tools.ietf.org/html/rfc8297)
 */
export const EARLY_HINTS = 103;
export type EARLY_HINTS = 103;

/**
 * An informational response indicates that the request was received
 * and understood. It is issued on a provisional basis while request
 * processing continues. It alerts the client to wait for a final
 * response. The message consists only of the status line and optional
 * header fields, and is terminated by an empty line. As the HTTP/1.0
 * standard did not define any 1xx status codes, servers *must not* send
 * a 1xx response to an HTTP/1.0 compliant client except under
 * experimental conditions.
 */
export type Informational =
  | CONTINUE
  | SWITCHING_PROTOCOLS
  | PROCESSING
  | EARLY_HINTS;

/**
 * Standard response for successful HTTP requests. The actual response
 * will depend on the request method used. In a `GET` request, the
 * response will contain an entity corresponding to the requested
 * resource. In a `POST` request, the response will contain an entity
 * describing or containing the result of the action.
 */
export const OK = 200;
export type OK = 200;

/**
 * The request has been fulfilled, resulting in the creation of a new
 * resource.
 */
export const CREATED = 201;
export type CREATED = 201;

/**
 * The request has been accepted for processing, but the processing
 * has not been completed. The request might or might not be
 * eventually acted upon, and may be disallowed when processing
 * occurs.
 */
export const ACCEPTED = 202;
export type ACCEPTED = 202;

/**
 * The server is a transforming proxy that received a `200 OK` from
 * its origin, but is returning a modified version of the origin's
 * response.
 *
 * Since HTTP/1.1
 */
export const NON_AUTHORITATIVE_INFORMATION = 203;
export type NON_AUTHORITATIVE_INFORMATION = 203;

/**
 * The server successfully processed the request and is not returning
 * any content.
 */
export const NO_CONTENT = 204;
export type NO_CONTENT = 204;

/**
 * The server successfully processed the request, but is not returning
 * any content. Unlike a 204 response, this response requires that the
 * requester reset the document view.
 */
export const RESET_CONTENT = 205;
export type RESET_CONTENT = 205;

/**
 * The server is delivering only part of the resource (byte serving)
 * due to a range header sent by the client. The range header is used
 * by HTTP clients to enable resuming of interrupted downloads, or
 * split a download into multiple simultaneous streams.
 * [RFC 7233](https://tools.ietf.org/html/rfc7233)
 */
export const PARTIAL_CONTENT = 206;
export type PARTIAL_CONTENT = 206;

/**
 * The message body that follows is by default an XML message and can
 * contain a number of separate response codes, depending on how many
 * sub-requests were made.
 *
 * [WebDAV](https://tools.ietf.org/html/rfc4918)
 */
export const MULTI_STATUS = 207;
export type MULTI_STATUS = 207;

/**
 * The members of a DAV binding have already been enumerated in a
 * preceding part of the (multistatus) response, and are not being
 * included again.
 *
 * [WebDAV](https://tools.ietf.org/html/rfc5842)
 */
export const ALREADY_REPORTED = 208;
export type ALREADY_REPORTED = 208;

/**
 * The server has fulfilled a request for the resource, and the
 * response is a representation of the result of one or more
 * instance-manipulations applied to the current instance.
 *
 * [RFC 3229](https://tools.ietf.org/html/rfc3229)
 */
export const IM_USED = 226;
export type IM_USED = 226;

/**
 * This class of status codes indicates the action requested by the
 * client was received, understood, and accepted.
 */
export type Success =
  | OK
  | CREATED
  | ACCEPTED
  | NON_AUTHORITATIVE_INFORMATION
  | NO_CONTENT
  | RESET_CONTENT
  | PARTIAL_CONTENT
  | MULTI_STATUS
  | ALREADY_REPORTED
  | IM_USED;

/**
 * Indicates multiple options for the resource from which the client
 * may choose (via agent-driven content negotiation). For example,
 * this code could be used to present multiple video format options,
 * to list files with different filename extensions, or to suggest
 * word-sense disambiguation.
 */
export const MULTIPLE_CHOICES = 300;
export type MULTIPLE_CHOICES = 300;

/**
 * This and all future requests should be directed to the given URI.
 */
export const MOVED_PERMANENTLY = 301;
export type MOVED_PERMANENTLY = 301;

/**
 * Tells the client to look at (browse to) another URL. 302 has been
 * superseded by 303 and 307. This is an example of industry practice
 * contradicting the standard. The HTTP/1.0 specification
 * ([RFC 1945](https://tools.ietf.org/html/rfc1945)) required the client
 * to perform a temporary redirect (the original describing phrase was
 * "Moved Temporarily"), but popular browsers implemented 302 with the
 * functionality of a 303 See Other. Therefore, HTTP/1.1 added status
 * codes 303 and 307 to distinguish between the two
 * behaviours. However, some Web applications and frameworks use the
 * 302 status code as if it were the 303.
 *
 * (Previously "Moved temporarily")
 */
export const FOUND = 302;
export type FOUND = 302;

/**
 * The response to the request can be found under another URI using
 * the `GET` method. When received in response to a `POST` (or
 * `PUT`/`DELETE`), the client should presume that the server has received
 * the data and should issue a new `GET` request to the given URI.
 *
 * Since HTTP/1.1
 */
export const SEE_OTHER = 303;
export type SEE_OTHER = 303;

/**
 * Indicates that the resource has not been modified since the version
 * specified by the request headers `If-Modified-Since` or
 * `If-None-Match`. In such case, there is no need to retransmit the
 * resource since the client still has a previously-downloaded copy.
 *
 * [RFC 7232](https://tools.ietf.org/html/rfc7232)
 */
export const NOT_MODIFIED = 304;
export type NOT_MODIFIED = 304;

/**
 * The requested resource is available only through a proxy, the
 * address for which is provided in the response. For security
 * reasons, many HTTP clients (such as Mozilla Firefox and Internet
 * Explorer) do not obey this status code.
 */
export const USE_PROXY = 305;
export type USE_PROXY = 305;

/**
 * No longer used. Originally meant "Subsequent requests should use
 * the specified proxy."
 */
export const SWITCH_PROXY = 306;
export type SWITCH_PROXY = 306;

/**
 * In this case, the request should be repeated with another URI;
 * however, future requests should still use the original URI. In
 * contrast to how 302 was historically implemented, the request
 * method is not allowed to be changed when reissuing the original
 * request. For example, a `POST` request should be repeated using
 * another `POST` request.
 *
 * Since HTTP/1.1
 */
export const TEMPORARY_REDIRECT = 307;
export type TEMPORARY_REDIRECT = 307;

/**
 * The request and all future requests should be repeated using
 * another URI. 307 and 308 parallel the behaviors of 302 and 301, but
 * do not allow the HTTP method to change. So, for example, submitting
 * a form to a permanently redirected resource may continue smoothly.
 */
export const PERMANENT_REDIRECT = 308;
export type PERMANENT_REDIRECT = 308;

/**
 * This class of status code indicates the client must take additional
 * action to complete the request. Many of these status codes are used
 * in URL redirection.
 *
 * A user agent may carry out the additional action with no user
 * interaction only if the method used in the second request is `GET` or
 * `HEAD`. A user agent may automatically redirect a request. A user
 * agent should detect and intervene to prevent cyclical
 * redirects.
 */
export type Redirection =
  | MULTIPLE_CHOICES
  | MOVED_PERMANENTLY
  | FOUND
  | SEE_OTHER
  | NOT_MODIFIED
  | USE_PROXY
  | SWITCH_PROXY
  | TEMPORARY_REDIRECT
  | PERMANENT_REDIRECT;

/**
 * The server cannot or will not process the request due to an
 * apparent client error (e.g., malformed request syntax, size too
 * large, invalid request message framing, or deceptive request
 * routing).
 */
export const BAD_REQUEST = 400;
export type BAD_REQUEST = 400;

/**
 * Similar to 403 Forbidden, but specifically for use when
 * authentication is required and has failed or has not yet been
 * provided. The response must include a `WWW-Authenticate` header
 * field containing a challenge applicable to the requested resource.
 * 401 semantically means "unauthorised", the user does not have valid
 * authentication credentials for the target resource.
 *
 * Note: Some sites incorrectly issue HTTP 401 when an IP address is
 * banned from the website (usually the website domain) and that
 * specific address is refused permission to access a website.
 *
 * [RFC 7235](https://tools.ietf.org/html/rfc7235)
 */
export const UNAUTHORISED = 401;
export type UNAUTHORISED = 401;

/**
 * *Reserved for future use*. The original intention was that this
 * code might be used as part of some form of digital cash or
 * micropayment scheme, as proposed, for example, by GNU Taler, but
 * that has not yet happened, and this code is not usually
 * used. Google Developers API uses this status if a particular
 * developer has exceeded the daily limit on requests. Sipgate uses
 * this code if an account does not have sufficient funds to start a
 * call.  Shopify uses this code when the store has not paid their
 * fees and is temporarily disabled. Stripe uses this code for failed
 * payments where parameters were correct, for example blocked
 * fraudulent payments.
 */
export const PAYMENT_REQUIRED = 402;
export type PAYMENT_REQUIRED = 402;

/**
 * The request contained valid data and was understood by the server,
 * but the server is refusing action. This may be due to the user not
 * having the necessary permissions for a resource or needing an
 * account of some sort, or attempting a prohibited action
 * (e.g. creating a duplicate record where only one is allowed). This
 * code is also typically used if the request provided authentication
 * via the `WWW-Authenticate` header field, but the server did not
 * accept that authentication. The request should not be repeated.
 */
export const FORBIDDEN = 403;
export type FORBIDDEN = 403;

/**
 * The requested resource could not be found but may be available in
 * the future. Subsequent requests by the client are permissible.
 */
export const NOT_FOUND = 404;
export type NOT_FOUND = 404;

/**
 * A request method is not supported for the requested resource; for
 * example, a `GET` request on a form that requires data to be presented
 * via `POST`, or a `PUT` request on a read-only resource.
 */
export const METHOD_NOT_ALLOWED = 405;
export type METHOD_NOT_ALLOWED = 405;

/**
 * The requested resource is capable of generating only content not
 * acceptable according to the Accept headers sent in the request.
 */
export const NOT_ACCEPTABLE = 406;
export type NOT_ACCEPTABLE = 406;

/**
 * The client must first authenticate itself with the proxy.
 *
 * [RFC 7235](https://tools.ietf.org/html/rfc7235)
 */
export const PROXY_AUTHENTICATION_REQUIRED = 407;
export type PROXY_AUTHENTICATION_REQUIRED = 407;

/**
 * The server timed out waiting for the request. According to HTTP
 * specifications: "The client did not produce a request within the
 * time that the server was prepared to wait. The client MAY repeat
 * the request without modifications at any later time."
 */
export const REQUEST_TIMEOUT = 408;
export type REQUEST_TIMEOUT = 408;

/**
 * Indicates that the request could not be processed because of
 * conflict in the current state of the resource, such as an edit
 * conflict between multiple simultaneous updates.
 */
export const CONFLICT = 409;
export type CONFLICT = 409;

/**
 * Indicates that the resource requested is no longer available and
 * will not be available again. This should be used when a resource
 * has been intentionally removed and the resource should be
 * purged. Upon receiving a 410 status code, the client should not
 * request the resource in the future. Clients such as search engines
 * should remove the resource from their indices. Most use cases do
 * not require clients and search engines to purge the resource, and a
 * "404 Not Found" may be used instead.
 */
export const GONE = 410;
export type GONE = 410;

/**
 * The request did not specify the length of its content, which is
 * required by the requested resource.
 */
export const LENGTH_REQUIRED = 411;
export type LENGTH_REQUIRED = 411;

/**
 * The server does not meet one of the preconditions that the
 * requester put on the request header fields.
 */
export const PRECONDITION_FAILED = 412;
export type PRECONDITION_FAILED = 412;

/**
 * The request is larger than the server is willing or able to
 * process. Previously called "Request Entity Too Large".
 *
 * [RFC 7232](https://tools.ietf.org/html/rfc7232)
 */
export const PAYLOAD_TOO_LARGE = 413;
export type PAYLOAD_TOO_LARGE = 413;

/**
 * The URI provided was too long for the server to process. Often the
 * result of too much data being encoded as a query-string of a `GET`
 * request, in which case it should be converted to a `POST`
 * request. Called "Request-URI Too Long" previously.
 *
 * [RFC 7231](https://tools.ietf.org/html/rfc7231)
 */
export const URI_TOO_LONG = 414;
export type URI_TOO_LONG = 414;

/**
 * The request entity has a media type which the server or resource
 * does not support. For example, the client uploads an image as
 * image/svg+xml, but the server requires that images use a different
 * format.
 *
 * [RFC 7231](https://tools.ietf.org/html/rfc7231)
 */
export const UNSUPPORTED_MEDIA_TYPE = 415;
export type UNSUPPORTED_MEDIA_TYPE = 415;

/**
 * The client has asked for a portion of the file (byte serving), but
 * the server cannot supply that portion. For example, if the client
 * asked for a part of the file that lies beyond the end of the
 * file. Called "Requested Range Not Satisfiable" previously.
 *
 * [RFC 7233](https://tools.ietf.org/html/rfc7233)
 */
export const RANGE_NOT_SATISFIABLE = 416;
export type RANGE_NOT_SATISFIABLE = 416;

/**
 * The server cannot meet the requirements of the `Expect request-header`
 * field.
 */
export const EXPECTATION_FAILED = 417;
export type EXPECTATION_FAILED = 417;

/**
 * This code was defined in 1998 as one of the traditional IETF April
 * Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol,
 * and is not expected to be implemented by actual HTTP servers. The
 * RFC specifies this code should be returned by teapots requested to
 * brew coffee. This HTTP status is used as an Easter egg in some
 * websites, including Google.com.
 *
 * [RFC 2324](https://tools.ietf.org/html/rfc2324)
 * [RFC 7168](https://tools.ietf.org/html/rfc7168)
 */
export const IM_A_TEAPOT = 418;
export type IM_A_TEAPOT = 418;

/**
 * The request was directed at a server that is not able to produce a
 * response[56] (for example because of connection reuse).
 *
 * [RFC 7540](https://tools.ietf.org/html/rfc7540)
 */
export const MISDIRECTED_REQUEST = 421;
export type MISDIRECTED_REQUEST = 421;

/**
 * The request was well-formed but was unable to be followed due to
 * semantic errors.
 *
 * [WebDAV, RFC 4918](https://tools.ietf.org/html/rfc4918)
 */
export const UNPROCESSABLE_ENTRY = 422;
export type UNPROCESSABLE_ENTRY = 422;

/**
 * The resource that is being accessed is locked.
 *
 * [WebDAV, RFC 4918](https://tools.ietf.org/html/rfc4918)
 */
export const LOCKED = 423;
export type LOCKED = 423;

/**
 * The request failed because it depended on another request and that
 * request failed (e.g., a PROPPATCH).
 *
 * [WebDAV, RFC 4918](https://tools.ietf.org/html/rfc4918)
 */
export const FAILED_DEPENDENCY = 424;
export type FAILED_DEPENDENCY = 424;

/**
 * Indicates that the server is unwilling to risk processing a request
 * that might be replayed.
 *
 * [RFC 8470](https://tools.ietf.org/html/rfc8470)
 */
export const TOO_EARLY = 425;
export type TOO_EARLY = 425;

/**
 * The client should switch to a different protocol such as TLS/1.0,
 * given in the Upgrade header field.
 */
export const UPGRADE_REQUIRED = 426;
export type UPGRADE_REQUIRED = 426;

/**
 * The origin server requires the request to be conditional. Intended
 * to prevent the 'lost update' problem, where a client `GET`s a
 * resource's state, modifies it, and PUTs it back to the server, when
 * meanwhile a third party has modified the state on the server,
 * leading to a conflict.
 *
 * [RFC 6585](https://tools.ietf.org/html/rfc6585)
 */
export const PRECONDITION_REQUIRED = 428;
export type PRECONDITION_REQUIRED = 428;

/**
 * The user has sent too many requests in a given amount of
 * time. Intended for use with rate-limiting schemes.
 *
 * [RFC 6585](https://tools.ietf.org/html/rfc6585)
 */
export const TOO_MANY_REQUESTS = 429;
export type TOO_MANY_REQUESTS = 429;

/**
 * The server is unwilling to process the request because either an
 * individual header field, or all the header fields collectively, are
 * too large.
 *
 * [RFC 6585](https://tools.ietf.org/html/rfc6585)
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
export type REQUEST_HEADER_FIELDS_TOO_LARGE = 431;

/**
 * A server operator has received a legal demand to deny access to a
 * resource or to a set of resources that includes the requested
 * resource. The code 451 was chosen as a reference to the novel
 * Fahrenheit 451 (see the Acknowledgements in the RFC).
 *
 * [RFC 6585](https://tools.ietf.org/html/rfc6585)
 */
export const UNAVAILABLE_FOR_LEGAL_REASONS = 451;
export type UNAVAILABLE_FOR_LEGAL_REASONS = 451;

/**
 * This class of status code is intended for situations in which the
 * error seems to have been caused by the client. Except when
 * responding to a `HEAD` request, the server should include an entity
 * containing an explanation of the error situation, and whether it is
 * a temporary or permanent condition. These status codes are
 * applicable to any request method. User agents should display any
 * included entity to the user.
 */
export type ClientError =
  | BAD_REQUEST
  | UNAUTHORISED
  | PAYMENT_REQUIRED
  | FORBIDDEN
  | NOT_FOUND
  | METHOD_NOT_ALLOWED
  | NOT_ACCEPTABLE
  | PROXY_AUTHENTICATION_REQUIRED
  | REQUEST_TIMEOUT
  | CONFLICT
  | GONE
  | LENGTH_REQUIRED
  | PRECONDITION_FAILED
  | PAYLOAD_TOO_LARGE
  | URI_TOO_LONG
  | UNSUPPORTED_MEDIA_TYPE
  | RANGE_NOT_SATISFIABLE
  | EXPECTATION_FAILED
  | IM_A_TEAPOT
  | MISDIRECTED_REQUEST
  | UNPROCESSABLE_ENTRY
  | LOCKED
  | FAILED_DEPENDENCY
  | TOO_EARLY
  | UPGRADE_REQUIRED
  | PRECONDITION_REQUIRED
  | TOO_MANY_REQUESTS
  | REQUEST_HEADER_FIELDS_TOO_LARGE
  | UNAVAILABLE_FOR_LEGAL_REASONS;

/**
 * A generic error message, given when an unexpected condition was
 * encountered and no more specific message is suitable.
 */
export const INTERNAL_SERVER_ERROR = 500;
export type INTERNAL_SERVER_ERROR = 500;

/**
 * The server either does not recognize the request method, or it
 * lacks the ability to fulfil the request. Usually this implies
 * future availability (e.g., a new feature of a web-service API).
 */
export const NOT_IMPLEMENTED = 501;
export type NOT_IMPLEMENTED = 501;

/**
 * The server was acting as a gateway or proxy and received an invalid
 * response from the upstream server.
 */
export const BAD_GATEWAY = 502;
export type BAD_GATEWAY = 502;

/**
 * The server cannot handle the request (because it is overloaded or
 * down for maintenance). Generally, this is a temporary state.
 */
export const SERVICE_UNAVAILABLE = 503;
export type SERVICE_UNAVAILABLE = 503;

/**
 * The server was acting as a gateway or proxy and did not receive a
 * timely response from the upstream server.
 */
export const GATEWAY_TIMEOUT = 504;
export type GATEWAY_TIMEOUT = 504;

/**
 * The server does not support the HTTP protocol version used in the
 * request.
 */
export const HTTP_VERSION_NOT_SUPPORTED = 505;
export type HTTP_VERSION_NOT_SUPPORTED = 505;

/**
 * Transparent content negotiation for the request results in a
 * circular reference.
 *
 * [RFC 2295](https://tools.ietf.org/html/rfc2295)
 */
export const VARIANT_ALSO_NEGOTIATES = 506;
export type VARIANT_ALSO_NEGOTIATES = 506;

/**
 * The server is unable to store the representation needed to complete
 * the request.
 *
 * [WebDAV, RFC 4918](https://tools.ietf.org/html/rfc4918)
 */
export const INSUFFICIENT_STORAGE = 507;
export type INSUFFICIENT_STORAGE = 507;

/**
 * The server detected an infinite loop while processing the request
 * (sent instead of `208 Already Reported`).
 *
 * [WebDAV, RFC 5842](https://tools.ietf.org/html/rfc5842)
 */
export const LOOP_DETECTED = 508;
export type LOOP_DETECTED = 508;

/**
 * Further extensions to the request are required for the server to
 * fulfil it.
 *
 * [RFC 2774](https://tools.ietf.org/html/rfc2774)
 */
export const NOT_EXTENDED = 510;
export type NOT_EXTENDED = 510;

/**
 * The client needs to authenticate to gain network access. Intended
 * for use by intercepting proxies used to control access to the
 * network (e.g., "captive portals" used to require agreement to Terms
 * of Service before granting full Internet access via a Wi-Fi
 * hotspot).
 *
 * [RFC 2295](https://tools.ietf.org/html/rfc2295)
 */
export const NETWORK_AUTHENTICATION_REQUIRED = 511;
export type NETWORK_AUTHENTICATION_REQUIRED = 511;

/**
 * The server failed to fulfill a request.
 *
 * Response status codes beginning with the digit "5" indicate cases
 * in which the server is aware that it has encountered an error or is
 * otherwise incapable of performing the request. Except when
 * responding to a `HEAD` request, the server should include an entity
 * containing an explanation of the error situation, and indicate
 * whether it is a temporary or permanent condition. Likewise, user
 * agents should display any included entity to the user. These
 * response codes are applicable to any request method.
 */
export type ServerError =
  | INTERNAL_SERVER_ERROR
  | NOT_IMPLEMENTED
  | BAD_GATEWAY
  | SERVICE_UNAVAILABLE
  | GATEWAY_TIMEOUT
  | HTTP_VERSION_NOT_SUPPORTED
  | VARIANT_ALSO_NEGOTIATES
  | INSUFFICIENT_STORAGE
  | LOOP_DETECTED
  | NOT_EXTENDED
  | NETWORK_AUTHENTICATION_REQUIRED;

/**
 * An official HTTP status code.
 */
export type HTTPStatus =
  | Informational
  | Success
  | Redirection
  | ClientError
  | ServerError;

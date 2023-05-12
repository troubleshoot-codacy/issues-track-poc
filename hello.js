
var username = "admin";
var password = "' OR '1'='1";

var query = "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'";
// Execute the query...

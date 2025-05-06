
# Manual Test Cases - Login

## First go to https://www.saucedemo.com/7

### T01 - Login with valid information
- Steps:
  1. Type in your username: `visual_user`
  2. Type in the password: `secret_sauce`
  3. Click the “Login” button
- Expected result: Redirection to the page /inventory.html
- The result obtained: successfull ✅ 
- Screenshot of the result:
![Image T01](../evidence_of_test_results/T01_login_page.png)
![Image T01](../evidence_of_test_results/T01_login_username_password.png)


### T02 - Empty fields (username and password)
-Steps:
  1. Don't fill in anything and click on login
- Expected result: Mandatory error message, "Username is required"
- The result obtained: successfull ✅ 
- Screenshot of the result:
![Image T02](../evidence_of_test_results/T02_empty_username_password.png)


### T03 - Login with the wrong password
-Steps:
  1. Put a wrong password
- Expected result: Show error message, "Username and password do not match any user in this service"
- The result obtained: successfull 
- Screenshot of the result: successfull ✅ 
![Image T03](../evidence_of_test_results/T03_wrong_password.png)


### T04 - Login with the wrong username
-Steps:
  1. Put a wrong username
- Expected result: Show error message, "Username and password do not match any user in this service"
- The result obtained: successfull 
- Screenshot of the result: successfull ✅ 
![Image T04](../evidence_of_test_results/T04_wrong_username.png)


### T05 - Login with empty username
-Steps:
  1. Enter password only
- Expected result: Show error message, " Username is required"
- The result obtained: successfull 
- Screenshot of the result: successfull ✅ 
![Image T05](../evidence_of_test_results/T05_empty_usernname.png)


### T06 - Login with empty password
-Steps:
  1. Enter username only
- Expected result: Show error message, " Password is required"
- The result obtained: successfull 
- Screenshot of the result: successfull ✅ 
![Image T06](../evidence_of_test_results/T06_empty_password.png)

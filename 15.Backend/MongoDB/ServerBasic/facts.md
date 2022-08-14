## How to send automated Email via nodejs -> nodemailer

- email : html and css -> inline , modern css doesnot work in email
- mail send -> nodemailer, transport -> gmail

  - 1st step : gmail app -> app id ,apppasword
    - go to your google account ->
    - go to signing in-> enable 2 factor authentication
    - App_password -> generate new app password

- template -> string form html
- node mailer use -> send the mail


## Integrate our frontend to our backend ->

    * POSTMAN VS FRONTEND
     * request button-> request || ui button press -> request + loader
     * response you will get    || response you will -> then you have do some change on ui

- React code explain (except->home, plans,planDetails)
  - Step -1 add backend url as proxy to react package.json
  - Step- 2 structuring
    - Top : Header -> Home,plan,login/ user profile
    - Different Pages
      - signup page, profile,login ,forgetpassword
  - AuthProvider:
    - sync -> if you have a user or not on login and logout
    - It also exposes you lossley coupled auth functions -> all the are together

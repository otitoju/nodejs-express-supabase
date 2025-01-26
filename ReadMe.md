To get the Project URL and Key for your Supabase project, follow these steps:

1. Log in to Supabase
Go to Supabase Dashboard and log in with your credentials.
2. Select Your Project
Click on the project you want to use from the list of projects.
3. Access the API Settings
In the project dashboard, navigate to the left-hand menu and click on Settings.
Under Settings, click on API.
4. Copy the Project URL
Under the Configuration section, you'll find the API URL. This is your Project URL. Example: https://xyzcompany.supabase.co
5. Copy the Project Key
Under the Project API keys section, you’ll see your keys:
Anon Key: This is for public, client-side access.
Service Role Key: This is for server-side, full-access use.
Use the appropriate key depending on your use case:
For frontend/client-side usage: Use the Anon Key.
For backend/server-side usage: Use the Service Role Key.
6. Replace in Your Code
Replace the placeholders <SUPABASE_URL> and <SUPABASE_KEY> in your code with the actual API URL and the appropriate key.
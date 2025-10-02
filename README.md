✅ Objective

Fetch user data from a public API.
Display that data on a webpage.

Great! Based on your detailed instructions, here's a complete and clean implementation of a webpage that:

Fetches user data using the Fetch API
Displays name, email, and address
Handles network errors
Includes a reload button
Has styled output with CSS

🌐 API We'll Use

We'll use the JSONPlaceholder
 public API, which provides fake user data.
Example endpoint:
https://jsonplaceholder.typicode.com/users

🛠 Tools Needed

VS Code – to write the code.
Chrome Browser – to view and test the webpage.

✅ Final Deliverables Structure:

✅ Features Implemented:
✔ HTML container for user data
✔ Fetch API to get users
✔ JSON parsing and looping
✔ Error handling with catch()
✔ Styled with CSS
✔ Reload button
✔ Network error test support

🔌 Test: Simulate Network Error

Open Chrome DevTools → Network tab.
Check Offline in the throttling dropdown.
Click Reload Data → Should show error message from catch() block.

with internet access:-
![image](https://github.com/supriyadhal/task-7-elivate-labs/blob/ad4f0028011bd8b4e60b67daf1a7ec01bc0e0003/with%20internet.png)

without internet access:-
![image](https://github.com/supriyadhal/task-7-elivate-labs/blob/bc1a457e764ac79c7df1f86a3cbbf5986876e271/without%20internet.png)

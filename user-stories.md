## Cotal User stories

Initiative Tango

Epic 1

As a **user**, I can **add an image** to my profile so that other users can **see who I am**. -> Completed

Clicking the image upload button successfully opens the file manager window that will allow the user to choose an image to upload. Clicking the form button successfully uploads the image to Cloudinary, where it is stored.

As a **user**, I can **update my profile** image so that my **profile stays fresh**. -> Completed

Adding and updating any information works as expected after numerous tests. Clicking button A won't collide with clicking button E, as all are handled selectively.

As a **user**, I can **delete my profile image** so that I am **in control of my picture**. -> Completed

The user can remove the profile image by removing it and submitting the form, which saves the image field as blank.

As a **user**, I can **add links** of importance to my profile so that other users can get **to know me better**. -> Completed

Clicking on any one of the social media buttons works as expected and opens an input field to allow the user to input their information.

As a **user**, I can **update links** on my profile so that **links stay updated**. -> Completed

The link tree input can be successfully added to or removed by leaving it empty and submitting the form. Location can be changed but cannot be saved as blank.

As a **user**, I can **delete links** on my profile to **remove outdated links**. -> Completed

All links can be updated.

As a **user**, I can **add diverse info** about myself to **build trust with other users**. -> Completed

The user can add status, social media, location, and link tree info. All inputs and buttons work as expected after serious tests. Clicking any button does what it is supposed to do, and clicking anywhere else and returning to click on the button again does its job successfully.

As a **user**, I can **update my information** about myself to **stay current**. -> Completed

As a **user**, I can **set my current professional status** so that other users can know **if I'm available to collaborate**. -> Completed

As a **user**, I can **remove my professional status** from my profile to **keep my privacy**. -> Completed

A user can choose from a variety of choices, one of which is the "not specified" choice.

As a **user**, I have my **activities** displayed on my profile for the world to see for **trust building**. -> Not Completed

As a **user**, I can **control which activities** are visible to the world so that I am in **control of my privacy**. -> Not Completed

As a **user**, I can **add work**, **portfolios**, **awards**, and **certificates** to my profile so the world can see **what I have accomplished**. -> Completed

The user can successfully add, remove, and edit a post, portfolio, award, certification, and creative. Before a user can delete a post, they must confirm their choice by clicking the remove button twice. Clicking it once and then clicking anywhere else will reset the button.

As a **user**, I can **add, edit, update** and **delete** my info to control what **is on my profile**. -> Completed

Epic 2

As a **user**, I can **connect with other users** so that I **mingle with other users**. -> Not Completed

As a **user**, I can **disconnect with previously connected users** so that **only those I like are connected**. -> Not Completed

Epic 3

As a **user**, I can **follow** topics of choice to **keep me updated**. -> Not Completed

As a **user**, I can **unfollow** previously followed topics to **keep my feed clean**. -> Not Completed

As a **user**, I can **follow** users to stay **informed with other users**. -> Not Completed

As a **user**, I can **unfollow** users I have previously followed to **keep my feed clean**. -> Not Completed

Epic 4

As a **user**, I can **add posts** to the app so that I might **tell the world a story or two**. -> Completed

Posts function similarly to the previous examples, but they can be tagged. Each individual tag input is separate from all others and has its own state, regardless of how many are present at any given time.

As a **user**, I can **mention other users** in my posts to **initialize a potential discussion**. -> Not Completed

As a **user**, I can **comment on posts** so that I can **socialize with other users**. -> Completed

Users can successfully comment on each other's posts and on their own posts to have a conversation with other users. The comment form is hidden by default. When the user clicks the comment button, the form opens.

As a **user**, I can **reply to other users' comments** so that the social aspect of the **app becomes enjoyable**. -> Not Completed

As a **user**, I can **mention other users in my comments** so that it is clear **to whom I am writing**. -> Not Completed

Epic 5

As a **user**, I can **easily navigate** through the app so that **the experience is straightforward**. -> Completed

The navigation is easy to use and is straightforward and to the point, both on desktop and mobile. A user menu is opened by clicking the profile image at the top right of the desktop. On mobile, the navigation is hidden and a hamburger icon is shown; clicking it will open the menu.

As a **user**, I can **easily navigate** to topics of interest so that **my app experience is elevated**. -> Not Completed

As a **user**, I can **search the app** for content that is relevant to my search query so that **I may discover new things**. -> Not Completed

Epic 6

As the **owner**, I want the **posts to be one of the visible features** to the outside world so that **risks for bad actors are minimized**. -> Completed

Private routes are protected by checking if the visitor is logged in. Redirection is in place to redirect the user where appropriate.

As the **owner**, I want the **user** profile to be one of the visible features** to the outside world so that **risks for bad actors are minimized\*\*. -> Completed

Security is of the highest priority and is not taken lightly. isLoggedIn is started high up in the virtual tree, and by calling it, it will respond with either true or false.

Epic 7

As a **user**, I can **message other users** who are connected with me so that **private communication is available**. -> Not Completed

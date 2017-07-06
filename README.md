# userAuthAndPost
User Sign up, login and logout.<br />
Access to profile and post submit feature after validation using passpot.<br />
# Demo link
<https://drive.google.com/file/d/0B-D34B_ewc4WaVdRZld1Y0dEWlU/view?usp=sharing>
## Data base
  Used mongoose for mongodb<br />
  Contains 2 collections.One for users second for posts.<br />
## Back END
  Express and node js<br />
  views in jade<br />
  
## Routes
  ###### posts
    /posts/api/posts --posts API --authorization required
    /posts/addpost --submit post --authorization required
    /posts/deletepost/:id --delete a post --authorization required
  ###### Users
    /auth/pro --profile access
    /auth/register --register user
    /auth/login --login user
    /auth/logout --logout
    
## front end
 angular JS<br />
 Nav bar to give options for login,sign up,loguot,profile.<br />
 
 Use posts API to display post. ----authorization required<br />
 Form validation for submitting post --authorization required<br />

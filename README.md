![FauxflixBanner](extra_media/splash.png)
<div align="center">
  <a href="https://fauxflix.herokuapp.com/#/">Live Site</a>
</div>


# Technologies

The backend of Fauxflix is implemented using the Ruby on Rails framework with a PostGreSQL database, while the frontend is managed using the React and Redux libraries of Javascript to manage state and pass important information to child components. The app also uses the FontAwesome and Swiper libraries for icons and the genre carousel. It is styled with SCSS while the thumbnails and videos are hosted on Amazon AWS.

# Key Features

## User Authentication

Signing up and logging in from the splash page takes users to two destinct pages with different styling. If a user adds their email on the splashpage and clicks "GET STARTED", that info is passed through as a URL parameter and prefills the email input section with React state. The Rails backend handles all validations and passes any error messages to the frontend to help the user complete the process. A user's password is then salted and hashed by BCrypt to either create their password digest which is then stored in the PostGres database (sign up), or compared with an existing password digest (log in). Upon successful login or signup, React Router grants the user access to all of Fauxflix's protected routes.

![User Auth Demo](extra_media/user_auth.gif)

## User Authentication

![User Auth Demo](extra_media/user_auth.gif)

Signing up and logging in from the splash page takes users to two destinct pages with different styling. If a user adds their email on the splashpage and clicks "GET STARTED", that info is passed through as a URL parameter and prefills the email input section with React state. The Rails backend handles all validations and passes any error messages to the frontend to help the user complete the process. A user's password is then salted and hashed by BCrypt to either create their password digest which is then stored in the PostGres database (sign up), or compared with an existing password digest (log in). Upon successful login or signup, React Router grants the user access to all of Fauxflix's protected routes.

## Stream Video

## Display Videos by Genre

## User Video List

## Search


# Challenges

# Future Features

* Modal to display detailed video information on click before video show page
* Cache videos to reduce pull on Amazon AWS

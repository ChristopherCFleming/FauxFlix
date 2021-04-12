![FauxflixBanner](extra_media/splash.png)
<div align="center">
  <a href="https://fauxflix.herokuapp.com/#/">Live Site</a>
</div>


# Technologies

The backend of Fauxflix is implemented using the Ruby on Rails framework with a PostGreSQL database, while the frontend is managed using the React and Redux libraries of Javascript to manage state and pass important information to child components. The app also uses the FontAwesome and Swiper libraries for icons and the genre carousel. It is styled with SCSS while the thumbnails and videos are hosted on Amazon AWS.

# Key Features

## User Authentication

![User Auth Demo](extra_media/user_auth.gif)

Signing up and logging in from the splash page takes users to two destinct pages with different styling. If a user adds their email on the splashpage and clicks "GET STARTED", that info is passed through as a URL parameter and prefills the email input section with React state. The Rails backend handles all validations and passes any error messages to the frontend to help the user complete the process. A user's password is then salted and hashed by BCrypt to either create their password digest which is then stored in the PostGres database (sign up), or compared with an existing password digest (log in). Upon successful login or signup, React Router grants the user access to all of Fauxflix's protected routes. A user can log out by hovering over the profile pic and clicking "Log Out."

## Display Videos by Genre

![Carousel Demo](extra_media/carousel_demo.gif)

All videos and their accompanying thumbnails are stored on Amazon AWS and passed to components using Fauxflix's Redux store. On the homepage below the banner video, all FauxFlix videos are displayed by Genre in a clickable (and now swipeable!) carousel from Swiper. The carousel has navigation buttons that appear on hover on both ends to allow the user to easily click through the videos in that genre. If a user reaches the end of that list, the carousel creates clones of the previous videos and keeps going. If a user hovers over a specific video, it expands to display the description, automatically plays, and gives the user the ability to unmute, play, or add it to their list by clicking the appropriate icons.

## My List

![List Demo](extra_media/list_demo.gif)

<p align="center">
  <img src="extra_media/list_demo.gif">
</p>

The My List and Search features use a similar layout. If a user adds a video to their list, that video ID is stored in the rails backend and will be displayed in the My List page so the user can keep track of their favorite videos. 

If a user expands the search input bar by clicking on the spyglass in the Navi, they can search the Fauxflix video database by a video's title and description. 

All the same functionality of the videos in the carousel is available in the videos displayed in these two pages (add/remove from My List, expanded description on hover, mute/unmute, play).


# Challenges



# Future Features

* Modal to display detailed video information on click before video show page
* Cache videos to reduce pull on Amazon AWS

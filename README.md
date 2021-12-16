
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Interview Scheduler</h1>
  <p align="center">
    Interview Scheduler is a SPA, build by using React Library.
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Interview Scheduler is made by using React library. Users can book appointments by selecting a day and available interviewers. While building this project, I have strengthened my knowledge of using React. I have also learned testing tools like storybook, jest, react-testing-library, and cypress. Another skill that I have to build is to make API calls to Server from react front-end.  
<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [REACT](https://reactjs.org/)
* [SCSS](https://sass-lang.com/documentation/syntax)
* [STORYBOOK](https://storybook.js.org/)
* [CYPRESS](https://www.cypress.io/)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* node

### Installation

1. Fork this repo
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Running Webpack Development Server
   ```sh
   npm start
   ```
5. Running Jest Test Framework
   ```sh
   npm test
   ```
6. Running Storybook Visual Testbed
   ```sh
   npm run storybook
   ```

### Server Setup

1. Fork and clone the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) into a new directory on your machine ,and follow the README.md instructions to configure and run the API server.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### User can add an appointment
Users can select a different day, which shows available spots for the appointment. Users can click add button to create a new appointment by providing the name and interviewer from the interviewers' list. By pressing 'Save' it sends the request to the database and the appointment will be saved for that day and update the spots available.

<img src='https://github.com/YagneshP/scheduler/blob/master/docs/create_appointment.gif'>

### User can edit an appointment
Users can edit appointments by pressing the 'Edit' icon and saving it.

<img src='https://github.com/YagneshP/scheduler/blob/master/docs/edit_appointmment.gif'>

### User can delete an appointment
Users can delete an appointment by pressing the 'Delete' icon. The app shows a confirmation box to users if they want confirmation of deleting the appointment.

<img src='https://github.com/YagneshP/scheduler/blob/master/docs/delete_appointment.gif' >

### User can go back to previouse mode
While editing and deleting appointments, the User can press cancel and go back to the previous mode.

<img src='https://github.com/YagneshP/scheduler/blob/master/docs/prev_mode.gif' >

<p align="right">(<a href="#top">back to top</a>)</p>





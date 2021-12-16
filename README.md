
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

Interview Scheduler is made by using React library. Users can book appointments by selecting day and available interviewers. While building this project, i have strenghten the knowledge of using React. I have also learned testing tools like storybook, jest, react-testing-library and cypress. Another skill which i have build to make API calls to Server from react front-end. 
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

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### User can add an appointment
User can select different day , which shows available spots for appointment. User can click add button to create new appointment by providing name and interviewer from interviewers list.By pressing 'Save' it sends request to database and appointment will be saved for that day and update the spots available.

<img src='https://github.com/YagneshP/scheduler/blob/master/docs/create_appointment.gif'>

### User can edit an appointment
User can edit appointment by pressing 'Edit' icon and save it.

<img src='https://github.com/YagneshP/scheduler/blob/master/docs/edit_appointmment.gif'>

### User can delete an appointment
User can delete an appointment by pressing 'Delete' icon. App shows confirmation box to users , if they want to confirmation of deleting appoinment.

<img src='https://github.com/YagneshP/scheduler/blob/master/docs/delete_appointment.gif' >

### User can go back to previouse mode
While editing and deleting appoinment, User can press cancel and go back to previouse mode

<img src='https://github.com/YagneshP/scheduler/blob/master/docs/prev_mode.gif' >

<p align="right">(<a href="#top">back to top</a>)</p>





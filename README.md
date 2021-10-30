<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Commit Activity][commit-activity-shield]][commit-activity-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/riansyh/finddy">
    <img src="public/img/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Finddy</h3>

  <p align="center">
    Platform pencari teman belajar sesuai dengan bidang/minat yang dipelajari dan sebagai tempat berdiskusi seputar permasalahan saat belajar.
    <br />
    <br />
    <a href="https://finddy.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/riansyh/finddy/issues">Report Bug</a>
    ·
    <a href="https://github.com/riansyh/finddy/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
        <a href="#our-team">Our Team</a>
    </li>
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
        <li><a href="#running-the-project">Running the Project</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Our Team

| NPM          | Name                      |
| ------------ | ------------------------- |
| 140810190002 | Rizal Herliansyah Hidayat |
| 140810190014 | Indra Kurniawan           |
| 140810190026 | Rian Febriansyah          |

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Finddy Screen Shot][product-screenshot]](https://example.com)

This repository is a final project from Software Engineering Class, Teknik Informatika, Universitas Padjadjaran.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [React.js](https://reactjs.org/)
-   [Laravel](https://laravel.com)
-   [Inertia](https://inertiajs.com/)
-   [Tailwind CSS](https://tailwindcss.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

This project uses Laravel 8, ReacJs, and InertiaJs which needs the following to run properly:

-   Git
-   Composer
-   PHP >= 7.3
-   npm

### Installation

1. Clone the repo
    ```sh
     git clone https://github.com/riansyh/finddy.git
    ```
2. Install Composer dependencies
    ```sh
     cd finddy
     composer install
    ```
3. Install NPM packages
    ```sh
     npm install
    ```
4. Create and setup `.env` to configure database
    ```sh
     DB_HOST=your-db-server-hostname
     DB_DATABASE=db-name
     DB_USERNAME=db-server-username
     DB_PASSWORD=db-server-password
    ```
5. Build web assets
    ```sh
     npm run dev
    ```
6. Migrate database
    ```sh
     php artisan migrate
    ```

### Running the Project

Start local development server

     php artisan serve

Then access the localhost url at port 8000 by visiting [localhost:8000](http://localhost:8000) or [127.0.0.1:8000](http://127.0.0.1:8000).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

_TBA_

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/riansyh/finddy?style=for-the-badge
[contributors-url]: https://github.com/riansyh/finddy/graphs/contributors
[commit-activity-shield]: https://img.shields.io/github/commit-activity/w/riansyh/finddy?style=for-the-badge
[commit-activity-url]: https://github.com/riansyh/finddy/graphs/commit-activity
[forks-shield]: https://img.shields.io/github/forks/riansyh/finddy?style=for-the-badge
[forks-url]: https://github.com/riansyh/finddy/network/members
[pull-request-shield]: https://img.shields.io/github/issues-pr/riansyh/finddy?style=for-the-badge
[pull-request-url]: https://github.com/riansyh/finddy/pulls
[issues-shield]: https://img.shields.io/github/issues/riansyh/finddy?style=for-the-badge
[issues-url]: https://github.com/riansyh/finddy/issues
[license-shield]: https://img.shields.io/github/license/riansyh/finddy?style=for-the-badge
[license-url]: https://github.com/riansyh/finddy/blob/main/LICENSE.txt
[product-screenshot]: public/img/homepage.png

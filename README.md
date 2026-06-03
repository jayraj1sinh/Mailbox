# Mailbox UI

## Overview

This project is a responsive Mailbox UI built with Angular and SCSS based on the provided Adobe XD design. The goal was to create a clean and user-friendly email interface while closely matching the supplied mockup.

## Features

* Sidebar navigation (Inbox, Flagged, Draft, Sent, Trash)
* Folder management section
* Card-based email listing
* Email preview panel
* Attachment preview section
* Responsive layout for Desktop, Tablet, and Mobile devices
* SCSS styling with variables, mixins, and media queries

## Technologies

* Angular 21
* TypeScript
* SCSS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

Open:

```text
http://localhost:4200
```

## Build

Create a production build:

```bash
ng build
```

## Notes

* Static data is used for emails and folders.
* Assets such as images and SVG icons are stored in `public/asset/images`.
* No backend integration was required for this assignment.

## Future Improvements

* Search functionality
* Dark mode
* Backend/API integration
* Unit and E2E tests

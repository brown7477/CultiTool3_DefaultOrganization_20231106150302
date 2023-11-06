# Cannabis Strains Aggregator

A Full Stack React Web App for aggregating and displaying Cannabis Strains and their chemical composition make up. 

## Features

- Display strains in a table in order based on the tch%.
- User authentication with login and register pages.
- User types of Admin, Cultivator, and Dispensary.
- Only Cultivator can add or edit Strains.
- Dispensaries can add strains to their portfolio of inventory but cannot edit the Strain Data.

## Quick Install

Ensure you have Node.js and MongoDB installed on your machine.

Clone the repository:

```bash
git clone https://github.com/ChatDev/CannabisStrainsAggregator.git
```

Navigate into the project directory and install dependencies:

```bash
cd CannabisStrainsAggregator
npm install
```

Start the server:

```bash
npm start
```

The application will be running on `http://localhost:3000`.

## User Guide

### Registration and Login

To use the application, you need to register as a user. There are three types of users: Admin, Cultivator, and Dispensary.

- **Admin:** Has full access to all features of the application.
- **Cultivator:** Can add or edit strains.
- **Dispensary:** Can add strains to their portfolio of inventory but cannot edit the Strain Data.

### Viewing Strains

All users can view the strains in a table ordered based on the tch%. Click on a strain to view its detailed chemical composition.

### Adding and Editing Strains (Cultivator)

As a Cultivator, you can add new strains or edit existing ones. To add a new strain, click on the 'Add Strain' button and fill in the required information. To edit a strain, click on the 'Edit' button next to the strain you want to modify.

### Managing Inventory (Dispensary)

As a Dispensary, you can add strains to your portfolio of inventory. To do this, click on the 'Add to Inventory' button next to the strain you want to add.

## Support

For any issues or inquiries, please contact us at support@chatdev.com.
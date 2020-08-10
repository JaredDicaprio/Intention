# Grounded HLC

> eCommerce Site for Grounded Holistic Lifestyle Co. 

This is a FullStack MERN Application, utilizing Mongo Atlass DB. The goal was to create a an online shop for Grounded HLC. As per clients request it must be: designed with mobile users in mind, and have fully functional payment processing. I chose to use Stripe for the payments. Much of the application is cloud-based technologies. Backend is hosted on MongoDB, and most images are hosted on Cloudinary, the frontend and serverless functions are all hosted on Vercel. This application was a huge undertaking for me, and I && the client are overall very happy with how the project came out. 

live version: https://www.groundedhlc.com


## Quick Start

### Modify the .env variables to your own

```

{
"mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
"jwtSecret": "secret",
"cloudinary": ""
"Stripe":
}

````



### Build for production

```bash
cd Intention
npm run build
```

### Build / Deploy to Vercel

```bash
npx now
```

## App Info

### Author

Paul Duncan

### Version

1.6.2

### License

This project is was built for a private client, and the code is shown for educational purposes only.

That should do it!

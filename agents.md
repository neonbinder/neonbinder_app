# Neon Binder

## This is a native mobile app to run the functionality of the Neon Binder platform. 

## Feature Set
There are going to be two types of users eventually: Buyers and Sellers. Both will use this platform and will get a feature set when they log in based on how they are using the app. If they are both they will see the seller interface with a tab for buyer features. Many buyer features will not require login.

### Buyer Features
- 

### Seller Features

# Architecture
- The app is an Expo App.
- App is deployed to Android, iOS and Web
- Native Mobile is the priority and web support is important but secondary
- The backend is built with Convex, but maintained in a seperate Repo
- Typescript is used and every code update should have strict type checking added

# UI
- Gluestack UI is used to build the UI along with nativewind for styling
- Primitve components should live in app/components/ui
- Before creating a new UI component always check to see if it already exists in Gluestack and if it does use `npx gluestack-ui add {component}` to add that component to the UI directory
- Gluestack themeing should be the prefered methodology for themeing
- If Gluestack theme is not providing the data needed for styling then it may be put int othe component directly or constants/theme.ts if it is a value that should be used globally. 
- Colors are all defined in constants/theme.ts. No new colors should be introduced unless explicitly requested. 
- No hex values should ever be directly in components, always reference constants/theme.ts

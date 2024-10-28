# NorthStudio - ROY YACHT PAGE

### Project Description

ROY YACHT PAGE is an e-commerce application designed to showcase yachts available for purchase, featuring a visually appealing and user-friendly design. Developed with Nuxt.js, TypeScript, and SCSS, this project adheres to high standards of quality in both design and functionality, providing an interactive and adaptable platform. The main feature of this application is a product grid powered by an API, allowing users to explore yachts and view relevant details in an intuitive and readable manner.

## Table of Contents
- [Project Description](#project-description)
- [Objectives](#objectives)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Technical Competencies](#technical-competencies)
- [Setup and Execution Instructions](#setup-and-execution-instructions)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Challenges Faced](#challenges-faced)




### Objectives

- **Product Grid**: Displays yachts dynamically loaded from the API, managing CORS issues with a server proxy.
- **Responsive Design**: Ensures a smooth experience on both desktop and mobile devices.
- **Code Quality**: Implements clean and reusable code with TypeScript and Nuxt.js, ensuring a scalable and maintainable structure.
- **Atomic Design**: The code is structured to follow atomic design principles, separating the template into components to promote reusability and ease of maintenance.

### Features

1. **Dynamic Product Grid**: Displays yachts obtained from the API, with an interchangeable grid view (2 or 4 column layout).
2. **Product Details**: Shows key details of each yacht, such as name, price (in EUR), length, number of cabins, and guest capacity.
3. **Interactive Bookmarks**: Allows users to mark their favorite yachts as "saved" for easier access.
4. **Inquiry Button**: Enables users to express interest in specific yachts.
5. **Error Handling**: Displays messages if data loading fails.

### Technologies Used

- **Nuxt.js**: Framework for building optimized and SEO-friendly applications.
- **TypeScript**: Ensures type safety in components.
- **SCSS**: Allows for modular and reusable styles with responsive capabilities.
- **Vue Composition API**: Used for managing components and state.
- **Axios**: Handles API calls, utilizing a server proxy to comply with CORS.
- **FontAwesome**: Provides interactive icons for UI elements.

### Technical Competencies

The project focuses on:
- **Frontend Development**: Using Nuxt.js and TypeScript to build a responsive and interactive user interface.
- **Data Visualization**: Implementing charts and graphs to display key product metrics.
- **User Interaction**: Enabling dynamic data interaction through time frame toggles and report generation.
- **Mock Data Usage**: Working with mocked data for development, without the need for actual API integration.
- **Implementation of Scalable and Maintainable Infrastructure**.
- **User-Friendly Design**: For an effective consulting experience.


### Setup and Execution Instructions

1. **Clone the repository**:

 git clone https://github.com/yourusername/roy-yacht-page.git
  
    
2. **Navigate to the folder**:

    cd roy-yacht-page

    
3. **Install dependencies**:
   
    pnpm install
    
    
4. **Run the application in development mode**:
    npx nuxi dev ó pnpm dev
    
5. **Access the application**: Open your browser and navigate to [http://localhost:3000](http://localhost:3000/).

### Deployment

Deployed version available at: [https://roy-yacht-sale.netlify.app/]

### Future Improvements

**Additional API Pagination**: Enable support for multiple pages of yacht data.
**Currency Conversion**: Implement the option to switch between EUR and the viewer's local currency.
**Advanced Filtering**: Add filters based on length, price range, or other yacht features.
**User Authentication**: Allow users to log in to save favorites and view personalized recommendations.

### Challenges Faced

 **Adaptation to New Tools**: This was my first project carried out independently with technologies like Nuxt.js and Vue. Integrating this knowledge and applying it to a real-time project was the best challenge. Researching documentation, understanding syntax, and applying best practices allowed me to build a functional and scalable foundation.
 **Grid Visualization and Functionality**: Accurately recreating the design was crucial to achieving the expected visual quality. Providing functionality for the view-switching option and implementing it technically in code. Creating a system that allows toggling between different visualizations dynamically turned out to be an interesting and very satisfying experience to see in action.
 **Time Management**: The project had to be completed in a relatively short period, which meant prioritizing and optimizing tasks. This involved focusing first on the essential structure and then on secondary details to ensure that the final product was functional and met visual requirements.


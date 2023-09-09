# gpt-summarizer

This is a web application that allows you to input a URL, which it then uses to summarize the content of the website. The summarized content is stored in local storage so that you can access it without an internet connection. This project is built using RapidAPI for content summarization, React.js for the front-end, Vite for development, and Tailwind CSS for styling.

<img src="/my-project/public/Leonardo_Creative_logo_summarizer_2-removebg-preview.ico" alt="Logo" width="150" height="auto">


## Screenshots

### Main Page

![Main Page](/my-project/public/mainpageRaw.png)

- Clean and user-friendly interface.
- Input a website URL.
- Click the "Summarize" button to generate content summaries.
- Display summarized content for quick access to essential information.

### Summarized Content

![Summarized Content](/my-project/public/mainpage.png)

- Summarizes website content based on user-input URLs.
- Saves search results in your browser's local storage.
- Access saved results without re-summarizing the content.
- Copy URL with a convenient button for easy sharing or reference.




## Features

- Input a website URL to summarize its content.
- Save the summarized content in local storage.
- Access the saved content even when offline.
- Fast and responsive user interface.

## Technologies Used

- [RapidAPI](https://rapidapi.com/): Used for website content summarization.
- [React.js](https://reactjs.org/): JavaScript library for building the front-end.
- [Vite](https://vitejs.dev/): Build tool for development.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for styling.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository:

   ```shell
   git clone https://github.com/mmnsrti/gpt-summarizer.git
2.Change to the project directory:

```bash
cd website-summarizer-app
```
Install dependencies:
npm install
3.
Create a .env file in the root directory with your RapidAPI key: 
get the key from https://rapidapi.com/restyler/api/article-extractor-and-summarizer

```bash

VITE_RAPID_API_ARTICLE_KEY=your-rapidapi-key
```

Replace your-rapidapi-key with your actual RapidAPI key.
Start the development server:
```bash
npm run dev
```
Open your web browser and access the app at http://localhost:3000.

Usage
Enter a website URL in the input field and click the "Summarize" button.
The summarized content will be displayed below.
You can save the summarized content to local storage by clicking the "Save" button.
Access the saved content even when offline by revisiting the app.

Usage
Enter a website URL in the input field and click the "Summarize" button.
The summarized content will be displayed below.
You can save the summarized content to local storage by clicking the "Save" button.
Access the saved content even when offline by revisiting the app.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
[RapidAPI](https://rapidapi.com/) for providing the content summarization API.
The [React.js](https://reactjs.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/) communities for their excellent tools and resources.


Feel free to contribute to this project by submitting issues or pull requests..






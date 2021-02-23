## Fantasy Quotes Machine

### What is it?

An application made using React and React hooks to display quotes. The application can be tinkered with and used with other APIs to show off some fancy quotes.

### Can I see/try it?

You sure can. There are 2 options to pick from:

- Use the link on the right hand side with my own API and see how it works ||
- Clone the repository and use your own API for quotes it will require the following:

 1. Your own API with JSON files requiring the following format :
    - Quotes: object
      - Number(starting from 1 till Quotes.length): object
        - Text: String
        - Author: String
        - Source: String
        
    ```JSON
    { 
    "quotes": {
            "1": { 
                 "text": "Ambition is not a dirty word. Piss on compromise. Go for the throat.",
                 "author":"Steven Erikson",
                 "source": "Gardens of the Moon" 
            },
            "2": {  
                "text": "Wise words are like arrows flung at your forehead. What do you do? Why, you duck of course.", 
                "author": "Steven Erikson", 
                "source": "House of Chains" },
      }
     }
    ```
2. A .env file with the API_KEY of firebase in the following format:
   ```API_KEY=FirebaseKeyHere```
3. The config in `src/firebase/firebase.utils.js` to be edited to your own Firebase config which can be copied from the Firebase project page.


## Future goals.

- Show pictures of the Author.
- Add more social media sharing.
- Costumized theming.

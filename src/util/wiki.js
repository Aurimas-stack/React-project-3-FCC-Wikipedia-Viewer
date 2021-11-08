
const searchWiki = {
    getEntries(term) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&format=json`).then((response) => {
        return response.json();
      }).then((jsonResponse) => {
        if(jsonResponse.query) {
          return jsonResponse.query.search.map((entry) => {
            return {
                title: entry.title,
                id: entry.pageid,
                text: entry.snippet.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '') 
            }
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
}

export default searchWiki;

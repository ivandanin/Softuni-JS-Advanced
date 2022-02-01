function getArticleGenerator(articles) {
    let content = document.querySelector('#content');

    function returnArticle() {
        
        if (articles.length > 0) {
        let article = document.createElement('article');

        article.textContent = articles.shift();
        content.appendChild(article);
        }
    }
    return returnArticle;
}

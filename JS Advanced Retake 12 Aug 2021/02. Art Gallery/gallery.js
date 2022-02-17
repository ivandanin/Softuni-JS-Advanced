class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();
        let article = this.listOfArticles.find(p => p.articleName === articleName);

        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!');
        }

            article && article.articleModel == articleModel
            ? article.quantity += quantity
            : this.listOfArticles.push({articleModel, articleName, quantity});
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let guest = this.guests.find(g => g.guestName == guestName);

        if(guest) {
            throw new Error(`${guestName} has already been invited.`);
        }
            let points = 0;
            switch (personality) {
                case 'Vip': 
                points = 500;
                break;

                case 'Middle': 
                points = 250;
                break;

                case 'Normal': 
                points = 50;
                break;
            }
            this.guests.push({guestName, points, purchaseArticle: 0});
            return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(p => p.articleName === articleName);
        let guest = this.guests.find(x => x.guestName == guestName);
        
        if (!article || article.articleModel != articleModel) {
            throw new Error('This article is not found.');
        } 

        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        if (!guest) {
            return 'This guest is not invited.';
        } 

        guest.points < this.possibleArticles[articleModel]
        ? 'You need to more points to purchase the article.'
        : guest.points -= this.possibleArticles[articleModel]
        guest.purchaseArticle++
        article.quantity--;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        switch (criteria) {
            case 'article':
                let articleResult = [];
                articleResult.push('Articles information:');
                this.listOfArticles
                .forEach(a => articleResult.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
                return articleResult.join('\n');

            case 'guest':
                let guestResult = [];
                guestResult.push('Guests information:');
                this.guests.forEach(g => guestResult.push(`${g.guestName} - ${g.purchaseArticle}`));
                return guestResult.join('\n');
            }
    }
}
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// // Successfully added article Mona Liza with a new quantity- 3.
// // Successfully added article Ancient vase with a new quantity- 2.
// // Successfully added article Mona Liza with a new quantity- 1.


// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// // You have successfully invited John!
// // You have successfully invited Peter!
// // John has already been invited.


const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 0);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 0);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
// // John successfully purchased the article worth 200 points.
// // Peter successfully purchased the article worth 250 points. 
// // This article is not found.
class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        } 
        
        if (username == this.creator) {
            throw new Error(`You can't like your own story!`);
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}`;
        }
    }
    
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        } 
        
            this._likes = this._likes.filter(u => u != username);
            return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));

// // John likes this story!
// // My Story has 0 likes
// // Ammy commented on My Story
// // You replied successfully
// 
// // Title: My Story
// // Creator: Anny
// // Likes: 0
// // Comments:
// // -- 2. Ammy: New Content
// // -- 3. Jessy: Nice :)
// // -- 1. Sammy: Some Content
// // --- 1.2. SAmmy: Reply@
// // --- 1.1. Zane: Reply
// 
// // Title: My Story
// // Creator: Anny
// // Likes: 1
// // Comments:
// // -- 3. Jessy: Nice :)
// // -- 2. Ammy: New Content
// // -- 1. Sammy: Some Content
// // --- 1.2. SAmmy: Reply@
// // --- 1.1. Zane: Reply

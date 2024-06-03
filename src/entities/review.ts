interface IReview {
    id: string;
    to: string;
    userId: string;
    rating: number;
    comment: string;
    date: Date;
}

export class ReviewModel implements IReview {
    id: string;
    to: string;
    userId: string;
    rating: number;
    comment: string;
    date: Date;

    constructor (
        review: IReview
    ) {
        this.id = review.id;
        this.to = review.to;
        this.userId = review.userId;
        this.rating = review.rating;
        this.comment = review.comment;
        this.date = review.date;
    }

    toPlainObject() {
        return {
            id: this.id || "",
            to: this.to || "",
            userId: this.userId || "",
            rating: this.rating || 0,
            comment: this.comment || "",
            date: this.date || new Date()
        };
    }
}
export class BookModel {
    error:  boolean;
    result: Book[];
}

export class Book {
    _id:         string;
    name:        string;
    author:      string;
    publisher:   string;
    binding:     string;
    releaseDate: Date;
    language:    string;
    price:       string;
    imageURL:    string;
    category:    string;
    created_at:  Date;
    updated_at:  Date;
    __v:         number;
}
export interface BookList {
    error:  boolean;
    books: Book[];
}

export interface Book {
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
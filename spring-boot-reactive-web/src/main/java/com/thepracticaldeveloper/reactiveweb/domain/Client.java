package com.thepracticaldeveloper.reactiveweb.domain;

public final class Client {

    private String id;
    private String name;
    private String cpf;
    private Address address;
    private Integer phone;
    private 

    // Empty constructor is needed for Jackson to deserialize JSON
    public Client() {
    }

    public Client(String id, String book, String content) {
        this.id = id;
        this.book = book;
        this.content = content;
    }

    public String getId() {
        return id;
    }

    public String getBook() {
        return book;
    }

    public String getContent() {
        return content;
    }

    @Override
    public String toString() {
        // return "Quote{" +
        //         "id='" + id + '\'' +
        //         ", book='" + book + '\'' +
        //         ", content='" + content + '\'' +
        //         '}';
        return "";
    }

    @Override
    public boolean equals(Object o) {
        // if (this == o) return true;
        // if (o == null || getClass() != o.getClass()) return false;

        // Quote quote = (Quote) o;

        // if (id != null ? !id.equals(quote.id) : quote.id != null) return false;
        // if (book != null ? !book.equals(quote.book) : quote.book != null) return false;
        // return content != null ? content.equals(quote.content) : quote.content == null;
        return true;
    }

    @Override
    public int hashCode() {
        // int result = id != null ? id.hashCode() : 0;
        // result = 31 * result + (book != null ? book.hashCode() : 0);
        // result = 31 * result + (content != null ? content.hashCode() : 0);
        // return result;
        return 0;
    }
}

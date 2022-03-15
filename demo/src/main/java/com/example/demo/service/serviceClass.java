package com.example.demo.service;

import com.example.demo.model.Book;
import com.example.demo.model.stockValues;
import com.example.demo.repo.BookRepository;
import kong.unirest.HttpResponse;
import kong.unirest.Unirest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class serviceClass {

    @Autowired
    private BookRepository bookRepository;

    //  *** External API call returns ******
    public String searchAPIReturn(stockValues stockvalues){

        String url = "https://nse-data1.p.rapidapi.com/search_stock?stockname=" + stockvalues.getQuery();

        HttpResponse<String> response = Unirest.get(url)
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "e1a8ee11demsha989d480540a986p1957f1jsn3e1409730d73")
                .asString();

        return response.getBody().toString();
    }

    public String topLossers(){
        HttpResponse<String> response = Unirest.get("https://nse-data1.p.rapidapi.com/top_loosers")
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "e1a8ee11demsha989d480540a986p1957f1jsn3e1409730d73")
                .asString();

        return response.getBody();
    }

    public String topGainers(){
        HttpResponse<String> response = Unirest.get("https://nse-data1.p.rapidapi.com/top_gainers")
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "e1a8ee11demsha989d480540a986p1957f1jsn3e1409730d73")
                .asString();

        return response.getBody();
    }

    public String currentMarketStatus(){
        HttpResponse<String> response = Unirest.get("https://nse-data1.p.rapidapi.com/market_status")
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "e1a8ee11demsha989d480540a986p1957f1jsn3e1409730d73")
                .asString();

        return response.getBody();
    }

    public String niftyBank(){
        HttpResponse<String> response = Unirest.get("https://nse-data1.p.rapidapi.com/nifty_bank_indices_data")
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "e1a8ee11demsha989d480540a986p1957f1jsn3e1409730d73")
                .asString();

        return response.getBody();
    }

    public String niftyFifty(){
        HttpResponse<String> response = Unirest.get("https://nse-data1.p.rapidapi.com/nifty_fifty_indices_data")
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "e1a8ee11demsha989d480540a986p1957f1jsn3e1409730d73")
                .asString();

        return response.getBody();
    }

    // **** DataBase Work *******

    public String insertBook(Book book){
        bookRepository.save(book);
        return "saved";
    }

    // for saving multiple objects at the same time and saving them
    public String insertBook(List<Book> book){
        bookRepository.saveAll(book);
        return "All records saved !";
    }

    // ** for taking data from database **
    public List<Book> getBook(){
        return (List<Book>) bookRepository.findAll();
    }

    // for getting data from database using bookName field
    public List<Book> getBookByName(@PathVariable("name") String bookName){
        return (List<Book>) bookRepository.findBybookName(bookName);
    }

    // for getting data from database using bookId field
    // optional type contains only values which are not null
    public Optional<Book> getBookById(@PathVariable("bookId") Long id){
        return bookRepository.findById(id);
    }


    public String updateProduct(Book book){
        Book existingBook = bookRepository.findById(book.getBookId()).orElse(null);
        existingBook.setBookName(book.getBookName());
        existingBook.setBookAuthor(book.getBookAuthor());
        bookRepository.save(existingBook);
        return "updated !";
    }

    // ### Deletion
    public String deleteBook(long id){
        bookRepository.deleteById(id);
        return "deleted !";
    }


    // **** for external api calling

    private final RestTemplate restTemplate;

    @Autowired
    public serviceClass(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    public String consumeAPI(){
        return restTemplate.getForObject("https://catfact.ninja/fact", String.class);
    }

}

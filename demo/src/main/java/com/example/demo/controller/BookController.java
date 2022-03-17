package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.model.stockValues;
import com.example.demo.service.serviceClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// for connecting with ui
@CrossOrigin(origins = "http://localhost:3000")


@RequestMapping("/")

// maps given request to respected function
@RestController
public class BookController {

    @Autowired
    private final serviceClass service;

    public BookController(serviceClass service){
        this.service = service;
    }


    // ****** API calls taking data from external API ***************

    // return price object for a given symbol of stock
    @PostMapping("/returnPrice")
    public String returnPriceForStock(@RequestBody stockValues stockvalues){
        return service.returnPriceForStock(stockvalues);
    }

    // return search results for a given keyword
    @PostMapping("/search")
    public String searchAPIReturn(@RequestBody stockValues stockvalues){
        return service.searchAPIReturn(stockvalues);
    }

    @GetMapping("/toploss")
    public String topLossers(){
        return service.topLossers();
    }

    @GetMapping("/topgain")
    public String topGainers(){
        return service.topGainers();
    }

    @GetMapping("/nifty50")
    public String niftyFifty(){
        return service.niftyFifty();
    }

    @GetMapping("/niftybnk")
    public String niftyBank(){
        return service.niftyBank();
    }

    @GetMapping("/mktstat")
    public String currentMarketStatus(){
        return service.currentMarketStatus();
    }



    // ********** API calls taking data from database *********

    @PostMapping("/bookSave")
    public String addBook(@RequestBody Book book){
        return service.insertBook(book);
    }

    @PostMapping("/multipleBookSave")
    public String insertBook(List<Book> book){
        return service.insertBook(book);
    }

    @GetMapping("/getAllBook")
    public List<Book> getBook(){
        return (List<Book>) service.getBook();
    }

    @GetMapping("/getByBookName/{name}")
    public List<Book> getBookByName(@PathVariable("name") String bookName){
        return (List<Book>) service.getBookByName(bookName);
    }

    @GetMapping("/getByBookId/{bookId}")
    public Optional<Book> getBookById(@PathVariable("bookId") Long id){
        return service.getBookById(id);
    }

    @PutMapping("/updateBook")
    public String updateProduct(@RequestBody Book book){
        return service.updateProduct(book);
    }

    @DeleteMapping("/deleteBook/{bookId}")
    public String deleteBook(@PathVariable long bookId){
        return service.deleteBook(bookId);
    }

}

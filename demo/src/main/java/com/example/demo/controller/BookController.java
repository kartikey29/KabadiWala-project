package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// for connecting with ui
@CrossOrigin(origins = "http://localhost:3000")
// requestmapping is for connecting to react
@RequestMapping("/api/vi/")

@RestController
public class BookController {

    @Autowired
    BookRepository bookRepository;

    // saving data on server
    // post means getting
    // by default getting a json file
    // localhost:8080/bookSave will now receive file
    @PostMapping("/bookSave")
    public String insertBook(@RequestBody Book book){
        bookRepository.save(book);
        return "Record saved !";
    }

    // for saving multiple objects at the same time and saving them
    @PostMapping("/multipleBookSave")
    public String insertBook(@RequestBody List<Book> book){
        bookRepository.saveAll(book);
        return "All records saved !";
    }

    // ** for taking data from database **
    @GetMapping("/getAllBook")
    public List<Book> getBook(){
        return (List<Book>) bookRepository.findAll();
    }

    // for getting data from database using bookName field
    @GetMapping("/getByBookName/{name}")
    public List<Book> getBookByName(@PathVariable("name") String bookName){
        return (List<Book>) bookRepository.findBybookName(bookName);
    }

    // for getting data from database using bookId field
    @GetMapping("/getByBookId/{bookId}")
    public Optional<Book> getBookById(@PathVariable("bookId") Long id){
        return bookRepository.findById(id);
    }

}

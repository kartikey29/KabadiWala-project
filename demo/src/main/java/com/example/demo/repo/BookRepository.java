package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Book;

import java.util.List;

// crud repository can also be used instead of jpa reposity but jps is its superset


public interface BookRepository extends JpaRepository<Book, Long> {

    public List<Book> findBybookName(String Name);

}

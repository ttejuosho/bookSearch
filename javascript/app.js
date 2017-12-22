$(document).ready(function (){

    $(document).on("click", "#searchBook", function() {
       if ( $("#bookName").val() === ""){
           alert("Please Enter A Book Name to Search")
       } else {
       
        var bookName = $("#bookName").val();
        
        $("#bookName").empty();

        
        // Google Books API Key
            var APIKey = "AIzaSyCZHjfzT21eqDqHKtFwh3CcFbRVJNJgUmQ"

        // Grabbing the text in the input field and storing in bookName Variable
            
            console.log(bookName);
            var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + bookName;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function(response) {
        //    console.log(response.items);

                for (var i = 0; i < 10; i++) {
                    // console.log(response.items[i].volumeInfo.title);
                    // console.log(response.items[i].volumeInfo.authors);
                    // console.log(response.items[i].volumeInfo.categories);
                    // console.log(response.items[i].volumeInfo.description);
                    // console.log(response.items[i].volumeInfo.pageCount);
                    // console.log(response.items[i].volumeInfo.publishedDate);
                    // console.log(response.items[i].volumeInfo.publisher);
                    // console.log(response.items[i].volumeInfo.imageLinks.thumbnail);
                
                    var title = response.items[i].volumeInfo.title;
                    var author = response.items[i].volumeInfo.authors;
                    var categories = response.items[i].volumeInfo.categories;
                    var description = response.items[i].volumeInfo.description;
                    var pageCount = response.items[i].volumeInfo.pageCount;
                    var publishedDate = response.items[i].volumeInfo.publishedDate;
                    var publisher = response.items[i].volumeInfo.publisher;
                    var bookCover = response.items[i].volumeInfo.imageLinks.thumbnail;


                var newDiv = $("<div>").addClass("booksDiv");

                var imageDiv = $("<img>").addClass("bookCover").attr("src", bookCover);

                var bookInfoDiv = $("<div>").addClass("bookInfo").html(
                            "Author: " + author + 
                            "<p> Title: " + title + "</p>" + 
                            "<p> Category: " + categories + "</p>" + 
                            "<p> Number of Pages: " + pageCount + "</p>" + 
                            "<p> Published on: " + publishedDate + "</p>" + 
                            "<p> Published by: " + publisher + "</p>"
                        );
                

                newDiv.append(imageDiv);
                newDiv.append(bookInfoDiv)

                $("#resultsDiv").append(newDiv);
                
            }
                
               
            });
     } })



});


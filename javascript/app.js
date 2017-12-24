$(document).ready(function (){
    
    // Declare a variable for the words that are being searched
    var searchKeywords = [];

    $(document).on("click", "#searchBook", function() {

       if ( $("#bookName").val() === ""){
           alert("Please Enter A Book Name to Search")
       } else {

        
        var bookName = $("#bookName").val();
        $("#bookName").empty();
        $("#resultsDiv").empty();
        searchKeywords.push(bookName);
        console.log(bookName);
        console.log(searchKeywords);
        
        // Google Books API Key
            var APIKey = "AIzaSyCZHjfzT21eqDqHKtFwh3CcFbRVJNJgUmQ"

        // Grabbing the text in the input field and storing in bookName Variable
            
            var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + bookName;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function(response) {

        //    console.log(response.items);

                for (var i = 0; i < 10; i++) {

                // saving each data we need from the response to a variable
                    var title = response.items[i].volumeInfo.title;
                    var author = response.items[i].volumeInfo.authors;
                    var categories = response.items[i].volumeInfo.categories;
                    var description = response.items[i].volumeInfo.description;
                    var pageCount = response.items[i].volumeInfo.pageCount;
                    var publishedDate = response.items[i].volumeInfo.publishedDate;
                    var publisher = response.items[i].volumeInfo.publisher;
                    var bookCover = response.items[i].volumeInfo.imageLinks.thumbnail;

                    // incase Book thumbnail isnt available, use BooGle Image
                    if (bookCover === undefined) {
                        bookCover = "../assets/images/boogleImage.png"; }


                var newDiv = $("<div>").addClass("booksDiv");

                var imageDiv = $("<img>").addClass("bookCover").attr("src", bookCover);

                var bookInfoDiv = $("<div>").addClass("bookInfo").html(
                            "Author: " + author + 
                            "<p> Title: " + title + "</p>" + 
                            "<p> Category: " + categories + "</p>" + 
                            "<p> Number of Pages: " + pageCount + "</p>" + 
                            "<p> Published on: " + publishedDate + "</p>" + 
                            "<p> Published by: " + publisher + "</p>" + 
                            "<p> Description: " + description + "</p>"
                        );
                

                newDiv.append(imageDiv);
                newDiv.append(bookInfoDiv)

                $("#resultsDiv").append(newDiv);
                
            }
                
               
            });
     } })



});


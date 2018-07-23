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
        

        // Grabbing the text in the input field and storing in bookName Variable
            
            var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + bookName;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function(response) {

        //    console.log(response.items);

                for (var i = 0; i < 10; i++) {
                    // incase Book thumbnail isnt available, use BooGle Image
                    if (bookCover = undefined) {
                        bookCover = "../assets/images/boogleImage.png"; }
                        
                        if (categories === undefined || 
                            pageCount === undefined || 
                            description === undefined || 
                            publisher === undefined || 
                            publishedDate === undefined ) {
    
                            categories === "Not Available" || 
                            pageCount === "Not Available" ||
                            description === "Not Available" ||
                            publisher === "Not Available" ||
                            publishedDate === "Not Available"
                        };
                // saving each data we need from the response to a variable
                    var title = response.items[i].volumeInfo.title;
                    var author = response.items[i].volumeInfo.authors;
                    var categories = response.items[i].volumeInfo.categories;
                    var description = response.items[i].volumeInfo.description;
                    var pageCount = response.items[i].volumeInfo.pageCount;
                    var publishedDate = response.items[i].volumeInfo.publishedDate;
                    var publisher = response.items[i].volumeInfo.publisher;
                    var bookCover = response.items[i].volumeInfo.imageLinks.thumbnail;

                    // if other Book Info arent available say "Not Available"
                    // if (categories === undefined) { categories = "Not Available" } 
                    // else if ( pageCount === undefined){ pageCount = "Not Available" } 
                    // else if (description === undefined){description = "Not Available" } 
                    // else if (publisher === undefined){publisher = "Not Available" }
                    // else {publishedDate === "Not Available" }


        // Creating new Div and assigning to a newDiv variable and giving it a class of booksDiv   
                var newDiv = $("<div>").addClass("booksDiv");
    
        // New ImageDiv with a Class of BookCover and assigning a src of the bookCover variable
                var imageDiv = $("<img>").addClass("bookCover").attr("src", bookCover);

        // new Div with class of bookInfo and insert all the bookinfo in the Div
                var bookInfoDiv = $("<div>").addClass("bookInfo").html(
                        "Author: " + author + 
                        "<p> Title: " + title + "</p>" + 
                        "<p> Category: " + categories + "</p>" + 
                        "<p> Number of Pages: " + pageCount + "</p>" + 
                        "<p> Published on: " + publishedDate + "</p>" + 
                        "<p> Published by: " + publisher + "</p>" + 
                        "<p> Description: " + description + "</p>"
                    );
                
            // append imageDiv & BookInfo to newDiv
                newDiv.append(imageDiv);
                newDiv.append(bookInfoDiv)
            // append newDiv to DOM
                $("#resultsDiv").append(newDiv);
                
            }
                
               
            });
     } })



});


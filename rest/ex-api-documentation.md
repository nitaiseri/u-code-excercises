# **Movie-Actor API**
## **Overview**
In this API we have 2 main object/resoures:
* **Movies**
* **Actors**
----
## **Movies object :**
### **Properties**:

* **title** - _string_. The full name of the movie.
* **plot** - _string_. A short plot description of the movie.
* **poster** - _string_. A URL to the actor’s image
* **budget** - _number_. The movie’s budget in US dollars.
* **revenue** - _number_. The movie’s revenue up-to-date in US dollars.
* **genres** - _string array_. An array of strings representing the movie’s genres (eg.Comedy, Drama, etc.)
* **popularity** - _number_. A float from 0 to 10 representing the movie’s popularity. 9.93 is a very popular movie, while 1.3 is an unknown movie.
* **review** - _number_. A float from 0 to 10 representing an average of the movie’s professional review.
* **runtime** - _number_. An integer of the movie’s runtime in minutes.

----
### **General Use** :
  <_Support CRUD opperation on movies._>

* **URL**

  <_https://api.movie-actor.com/movies_>

* **Method:**
  
  <_The request type_>

  `GET` | `POST` | `DELETE` | `PUT`

* **Get movies from API:** <br />
Get a movie JSON format by id. <br>
  Path: <_https://api.movie-actor.com/movies/{id_num}_>

  * **Success Response:**

    * **Code:** 200 <br />
        **Content:** Movie object (See example)
 
  * **Error Response:**

    * **Code:** 404 Not Found <br />
        **Content-Type**: application/json
        **Content:** 
        ```json
        {
            "error": "Invalid movie ID", 
        }
        ```

  * **Example:**

  ```json
  Request:

  **GET** https://api.movie-actor.com/movies/192 HTTP/1.1

  Respone:

    HTTP/1.1 200 OK

        {
            "movieId" : 192,
            "title" : "Harry Potter and the Goblet of Fire",
            "plot" : "During Harry's fourth year, Hogwarts  plays host to the Triwizard Tournament. Three European schools participate in the tournament, with three 'champions' representing each school in the deadly tasks. The Goblet of Fire chooses Fleur Delacour, Viktor Krum, and Cedric Diggory to compete against each other. However, Harry's name is also produced from the Goblet thus making him a fourth champion, which leads to a terrifying encounter with a reborn Lord Voldemort.",
            "poster" : "https://www.amazon.com/Harry-Potter-Goblet-Daniel-Radcliffe/dp/B000GOVLNK",
            "budget" : 150000000,
            "revenue" : 896000000,
            "genres" : ["adventure","fantasy","detective"],
            "popularity" : 9.2,
            "review" : 10,
            "runtime" : 157,
        }
  ```

* **Add movie to API:** <br />
Used for creating a movie in the API . <br>
  Path: <_https://api.movie-actor.com/movies_>

    * **Success Response:**

        * **Code:** 201 Created <br />
            **Content:** Movie object (See example)
    
    * **Error Response:**

        * **Code:** 400 Bad request <br />
            **Content-Type**: application/json
            **Content:** 
            ```json
            {
               "error": "Invalid data", 
                "details": {
                    "title": "required"
                }
            }
            ```

  * **Example:**

  ```json
  Request:

  **POST** https://api.movie-actor.com/movies HTTP/1.1
  {
            "title" : "Harry Potter and the Goblet of Fire",
            "plot" : "During Harry's fourth year, Hogwarts  plays host to the Triwizard Tournament. Three European schools participate in the tournament, with three 'champions' representing each school in the deadly tasks. The Goblet of Fire chooses Fleur Delacour, Viktor Krum, and Cedric Diggory to compete against each other. However, Harry's name is also produced from the Goblet thus making him a fourth champion, which leads to a terrifying encounter with a reborn Lord Voldemort.",
            "poster" : "https://www.amazon.com/Harry-Potter-Goblet-Daniel-Radcliffe/dp/B000GOVLNK",
            "budget" : 150000000,
            "revenue" : 896000000,
            "genres" : ["adventure","fantasy","detective"],
            "popularity" : 9.2,
            "review" : 10,
            "runtime" : 157,
        }

  Response:
  
    HTTP/1.1 201 Created
    Location: /movies/192

        {
            "movieId" : 192,
            "title" : "Harry Potter and the Goblet of Fire",
            "plot" : "During Harry's fourth year, Hogwarts  plays host to the Triwizard Tournament. Three European schools participate in the tournament, with three 'champions' representing each school in the deadly tasks. The Goblet of Fire chooses Fleur Delacour, Viktor Krum, and Cedric Diggory to compete against each other. However, Harry's name is also produced from the Goblet thus making him a fourth champion, which leads to a terrifying encounter with a reborn Lord Voldemort.",
            "poster" : "https://www.amazon.com/Harry-Potter-Goblet-Daniel-Radcliffe/dp/B000GOVLNK",
            "budget" : 150000000,
            "revenue" : 896000000,
            "genres" : ["adventure","fantasy","detective"],
            "popularity" : 9.2,
            "review" : 10,
            "runtime" : 157,
        }
  ```

* **Update movie in the API:** <br />
Used for apdate one property or more of a movie . <br>
  Path: <_https://api.movie-actor.com/movies/{movieId}_>

    * **Success Response:**

        * **Code:** 200 Ok <br />
            **Content:** Movie object (See example)
    
    * **Error Response:**

        * **Code:** 404 Not Found <br />
        **Content-Type**: application/json
        **Content:** 
        ```json
        {
            "error": "Invalid movie ID", 
        }
        ```
    * **Example:**

    ```json
    Request:

    **PUT** https://api.movie-actor.com/movies/192 HTTP/1.1
    {
                "movieId" : 192,
                "title" : "Harry Potter and the Goblet of Fire - Limited Edition",
                "plot" : "During Harry's fourth year, Hogwarts  plays host to the Triwizard Tournament. Three European schools participate in the tournament, with three 'champions' representing each school in the deadly tasks. The Goblet of Fire chooses Fleur Delacour, Viktor Krum, and Cedric Diggory to compete against each other. However, Harry's name is also produced from the Goblet thus making him a fourth champion, which leads to a terrifying encounter with a reborn Lord Voldemort.",
                "poster" : "https://www.amazon.com/Harry-Potter-Goblet-Daniel-Radcliffe/dp/B000GOVLNK",
                "budget" : 150000000,
                "revenue" : 896000000,
                "genres" : ["adventure","fantasy","detective"],
                "popularity" : 9.2,
                "review" : 10,
                "runtime" : 167,
            }

    Response:
    
        HTTP/1.1 200 Ok

            {
                "movieId" : 192,
                "title" : "Harry Potter and the Goblet of Fire- Limited Edition",
                "plot" : "During Harry's fourth year, Hogwarts  plays host to the Triwizard Tournament. Three European schools participate in the tournament, with three 'champions' representing each school in the deadly tasks. The Goblet of Fire chooses Fleur Delacour, Viktor Krum, and Cedric Diggory to compete against each other. However, Harry's name is also produced from the Goblet thus making him a fourth champion, which leads to a terrifying encounter with a reborn Lord Voldemort.",
                "poster" : "https://www.amazon.com/Harry-Potter-Goblet-Daniel-Radcliffe/dp/B000GOVLNK",
                "budget" : 150000000,
                "revenue" : 896000000,
                "genres" : ["adventure","fantasy","detective"],
                "popularity" : 9.2,
                "review" : 10,
                "runtime" : 167,
            }
    ```

* **Delete movies from API:** <br />
Delete a movie by id. <br>
  Path: <_https://api.movie-actor.com/movies/{id_num}_>

  * **Success Response:**

    * **Code:** 204 No Content<br />

  * **Example:**

  ```json
  Request:

  **DELETE** https://api.movie-actor.com/movies/192 HTTP/1.1

  Respone:

    HTTP/1.1 204 No Content
  ```
    

----
## **Actors object :**
### **Properties**:

* **name** - _string_. The full name of the actor
* **bio** - _string_. A short biography of the actor
* **image** - _string_. A URL to the actor’s image.
* **birthday** - _string_. A string representation of the actor’s birthday. For example November 13th 1980 will be “1980–13-11”
* **deathday** - _string_. A string representation of the actor’s death date. If alive value will be null.
* **gender** - _number_. 1 for female, 2 for male.
* **popularity** - _number_. A float from 0 to 10 representing the actor’s popularity. 9.93 is a very popular actor, while 1.3 is a novice known actor.

----
### **General Use** :
  <_Support CRUD opperation on actors._>

* **URL**

  <_https://api.movie-actor.com/actors_>

* **Method:**
  
  <_The request type_>

  `GET` | `POST` | `DELETE` | `PUT` 

* **Get actors from API:** <br />
Get a actor JSON format by id. <br>
  Path: <_https://api.movie-actor.com/actors/{actorId}_>

  * **Success Response:**

    * **Code:** 200 <br />
        **Content:** Actor object (See example)
 
  * **Error Response:**

    * **Code:** 404 Not Found <br />
        **Content-Type**: application/json
        **Content:** 
        ```json
        {
            "error": "Invalid actor ID", 
        }
        ```

  * **Example:**

  ```json
  Request:

  **GET** https://api.movie-actor.com/actors/192 HTTP/1.1

  Respone:

    HTTP/1.1 200 OK

        {
            "actorId" : 192,
            "name" : "Daniel Redcliffe",
            "bio" : "Daniel Jacob Radcliffe was born on July 23, 1989 in Fulham, London, England, to casting agent Marcia Gresham (née Jacobson) and literary agent Alan Radcliffe. His father is from a Northern Irish Protestant background, while his mother was born in South Africa, to a Jewish family (from Lithuania, Poland, Russia, and Germany)",
            "image" : "https://m.media-amazon.com/images/M/MV5BZmE0NzNiNzQtYTVlYS00MjljLWE4MTgtYzYxNjU2NjZkM2M4XkEyXkFqcGdeQXVyNjY5NDgzNjQ@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "birthday" : "1989-23-07",
            "deathday" : null,
            "gender" : 2,
            "popularity" : 9.2,
        }
  ```

* **Add actor to API:** <br />
Used for creating a actor in the API . <br>
  Path: <_https://api.movie-actor.com/actors_>

    * **Success Response:**

        * **Code:** 201 Created <br />
            **Content:** actor object (See example)
    
    * **Error Response:**

        * **Code:** 400 Bad request <br />
            **Content-Type**: application/json
            **Content:** 
            ```json
            {
               "error": "Invalid data", 
                "details": {
                    "deathday": "required"
                }
            }
            ```

  * **Example:**

  ```json
  Request:

  **POST** https://api.movie-actor.com/actors HTTP/1.1
    {
        "name" : "Daniel Redcliffe",
        "bio" : "Daniel Jacob Radcliffe was born on July 23, 1989 in Fulham, London, England, to casting agent Marcia Gresham (née Jacobson) and literary agent Alan Radcliffe. His father is from a Northern Irish Protestant background, while his mother was born in South Africa, to a Jewish family (from Lithuania, Poland, Russia, and Germany)",
        "image" : "https://m.media-amazon.com/images/M/MV5BZmE0NzNiNzQtYTVlYS00MjljLWE4MTgtYzYxNjU2NjZkM2M4XkEyXkFqcGdeQXVyNjY5NDgzNjQ@._V1_UX214_CR0,0,214,317_AL_.jpg",
        "birthday" : "1989-23-07",
        "deathday" : null,
        "gender" : 2,
        "popularity" : 9.2,
    }

  Response:
  
    HTTP/1.1 201 Created
    Location: /actors/192

        {
        "actorId" : 192,
        "name" : "Daniel Redcliffe",
        "bio" : "Daniel Jacob Radcliffe was born on July 23, 1989 in Fulham, London, England, to casting agent Marcia Gresham (née Jacobson) and literary agent Alan Radcliffe. His father is from a Northern Irish Protestant background, while his mother was born in South Africa, to a Jewish family (from Lithuania, Poland, Russia, and Germany)",
        "image" : "https://m.media-amazon.com/images/M/MV5BZmE0NzNiNzQtYTVlYS00MjljLWE4MTgtYzYxNjU2NjZkM2M4XkEyXkFqcGdeQXVyNjY5NDgzNjQ@._V1_UX214_CR0,0,214,317_AL_.jpg",
        "birthday" : "1989-23-07",
        "deathday" : null,
        "gender" : 2,
        "popularity" : 9.2,
    }
  ```

* **Update movie in the API:** <br />
Used for apdate one property or more of a actor . <br>
  Path: <_https://api.movie-actor.com/actors/{actorId}_>

    * **Success Response:**

        * **Code:** 200 Ok <br />
            **Content:** Actor object (See example)
    
    * **Error Response:**

        * **Code:** 404 Not Found <br />
        **Content-Type**: application/json
        **Content:** 
        ```json
        {
            "error": "Invalid actor ID", 
        }
        ```
    * **Example:**

    ```json
    Request:

    **PUT** https://api.movie-actor.com/actors/192 HTTP/1.1
        {
            "actorId" : 192,
            "name" : "Daniel Redcliffe",
            "bio" : "Daniel Jacob Radcliffe was born on July 23, 1989 in Fulham, London, England, to casting agent Marcia Gresham (née Jacobson) and literary agent Alan Radcliffe. His father is from a Northern Irish Protestant background, while his mother was born in South Africa, to a Jewish family (from Lithuania, Poland, Russia, and Germany)",
            "image" : "https://m.media-amazon.com/images/M/MV5BZmE0NzNiNzQtYTVlYS00MjljLWE4MTgtYzYxNjU2NjZkM2M4XkEyXkFqcGdeQXVyNjY5NDgzNjQ@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "birthday" : "1989-23-07",
            "deathday" : "2022-23-10",
            "gender" : 2,
            "popularity" : 10,
        }

    Response:
    
        HTTP/1.1 200 Ok

        {
            "actorId" : 192,
            "name" : "Daniel Redcliffe",
            "bio" : "Daniel Jacob Radcliffe was born on July 23, 1989 in Fulham, London, England, to casting agent Marcia Gresham (née Jacobson) and literary agent Alan Radcliffe. His father is from a Northern Irish Protestant background, while his mother was born in South Africa, to a Jewish family (from Lithuania, Poland, Russia, and Germany)",
            "image" : "https://m.media-amazon.com/images/M/MV5BZmE0NzNiNzQtYTVlYS00MjljLWE4MTgtYzYxNjU2NjZkM2M4XkEyXkFqcGdeQXVyNjY5NDgzNjQ@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "birthday" : "1989-23-07",
            "deathday" : "2022-23-10",
            "gender" : 2,
            "popularity" : 10,
        }
    ```

* **Delete actors from API:** <br />
Delete a actor by id. <br>
  Path: <_https://api.movie-actor.com/actors/{actorId}_>

  * **Success Response:**

    * **Code:** 204 No Content<br />

  * **Example:**

  ```json
  Request:

  **DELETE** https://api.movie-actor.com/actors/192 HTTP/1.1

  Respone:

    HTTP/1.1 204 No Content
  ```

  
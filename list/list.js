$(document).ready(function() {
    var Movies = [];
    GenerateMovies();


    var result = "<table style='width:100%'><tr><th>Title</th><th>Genre</th><th>Year</th><th>Rate</th><th>Profit</th></tr>";
    for (var i = 0; i < Movies.length; i++) {
        result = result + "<tr><td>" + Movies[i].Title + "</td><td>" + Movies[i].Genre + "</td><td>" + Movies[i].Year + "</td><td>" + Movies[i].Rate + "</td><td>" + Movies[i].Profit + "</td></tr>"
    }
    result += "</table>";
    $('#middle').html(result);


    $("#fGenre").keypress(function(event) {
        if (event.keyCode == 13) {
            all();
        }
    });


    function all() {
        var genre = $("#fGenre").val();
        var result = "<table style='width:100%'><tr><th>Title</th><th>Genre</th><th>Year</th><th>Rate</th><th>Profit</th></tr>";
        for (var i = 0; i < Movies.length; i++) {
            if (Movies[i].Genre.indexOf(genre) != -1) {
                result = result + "<tr><td>" + Movies[i].Title + "</td><td>" + Movies[i].Genre + "</td><td>" + Movies[i].Year + "</td><td>" + Movies[i].Rate + "</td><td>" + Movies[i].Profit + "</td></tr>";
            }

        }
        result += "</table>";
        $('#middle').html(result);

    }




    function Movie(Title, Year, Rate, Profit, Genre) {
        this.Title = Title;
        this.Year = Year;
        this.Rate = Rate;
        this.Profit = Profit;
        this.Genre = Genre;
    }


    function GenerateMovies() {
        Movies.push(new Movie("King's  Faith", 2010, 5.6, 29.8, "Drama"));
        Movies.push(new Movie("Beyond  Re-Animator", 2017, 7.3, 17.5, "Horror"));
        Movies.push(new Movie("Woman  Chaser,  The", 1994, 7.3, 18.4, "Comedy"));
        Movies.push(new Movie("Eve  and  the  Fire  Horse", 2019, 5.2, 20.2, "Drama"));
        Movies.push(new Movie("Waltz  with  Bashir  (Vals  im  Bashir)", 2003, 5.9, 23.1, "Animation|Documentary|Drama|War"));
        Movies.push(new Movie("Night  of  the  Demons", 2010, 6.3, 20.3, "Horror"));
        Movies.push(new Movie("Conquest  of  the  Planet  of  the  Apes", 2015, 8.1, 16.0, "Action|Sci-Fi"));
        Movies.push(new Movie("Wild  at  Heart", 1991, 5.4, 23.5, "Crime|Drama|Mystery|Romance|Thriller"));
        Movies.push(new Movie("TerrorStorm:  A  History  of  Government-Sponsored  Terrorism", 2001, 7.6, 17.7, "Documentary"));
        Movies.push(new Movie("Bordertown", 1999, 7.8, 22.3, "Crime|Drama"));
        Movies.push(new Movie("Lady  is  Willing,  The", 2011, 9.0, 26.9, "Comedy|Drama|Romance"));
        Movies.push(new Movie("Superman/Batman:  Public  Enemies", 2015, 5.5, 10.4, "Action|Animation|Fantasy"));
        Movies.push(new Movie("Blind  Shaft  (Mang  jing)", 1997, 7.2, 27.1, "Drama"));
        Movies.push(new Movie("Joe's  Palace", 2014, 7.7, 17.9, "Drama"));
        Movies.push(new Movie("Breathing  Fire", 2013, 6.4, 14.8, "Action"));
        Movies.push(new Movie("Ride  Along", 1991, 6.7, 9.9, "Action|Comedy"));
        Movies.push(new Movie("Rules  of  Single  Life", 2008, 5.1, 11.0, "Documentary"));
        Movies.push(new Movie("Deadline", 2013, 7.3, 28.1, "Documentary"));
        Movies.push(new Movie("Powder  Blue", 2016, 6.2, 21.7, "Drama"));
        Movies.push(new Movie("L-Shaped  Room,  The", 2013, 7.6, 13.0, "Drama"));
        Movies.push(new Movie("Mr.  Hobbs  Takes  a  Vacation", 2005, 5.2, 5.1, "Comedy"));
        Movies.push(new Movie("Magic  of  Méliès,  The  (magie  Méliès,  La)", 2000, 7.9, 6.8, "Documentary"));
        Movies.push(new Movie("Day  of  the  Locust,  The", 1998, 6.1, 29.8, "Drama"));
        Movies.push(new Movie("Green  Street  Hooligans  (a.k.a.  Hooligans)", 2017, 8.4, 14.5, "Crime|Drama"));
        Movies.push(new Movie("Lord  of  Tears", 1998, 8.9, 8.3, "Drama|Horror"));
        Movies.push(new Movie("Hills  Have  Eyes,  The", 2003, 7.6, 25.3, "Drama|Horror|Thriller"));
        Movies.push(new Movie("Santa's  Pocket  Watch", 2016, 5.5, 18.0, "(no  genres  listed)"));
        Movies.push(new Movie("Silent  Partner,  The", 2003, 6.5, 19.1, "Crime|Drama|Thriller"));
        Movies.push(new Movie("Love  Me  Tonight", 2018, 6.7, 19.4, "Comedy|Musical"));
        Movies.push(new Movie("Buffalo  '66  (a.k.a.  Buffalo  66)", 1998, 6.2, 29.1, "Drama|Romance"));
        Movies.push(new Movie("Powder  Room", 2002, 6.1, 29.8, "Comedy"));
        Movies.push(new Movie("Pirates  of  the  Great  Salt  Lake", 2010, 8.9, 13.6, "Adventure|Comedy"));
        Movies.push(new Movie("Blithe  Spirit", 2013, 5.4, 19.7, "Comedy|Drama|Fantasy|Romance"));
        Movies.push(new Movie("Kids", 2018, 6.4, 20.7, "Drama"));
        Movies.push(new Movie("Chicago", 2015, 8.4, 18.2, "Comedy|Crime|Drama|Musical"));
        Movies.push(new Movie("At  Play  in  the  Fields  of  the  Lord", 2018, 5.4, 11.8, "Drama"));
        Movies.push(new Movie("Head  Over  Heels", 2009, 7.7, 21.0, "Comedy|Romance"));
        Movies.push(new Movie("Fetching  Cody", 1994, 8.2, 6.5, "Drama"));
        Movies.push(new Movie("Big  Blonde,  The  (Iso  vaalee)", 1993, 7.2, 24.4, "Comedy|Drama"));
        Movies.push(new Movie("Nice  Guys  Sleep  Alone", 2018, 5.7, 19.1, "Comedy|Romance"));
        Movies.push(new Movie("Code,  The  (Mentale,  La)", 2006, 8.1, 9.0, "Action|Crime|Thriller"));
        Movies.push(new Movie("Duchess,  The", 2014, 6.9, 10.1, "Drama|Romance"));
        Movies.push(new Movie("Never  Say  Never  Again", 2003, 6.6, 13.2, "Action|Adventure|Thriller"));
        Movies.push(new Movie("Ingmar  Bergman  Makes  a  Movie", 1996, 7.7, 10.8, "Documentary"));
        Movies.push(new Movie("Imaginary  Heroes", 2000, 6.3, 8.0, "Comedy|Drama"));
        Movies.push(new Movie("Joe  Kidd", 2008, 6.7, 17.5, "Western"));
        Movies.push(new Movie("Mélo", 2013, 6.6, 5.5, "Drama|Romance"));
        Movies.push(new Movie("Applause", 2008, 5.8, 14.9, "Drama|Musical"));
        Movies.push(new Movie("Jerry  Seinfeld:  'I'm  Telling  You  for  the  Last  Time'", 2015, 6.1, 21.7, "Comedy|Documentary"));
        Movies.push(new Movie("Gardenia", 2004, 6.7, 15.3, "Crime"));
        Movies.push(new Movie("Three  Musketeers,  The", 2014, 5.6, 7.8, "Action|Adventure"));
        Movies.push(new Movie("Legally  Blonde  2:  Red,  White  &  Blonde", 2005, 8.6, 29.1, "Comedy"));
        Movies.push(new Movie("Blank  Check", 1995, 5.0, 13.2, "Children|Comedy"));
        Movies.push(new Movie("Starsuckers", 2020, 6.3, 5.7, "Documentary"));
        Movies.push(new Movie("3  Holiday  Tails  (Golden  Christmas  2:  The  Second  Tail,  A)", 1993, 6.8, 9.1, "Children|Comedy|Romance"));
        Movies.push(new Movie("Futuresport", 2018, 6.5, 6.3, "Action|Sci-Fi|Thriller"));
        Movies.push(new Movie("Pronto", 2001, 6.4, 5.8, "Comedy|Crime|Thriller"));
        Movies.push(new Movie("Hôtel  des  Invalides", 2018, 8.8, 9.2, "Documentary"));
        Movies.push(new Movie("Streets  of  Fire", 2010, 5.2, 8.9, "Action|Romance"));
        Movies.push(new Movie("You  Again", 1998, 5.5, 24.6, "Comedy"));
        Movies.push(new Movie("I  Have  Found  It  (Kandukondain  Kandukondain)", 1995, 6.2, 16.9, "Comedy|Drama|Musical|Romance"));
        Movies.push(new Movie("On  His  Own  (a.k.a.  My  Apprenticeship)  (V  lyudyakh)", 2009, 6.4, 24.5, "Drama"));
        Movies.push(new Movie("Loaded", 2001, 6.0, 18.2, "Action|Crime|Drama|Thriller"));
        Movies.push(new Movie("Ninja,  A  Band  of  Assassins  (Shinobi  No  Mono)", 2002, 6.0, 29.9, "Action|Drama"));
        Movies.push(new Movie("Handful  of  Dust,  A", 2014, 7.8, 16.2, "Drama"));
        Movies.push(new Movie("Smashing  Pumpkins:  If  All  Goes  Wrong", 2014, 5.6, 7.0, "Documentary|Musical"));
        Movies.push(new Movie("Ninja  Cheerleaders", 1998, 5.5, 8.1, "Action|Comedy"));
        Movies.push(new Movie("Family  Business", 2006, 8.3, 5.0, "Comedy"));
        Movies.push(new Movie("Pieces  of  April", 2013, 6.0, 8.5, "Comedy|Drama"));
        Movies.push(new Movie("Smokey  and  the  Bandit  II", 2002, 8.3, 25.5, "Action|Comedy"));
        Movies.push(new Movie("Monty  Python  and  the  Holy  Grail", 2011, 6.4, 21.6, "Adventure|Comedy|Fantasy"));
        Movies.push(new Movie("Go  Go  Tales", 2008, 7.7, 13.5, "Comedy|Drama"));
        Movies.push(new Movie("The  Great  Scout  &  Cathouse  Thursday", 2018, 5.9, 14.6, "Action|Comedy|Western"));
        Movies.push(new Movie("Donos  de  Portugal", 2003, 6.5, 16.2, "Documentary"));
        Movies.push(new Movie("Tough  Enough  (Knallhart)", 1990, 7.6, 20.1, "Crime|Drama"));
        Movies.push(new Movie("Drunk  Stoned  Brilliant  Dead:  The  Story  of  the  National  Lampoon", 2002, 8.9, 29.1, "Comedy|Documentary"));
        Movies.push(new Movie("Tusk", 1993, 7.5, 21.0, "Comedy|Drama|Horror"));
        Movies.push(new Movie("Kickboxer", 1996, 7.0, 24.2, "Action"));
        Movies.push(new Movie("10th  Judicial  Court:  Judicial  Hearings,  The  (10e  chambre  -  Instants  d'audience)", 2004, 6.0, 27.6, "Documentary"));
        Movies.push(new Movie("Deep  Impact", 1998, 8.9, 28.9, "Drama|Sci-Fi|Thriller"));
        Movies.push(new Movie("Hoffa", 2017, 5.8, 14.6, "Crime|Drama"));
        Movies.push(new Movie("Tarzan  the  Ape  Man", 2008, 5.8, 6.5, "Action|Adventure"));
        Movies.push(new Movie("Lone  Ranger,  The", 2011, 5.3, 13.7, "Adventure|Western"));
        Movies.push(new Movie("Adventures  of  Ichabod  and  Mr.  Toad,  The", 2019, 7.2, 20.8, "Animation|Children"));
        Movies.push(new Movie("Star  Wars:  Episode  V  -  The  Empire  Strikes  Back", 1990, 5.9, 14.6, "Action|Adventure|Sci-Fi"));
        Movies.push(new Movie("Season  for  Miracles,  A", 2014, 6.1, 13.4, "Children|Romance"));
        Movies.push(new Movie("Novo", 1999, 5.7, 14.8, "Drama"));
        Movies.push(new Movie("Evangelion:  3.0  You  Can  (Not)  Redo", 2016, 8.5, 25.8, "Action|Animation|Drama"));
        Movies.push(new Movie("Paradise", 2000, 6.1, 19.0, "Drama"));
        Movies.push(new Movie("Black  Windmill,  The", 2002, 6.4, 8.2, "Crime|Drama"));
        Movies.push(new Movie("Rosario  Tijeras", 2015, 5.9, 22.8, "Crime|Drama|Romance"));
        Movies.push(new Movie("One  in  a  Million:  The  Ron  LeFlore  Story", 1992, 5.1, 10.4, "Drama"));
        Movies.push(new Movie("Thompsons,  The", 1992, 8.3, 12.4, "Drama|Horror|Thriller"));
        Movies.push(new Movie("In  the  Mouth  of  Madness", 2017, 5.7, 7.8, "Horror|Thriller"));
        Movies.push(new Movie("Animal  Room", 2019, 8.3, 12.2, "Drama|Thriller"));
        Movies.push(new Movie("Father  and  Son  (Otets  i  syn)", 2019, 8.8, 29.1, "Drama"));
        Movies.push(new Movie("Baby's  Day  Out", 1990, 8.0, 20.4, "Comedy"));
        Movies.push(new Movie("Blue", 2018, 7.8, 21.9, "Drama"));
        Movies.push(new Movie("Cinderella  III:  A  Twist  in  Time", 2017, 7.4, 29.5, "Animation|Children|Fantasy|Romance"));
        Movies.push(new Movie("Prisoners  of  the  Lost  Universe", 2010, 6.0, 18.6, "Action|Adventure|Sci-Fi"));

    }
});
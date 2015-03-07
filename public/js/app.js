
$( document ).ready(function (){
  var data;
    // all of the selectors needed for the page
  $.getJSON('/api/random.json', function(data){
    var posts = data.data.children;
    for(var i = 0; i < posts.length; i++){
      renderPost(posts[i].data);
      // console.log(posts[i].data);
    }
  });
  $.getJSON('http://www.reddit.com/r/pics.json', function(data){
    var posts= data.data.children;
    for(var i = 0; i < posts.length; i++){
      renderPost(posts[i].data);
      // console.log(posts[i].data);
    }
  });
    $.getJSON('http://www.reddit.com/r/pimpcats.json', function(data){
    var posts= data.data.children;
    for(var i = 0; i < posts.length; i++){
      renderPost(posts[i].data);
      // console.log(posts[i].data);
    }
  });
      $.getJSON('http://www.reddit.com/r/EarthPorn.json', function(data){
    var posts= data.data.children;
    for(var i = 0; i < posts.length; i++){
      renderPost(posts[i].data);
      // console.log(posts[i].data);
    }
  });

  function renderPost (article_data){
    var page = $('<div>', {"class" : "page"});
    //creates a new page div for our rendered articles
    var img = $('<div>', {"class" : "img"});
    //creates a new img div for our rendered image.
    var title = $("<div>", {"class" : "title"});
    //creates a new div for the title
    var baseinfo = $("<div>", {"class" : "basic_info"});
    //creates a new div for out author, date, views;
    var author = $("<div>", {"class" : "author"});
    //creates a new div called author
    var date = $("<div>", {"class" : "date"});
    //creates a new div called date
    var views = $("<div>", {"class" : "views"});
    //creates a new div views
    var article = $("<div>", {"class" : "article"});
    //creates a new div article

    baseinfo.append(author, date, views);
    // apended article , date and views to baseinfo
    img.append('<img src="'+ article_data.url +'">');
    //
    title.append(article_data.title);
    //
    author.append(article_data.author);
    //
    date.append(article_data.created);
    //
    views.append("Views: " + article_data.score );
    //
    article.append("<p>Very well. Death! By exile. Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.Very well. Death! By exile.Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.</p>");
    //
    page.append(img, title, baseinfo, article);
    $('.main_content').append(page);
    console.log(article_data);

  }
  // processData(gta);
});
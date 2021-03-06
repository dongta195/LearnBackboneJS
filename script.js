// Backbone Model
var Blog = Backbone.Model.extend({
  defaults: {
    author: "",
    title: ""
  }
});

// Backbone Collection
var Blogs = Backbone.Collection.extend({});

// instantiate two Blogs
var blog1 = new Blog({
  author: "bachdz",
  title: "Bachdz\'s blogs",
  url: "https://bachdz.com"
});

var blog2 = new Blog({
  author: "skyydz",
  title: "Skyydz\'s blogs",
  url: "https://skyydz.com"
});

var blogs = new Blogs([blog1, blog2]);

// Backbone view for one blog

var BlogView = Backbone.View.extend({
  model: new Blog(),
  tagName: 'tr',
  initialize: function() {
    this.template = _.template($('.blogs-list-template').html());
  },
  render: function() {
    this.$el.html(this.template({model: this.model.toJSON()}));
  }
});

var BlogsView = Backbone.View.extend({
  model: blogs,
  el: $('.blogs-list'),
  initialize: function() {
    this.model.on('add', this.render(), this);
  },
  render: function() {
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(), function(blog){

    });
  }
});

$(document).ready(function(){
  $('.add-blog').on('click', function(){
    var blog = new Blog({
      author: $('.author-input').val(),
      title: $('.title-input').val(),
      url: $(".url-input").val()
    });
    console.log(blog.toJSON());
  })
});

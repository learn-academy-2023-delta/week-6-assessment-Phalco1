# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The application controller. It's a file used to generate commands with methods. You access the method in the control through a url request.

class BlogPostsController < ApplicationController
  def index

    # ---2) The index RESTful route. In the method, you make an Active Record call that will save the content from the database as an instance variable.

    @posts = BlogPost.all
  end

  # ---3) Show is a RESTful route that looks for one item in the database. It's done by accessing the id of the item from the url params. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) New is another RESTful route that displays a form for the user. The ability to add information to the app.
  def new
    @post = BlogPost.new
  end

  def create

    # ---5) This is the Create RESTful route that submits user data to the database. The Create action calls the strong params method and will be listed under the keyword private.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit

    # ---6) It's an Active Record call to find an item by its ID. Primary Key. Come from the url params.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])

    # ---7) The Update Restful route modifies an existing item in the database. The id of the item is needed and the strong params method is called to request the modification of the database content.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy

      # ---8) This is a reference to a route alias. It's indicated by the _path keyword. It's used in links for the view, and in this case, redirects in the controller method.
      redirect_to blog_posts_path
    end
  end

  # ---9) Private a keyword that restricts the scope of where a method can be called. There's not an option to call these methods anywhere else in the program.
  private
  def blog_post_params

    # ---10) Strong params method. Provides control over what information is being allowed in the database. Dictates with created and updated attributes. Sets restrictions on the controller methods.
    params.require(:blog_post).permit(:title, :content)
  end
end

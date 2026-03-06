import "./Blog.css";

export default function Blog(){
    return (

        <div className="blog-page">

        {/* hero ---- section */}
        <section className="blog-hero">
            <span className="blog-tag">Blog</span>
            
            <h1>Discover our latest News</h1>

            <p>
                Discover the achievements that set us apart. From groundbreaking
                projects to industry accolades, we take pride in our accomplishments.
            </p>

            {/* search */}
            <div className="blog-search">
                <input type="text" placeholder="Input Placeholder"/>
                <button>Find Now</button>
            </div>
        </section>

        {/* CONTENT AREA */}
      <section className="blog-content">

        {/* LEFT BLOG GRID */}
        <div className="blog-grid">

          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" />
            <div className="blog-overlay">
              <span className="blog-category">AI Innovation</span>
              <h3>he Future of Artificial Intelligence in Product Development</h3>
              <p>
                Artificial Intelligence is transforming how modern applications are built.
                 
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" />
            <div className="blog-overlay">
              <span className="blog-category">Machine Learning</span>
              <h3>Building Scalable Machine Learning Systems </h3>
              <p>
                Machine learning models are powerful, 
                but deploying them efficiently is the real challenge.
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" />
            <div className="blog-overlay">
              <span className="blog-category">Data Science</span>
              <h3>Turning Data Into Business Intelligence</h3>
              <p>
                Organizations generate massive amounts of data every day
              </p>
            </div>
          </div>


          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" />
            <div className="blog-overlay">
              <span className="blog-category">Cloud Technology</span>
              <h3>Cloud Infrastructure for Modern AI Applications</h3>
              <p>
                Cloud platforms allow developers to build scalable and reliable AI applications.
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f" />
            <div className="blog-overlay">
              <span className="blog-category">Software Development</span>
              <h3>Building Scalable Applications for the Future</h3>
              <p>
                Modern software development focuses on scalability, performance, and user experience.
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3" />
            <div className="blog-overlay">
              <span className="blog-category">Cybersecurity</span>
              <h3>Securing AI Systems in the Digital Era</h3>
              <p>
                As AI systems become more powerful, cybersecurity becomes critical.
              </p>
            </div>
          </div>

        </div>


        {/* SIDEBAR */}
        <div className="blog-sidebar">

          <h3>Featured</h3>

          <div className="featured-item">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800" />
            <div>
              <span>August 7, 2017</span>
              <p>Top Hidden Gems: Must-Visit Spots This Year</p>
            </div>
          </div>

          <div className="featured-item">
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d" />
            <div>
              <span>March 23, 2013</span>
              <p>Bucket List: 25 Adventures for Every Traveler</p>
            </div>
          </div>

          <div className="featured-item">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" />
            <div>
              <span>May 31, 2015</span>
              <p>Travel Like a Local: Tips for Authentic Experiences</p>
            </div>
          </div>


          <div className="featured-item">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" />
            <div>
              <span>May 31, 2015</span>
              <p>Travel Like a Local: Tips for Authentic Experiences</p>
            </div>
          </div>


          <div className="featured-item">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" />
            <div>
              <span>May 31, 2015</span>
              <p>Travel Like a Local: Tips for Authentic Experiences</p>
            </div>
          </div>

        </div>

      </section>

    </div>

    
    )
}
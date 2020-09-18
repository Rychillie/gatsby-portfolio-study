import React from "react"

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="container">
        <div className="video-player">
          <video
            poster="https://instagram.fpoa14-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/53006846_539912093081814_3463245754746190054_n.jpg?_nc_ht=instagram.fpoa14-1.fna.fbcdn.net&amp;_nc_cat=106&amp;_nc_ohc=oCFWkXhhrmQAX9-zE83&amp;oh=35ef05942b73d85ef4860689e3bea597&amp;oe=5F663140"
            controls
            type="video/mp4"
            src="https://instagram.fpoa14-1.fna.fbcdn.net/v/t50.2886-16/53730396_2071478279602567_7391671117649281024_n.mp4?cb=ae824530-ca00428a&efg=eyJxZV9ncm91cHMiOiJbXCJpZ19wcm9ncmVzc2l2ZV91cmxnZW4ucHJvZHVjdF90eXBlLmZlZWRcIl0ifQ&_nc_ht=instagram.fpoa14-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=pSYJx92C51kAX8Z9XjY&oe=5F6665E3&oh=6352c4a1c3d886fddb6930ce645dd23f"
          />
        </div>
        <div className="video-content">
          <div className="title">
            <h3>Let's Talk About It Now</h3>
          </div>
          <div className="content">
            <p>
              I’m so happy to present the 1st trailer of the film. “Let’s Talk
              About It Now” is a film that focuses on Mental health in the
              African community, and the black race as a whole, as this is a
              topic we tend to shy away from in our community . With this film,
              we hope to reduce/eradicate the stigma surrounding Mental Health
              In our community, making it a topic that is freely discussed as
              opposed to leaving it on the back burner.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection

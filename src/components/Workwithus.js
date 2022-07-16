import bubble1 from "../media/others/bubble-12.png"
import bubble2 from "../media/others/bubble-13.png"
import bubble3 from "../media/others/bubble-14.png"
import bubble4 from "../media/others/bubble-16.png"
import bubble5 from "../media/others/bubble-15.png"
import chatbot from "../media/others/chat-bot.png"
import bellicon from "../media/others/bell-icon.png"
import mouse from "../media/others/mouse.png"
import keyboard from "../media/others/keyboard.png"
import comment from "../media/others/comment.png"
import pc from "../media/others/pc.png"

const Workwithus =()=>{







    return(




        <>
        <section className="section call-to-action-area">
  <div className="container">
    <div className="call-to-action">
      <div className="section-heading heading-light">
        <span className="subtitle">Let's Work Together</span>
        <h2 className="title">Need a successful project?</h2>
        <a href="contact.html" className="axil-btn btn-large btn-fill-white">Estimate Project</a>
      </div>
      <div className="thumbnail">
        <div className="larg-thumb" data-sal="zoom-in" data-sal-duration={600} data-sal-delay={100}>
          <img src={pc} alt="Computer" />
        </div>
        <ul className="list-unstyled small-thumb">
          <li className="shape shape-1" data-sal="slide-right" data-sal-duration={800} data-sal-delay={400}>
            <img src={comment} alt="Comments" />
          </li>
          <li className="shape shape-2" data-sal="slide-up" data-sal-duration={800} data-sal-delay={300}>
            <img src={keyboard} alt="Comments" />
          </li>
          <li className="shape shape-3" data-sal="slide-right" data-sal-duration={800} data-sal-delay={300}>
            <img src={mouse} alt="Comments" />
          </li>
          <li className="shape shape-4" data-sal="slide-left" data-sal-duration={800} data-sal-delay={300}>
            <img src={bellicon} alt="Comments" />
          </li>
          <li className="shape shape-5" data-sal="zoom-in" data-sal-duration={800} data-sal-delay={200}>
            <img src={chatbot} alt="Comments" />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ul className="list-unstyled shape-group-9">
    <li className="shape shape-1"><img src={bubble1} alt="Comments" /></li>
    <li className="shape shape-2"><img src={bubble4} alt="Comments" /></li>
    <li className="shape shape-3"><img src={bubble2} alt="Comments" /></li>
    <li className="shape shape-4"><img src={bubble3} alt="Comments" /></li>
    <li className="shape shape-5"><img src={bubble4} alt="Comments" /></li>
    <li className="shape shape-6"><img src={bubble5} alt="Comments" /></li>
    <li className="shape shape-7"><img src={bubble4} alt="Comments" /></li>
  </ul>
</section>
        </>
    )
    }




    export default Workwithus
const dots = document.querySelectorAll(".dot");

const testimonials = [
  {
    id: 0,
    imageUrl: "./images/avatar-ali.png",
    name: "Ali Bravo",
    text: `“We have been able to cancel so many other subscriptions since using 
    Manage. There is no more cross-channel confusion and everyone is much 
    more focused.”`,
  },
  {
    id: 1,
    imageUrl: "./images/avatar-anisha.png",
    name: "Anisha Li",
    text: `“Manage has supercharged our team’s workflow. The ability to maintain 
    visibility on larger milestones at all times keeps everyone motivated.”`,
  },
  {
    id: 2,
    imageUrl: "./images/avatar-richard.png",
    name: "Richard Watts",
    text: `“Manage allows us to provide structure and process. It keeps us organized 
    and focused. I can’t stop recommending them to everyone I talk to!”`,
  },
  {
    id: 3,
    imageUrl: "./images/avatar-shanai.png",
    name: "Shanai Gough",
    text: `“Their software allows us to track, manage and collaborate on our projects 
    from anywhere. It keeps the whole team in-sync without being intrusive.”`,
  },
];

dots.forEach((dot, index) => {
  let testimonial;
  dot.addEventListener("click", () => {
    if (index === 0) {
      dot.classList.add("active");
      testimonial = testimonials[0];
      changeDOM(testimonial);
    } else if (index === 1) {
      dot.classList.add("active");
      testimonial = testimonials[1];
      changeDOM(testimonial);
    } else if (index === 2) {
      dot.classList.add("active");
      testimonial = testimonials[2];
      changeDOM(testimonial);
    } else if (index === 3) {
      dot.classList.add("active");
      testimonial = testimonials[3];
      changeDOM(testimonial);
    }
  });
});

function changeDOM(testimonial) {
  const testimonialDOM = document.getElementById("testimonial");
  testimonialDOM.querySelector("img").src = testimonial.imageUrl;
  testimonialDOM.querySelector("h3").textContent = testimonial.name;
  testimonialDOM.querySelector("p").textContent = testimonial.text;
}

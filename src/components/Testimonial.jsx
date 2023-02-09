import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Dhiraj"}
          feedback={"Well Done Bro!!"}
        />
        <TestimonialCard
          name={"Punit"}
          feedback={"Awesome site Bhiya!"}
        />
         <TestimonialCard
          name={"Sourav"}
          feedback={"Good going...."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
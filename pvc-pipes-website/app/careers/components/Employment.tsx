"use client";

export default function Employment() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-[rgb(11,58,96)]">
            Employment Opportunities
          </h1>
        </div>

        {/* Main Content */}
        <div className="section-content">
          {/* Section Title */}
          <h2 className="text-[1.5rem] font-semibold text-[#333333] mb-[15px]">
            Working at JM Eagle™
          </h2>

          {/* Subsection */}
          <h3 className="text-[1.1rem] font-semibold text-[#00a35a] mb-5">
            Our People
          </h3>

          {/* Paragraphs */}
          <p>
            They say a company is only as strong as its people and JM Eagle™ is
            no exception. Our growth and success is inextricably linked to our
            most important asset – our people. JM Eagle™ is fortunate to have
            some of the best, brightest, most knowledgeable, and dedicated
            employees in the pipe industry.
          </p>

          <p>
            We pride ourselves on being an exceptional place to work and grow.
            Since our inception in the early 1980's, JM Eagle™ has grown to be
            the premier pipe manufacturing company in the world, second to none.
            The opportunities and rewards are endless to those willing to put
            forth that extra effort and dedication towards their job and
            responsibilities.
          </p>

          <p>
            Our benefits package includes medical, dental, vision, flexible
            spending accounts, short-term and long-term disability as well as
            pension and a 401(k) matching savings plan. Tuition reimbursement
            for professional growth is offered and encouraged.
          </p>

          <p>
            JM Eagle™ is a place of challenging opportunities due to the
            continual technological innovations and investments embarked upon.
            Utilize your talent and ambition to further your career in an
            environment that will recognize your efforts. At JM Eagle™, we value
            our employees and are dedicated to fostering a work atmosphere that
            motivates ingenuity and creative development.
          </p>

          <p>
            Explore our job postings to find listings of available positions
            throughout JM Eagle™, along with instructions on how to submit your
            resume for consideration.
          </p>

          <p>
            JM Eagle is an Equal Opportunity Employer. EOE/M/F/Vet/Disabled.
          </p>

          <p>
            If you are a qualified individual with a disability or a disabled
            veteran, you have the right to request an accommodation if you are
            unable or limited in your ability to use or access our career center
            as a result of your disability. To request an accommodation, contact
            the Human Resources Department at{" "}
            <a
              href="mailto:careers@jmeagle.com"
              className="text-[#0080b8] hover:underline"
            >
              careers@jmeagle.com
            </a>
            .
          </p>

          <p className="mb-[30px]">
            You are protected by the{" "}
            <a href="#" className="text-[#0080b8] hover:underline">
              Pay Transparency Rule
            </a>
            .
          </p>

          {/* Call-to-Action Button */}
          <button
            onClick={() => window.open("https://careers.jmeagle.com", "_blank")}
            className="btn-green"
          >
            CLICK HERE TO APPLY TO JOBS
          </button>
        </div>
      </div>
    </section>
  );
}

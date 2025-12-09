"use client"

export default function Employment() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#0080b8",
          textAlign: "center",
          marginBottom: "60px",
          fontWeight: "600",
        }}
      >
        Employment Opportunities
      </h1>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Section Title */}
        <h2
          style={{
            fontSize: "1.5rem",
            color: "#333333",
            marginBottom: "15px",
            fontWeight: "600",
          }}
        >
          Working at JM Eagle™
        </h2>

        {/* Subsection */}
        <h3
          style={{
            fontSize: "1.1rem",
            color: "#00a35a",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          Our People
        </h3>

        {/* Paragraphs */}
        <div
          style={{
            color: "#555555",
            lineHeight: "1.8",
            fontSize: "1rem",
          }}
        >
          <p style={{ marginBottom: "20px" }}>
            They say a company is only as strong as its people and JM Eagle™ is no exception. Our growth and success is
            inextricably linked to our most important asset – our people. JM Eagle™ is fortunate to have some of the
            best, brightest, most knowledgeable, and dedicated employees in the pipe industry.
          </p>

          <p style={{ marginBottom: "20px" }}>
            We pride ourselves on being an exceptional place to work and grow. Since our inception in the early 1980's,
            JM Eagle™ has grown to be the premier pipe manufacturing company in the world, second to none. The
            opportunities and rewards are endless to those willing to put forth that extra effort and dedication towards
            their job and responsibilities.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Our benefits package includes medical, dental, vision, flexible spending accounts, short-term and long-term
            disability as well as pension and a 401(k) matching savings plan. Tuition reimbursement for professional
            growth is offered and encouraged.
          </p>

          <p style={{ marginBottom: "20px" }}>
            JM Eagle™ is a place of challenging opportunities due to the continual technological innovations and
            investments embarked upon. Utilize your talent and ambition to further your career in an environment that
            will recognize your efforts. At JM Eagle™, we value our employees and are dedicated to fostering a work
            atmosphere that motivates ingenuity and creative development.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Explore our job postings to find listings of available positions throughout JM Eagle™, along with
            instructions on how to submit your resume for consideration.
          </p>

          <p style={{ marginBottom: "25px" }}>JM Eagle is an Equal Opportunity Employer. EOE/M/F/Vet/Disabled.</p>

          <p style={{ marginBottom: "20px" }}>
            If you are a qualified individual with a disability or a disabled veteran, you have the right to request an
            accommodation if you are unable or limited in your ability to use or access our career center as a result of
            your disability. To request an accommodation, contact the Human Resources Department at{" "}
            <a href="mailto:careers@jmeagle.com" style={{ color: "#0080b8", textDecoration: "none" }}>
              careers@jmeagle.com
            </a>
            .
          </p>

          <p style={{ marginBottom: "30px" }}>
            You are protected by the{" "}
            <a href="#" style={{ color: "#0080b8", textDecoration: "none" }}>
              Pay Transparency Rule
            </a>
            .
          </p>
        </div>

        {/* Call-to-Action Button */}
        <button
          style={{
            border: "2px solid #00a35a",
            backgroundColor: "#ffffff",
            color: "#00a35a",
            padding: "12px 30px",
            fontSize: "0.95rem",
            fontWeight: "600",
            cursor: "pointer",
            borderRadius: "4px",
            transition: "all 0.3s ease",
            letterSpacing: "0.5px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#00a35a"
            e.currentTarget.style.color = "#ffffff"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff"
            e.currentTarget.style.color = "#00a35a"
          }}
          onClick={() => {
            window.open("https://careers.jmeagle.com", "_blank")
          }}
        >
          CLICK HERE TO APPLY TO JOBS
        </button>
      </div>
    </section>
  )
}

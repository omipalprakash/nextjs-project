"use client"

import { useState } from "react"

export default function ContactSection() {
  const [region, setRegion] = useState("any")
  const [productCategory, setProductCategory] = useState("any")

  const departments = [
    { name: "Corporate Office", phone: "(310) 693-8200" },
    { name: "Waterworks", phone: "(310) 693-8411" },
    { name: "Electrical", phone: "(310) 693-8412" },
    { name: "Plumbing", phone: "(310) 693-8413" },
    { name: "Irrigation", phone: "(310) 693-8414" },
    { name: "Retail", phone: "(310) 693-8415" },
  ]

  return (
    <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh", paddingTop: "60px", paddingBottom: "60px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Page Title */}
        <h1
          style={{ fontSize: "48px", fontWeight: "bold", color: "#0066cc", textAlign: "center", marginBottom: "40px" }}
        >
          Contact
        </h1>

        {/* Filter Section */}
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "60px", flexWrap: "wrap" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>Region</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              style={{
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#fff",
                fontSize: "14px",
                cursor: "pointer",
                minWidth: "150px",
              }}
            >
              <option value="any">- Any -</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
              Product Category
            </label>
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              style={{
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#fff",
                fontSize: "14px",
                cursor: "pointer",
                minWidth: "150px",
              }}
            >
              <option value="any">- Any -</option>
              <option value="waterworks">Waterworks Pipe</option>
              <option value="hdpe">HDPE Pressure Pipe</option>
              <option value="plumbing">Plumbing Pipe</option>
              <option value="irrigation">Irrigation</option>
              <option value="electrical">Electrical</option>
            </select>
          </div>
        </div>

        {/* Contact Information */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px", marginBottom: "40px" }}>
          {departments.map((dept) => (
            <div key={dept.name} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "14px", fontWeight: "500", color: "#333", marginBottom: "8px" }}>{dept.name}:</p>
              <a
                href={`tel:${dept.phone.replace(/[^0-9]/g, "")}`}
                style={{
                  fontSize: "14px",
                  color: "#0066cc",
                  textDecoration: "none",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#004999")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#0066cc")}
              >
                {dept.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

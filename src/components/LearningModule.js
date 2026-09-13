import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProgressHeader from "./ProgressHeader";
import "../App.css";

function LearningModule({ userProgress }) {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [lessonProgress, setLessonProgress] = useState(40);

  const moduleContent = {
    "introduction-401k": {
      title: "Introduction to 401k",
      definition:
        "A 401(k) is a retirement savings plan offered by your employer. It allows you to contribute pre-tax dollars from your paycheck, which reduces your current taxable income and helps you save for retirement.",
      videoEmbed: '📹 Expert Video: "Why Your 401k Matters" (5 min)',
      futureValue:
        "If you invest $500/month in a 401k starting at age 25, you could have over $500,000 by age 65 (assuming 7% annual returns).",
      tryIt:
        "Open your HR portal or contact your HR department. Ask for your 401k plan details and employer match percentage.",
    },
    "roth-ira": {
      title: "Roth IRA Basics",
      definition:
        "A Roth IRA is an individual retirement account where you contribute after-tax dollars. The benefit? All your earnings grow tax-free and you can withdraw them tax-free in retirement.",
      videoEmbed: '📹 Expert Video: "Roth IRA vs Traditional IRA" (5 min)',
      futureValue:
        "A Roth IRA is especially valuable for young investors because your money has decades to compound tax-free.",
      tryIt:
        "Open a Roth IRA account at a brokerage like Robinhood, Fidelity, or Vanguard. Start with your first $100 investment.",
    },
    mortgage: {
      title: "Mortgage Demystified",
      definition:
        "A mortgage is a loan you take from a bank to buy a home. You repay it over 15-30 years with interest. Your home serves as collateral for the loan.",
      videoEmbed: '📹 Expert Video: "Understanding Mortgage Terms" (5 min)',
      futureValue:
        "Building home equity through a mortgage is a key wealth-building tool. After 30 years, you own a valuable asset outright.",
      tryIt:
        "Use an online mortgage calculator to see how different interest rates and down payments affect your monthly payment.",
    },
    stocks: {
      title: "Stock Market 101",
      definition:
        "The stock market is where shares of publicly-traded companies are bought and sold. When you buy a stock, you own a small piece of that company.",
      videoEmbed: '📹 Expert Video: "How to Start Investing in Stocks" (5 min)',
      futureValue:
        "Historically, the stock market has returned about 10% annually over long periods. Starting early gives you powerful compound growth.",
      tryIt:
        "Download a stock tracking app or open a brokerage app. Pick one stock you're interested in and follow its price for a week.",
    },
  };

  const content = moduleContent[moduleId] || moduleContent["introduction-401k"];

  const handleCompleteLesson = () => {
    setLessonProgress(100);
    setTimeout(() => {
      navigate("/progress");
    }, 1500);
  };

  return (
    <div className="screen-container">
      <header className="header">
        <h1>FinLearn</h1>
        <p>Learning Module</p>
      </header>

      <ProgressHeader
        completedModules={userProgress.completedModules.length}
        totalModules={userProgress.totalModules}
      />

      <div className="container">
        <button className="btn btn-back" onClick={() => navigate("/")}>
          ← Back to Modules
        </button>

        <div className="content">
          <h2>{content.title}</h2>

          {/* PROGRESS BAR */}
          <div className="section">
            <p style={{ fontWeight: 600, marginBottom: "8px" }}>
              Lesson Progress
            </p>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${lessonProgress}%` }}
              >
                {lessonProgress}%
              </div>
            </div>
          </div>

          {/* DEFINITION */}
          <div className="section">
            <h3 className="section-title">📖 What Is It?</h3>
            <div
              style={{
                backgroundColor: "#F5E6D3",
                padding: "20px",
                borderRadius: "4px",
                borderLeft: "4px solid #A0342D",
              }}
            >
              <p style={{ marginBottom: 0 }}>{content.definition}</p>
            </div>
          </div>

          {/* VIDEO */}
          <div className="section">
            <h3 className="section-title">🎥 Learn from an Expert</h3>
            <div
              style={{
                backgroundColor: "#E8D9C8",
                padding: "40px",
                borderRadius: "4px",
                textAlign: "center",
                border: "2px dashed #2D5F4F",
              }}
            >
              <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                {content.videoEmbed}
              </p>
              <p style={{ fontSize: "0.9rem", opacity: 0.7, marginBottom: 0 }}>
                (Video player would display here in production)
              </p>
            </div>
          </div>

          {/* FUTURE VALUE */}
          <div className="section">
            <h3 className="section-title">💰 Why This Matters</h3>
            <div
              style={{
                backgroundColor: "#4A7C59",
                color: "white",
                padding: "20px",
                borderRadius: "4px",
              }}
            >
              <p style={{ marginBottom: 0 }}>{content.futureValue}</p>
            </div>
          </div>

          {/* TRY IT */}
          <div className="section">
            <h3 className="section-title">✍️ Try It Now</h3>
            <div
              style={{
                backgroundColor: "#F9F7F4",
                padding: "20px",
                borderRadius: "4px",
                borderLeft: "4px solid #A0342D",
              }}
            >
              <p>{content.tryIt}</p>
              <button
                className="btn btn-primary"
                onClick={handleCompleteLesson}
              >
                Mark Lesson Complete
              </button>
            </div>
          </div>

          {/* NAVIGATION */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <button className="btn btn-secondary" onClick={() => navigate("/")}>
              Back to Home
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/progress")}
            >
              View Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningModule;

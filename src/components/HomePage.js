import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/sibainu.jpg";

const HomePage = () => {
  return (

    <div className="container text-center">
      <h1>今井　光明</h1>

      <img src={profileImage} className="profileImage" />

      <p>出身地:福島県郡山市</p>
      <p>生年月日:1994年6月生まれ</p>
      <p>趣味:散歩・睡眠・映画鑑賞・音楽鑑賞など</p>
      <p>職歴:家電量販店の販売員、手芸キットメーカーのWeb更新担当、インターネットサービス企業を経験。</p>
      <p>2021年6月よりWebデザインの職業訓練校にてデザインやフロントエンドコーディングを学び、Web業界へ挑戦中。</p>

    <section id="skill">
      <h1 class="title">スキル</h1>
      <div class="d-flex flex-row">

        <div className="skillbox"><h3>-Design-</h3>
          <div class="d-flex flex-column skill-item">
            <div class="services d-flex flex-row">
              <img src={reactImage} className="img-style" />
              <span class="d-flex flex-column">
                <h5>React</h5>
                <p>Reactがつかえます</p>
              </span>
            </div>
          </div>
          <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
            <img src={jsImage} className="img-style" />
            <span class="d-flex flex-column">
              <h5>HTML/CSS</h5>
              <p>HTML/CSSがつかえます</p>
            </span>
          </div>
          </div>
          <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
            <img src={firebaseImage} className="img-style" />
            <span class="d-flex flex-column">
              <h5>Firebase</h5>
              <p>Firebaseがつかえます</p>
            </span>
          </div>
          </div>
        </div>

      <div className="skillbox"><h3>-Coding-</h3>
        <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
            <img src={reactImage} className="img-style" />
            <span class="d-flex flex-column">
              <h5>React</h5>
              <p>Reactがつかえます</p>
            </span>
          </div>
        </div>
        <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
            <img src={jsImage} className="img-style" />
            <span class="d-flex flex-column">
              <h5>HTML/CSS</h5>
              <p>HTML/CSSがつかえます</p>
            </span>
          </div>
        </div>
        <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
            <img src={firebaseImage} className="img-style" />
            <span class="d-flex flex-column">
              <h5>Firebase</h5>
              <p>Firebaseがつかえます</p>
            </span>
          </div>
        </div>
      </div>

      <div className="skillbox"><h3>-Other-</h3>
        <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
            <img src={reactImage} className="img-style" />
            <span class="d-flex flex-column">
              <h5>React</h5>
              <p>Reactがつかえます</p>
            </span>
          </div>
        </div>
        <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
            <img src={jsImage} className="img-style" />
            <span class="d-flex flex-column">
              <h5>HTML/CSS</h5>
              <p>HTML/CSSがつかえます</p>
            </span>
          </div>
        </div>
        <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
            <img src={firebaseImage} className="img-style" />
            <span class="d-flex flex-column">
              <h5>Firebase</h5>
              <p>Firebaseがつかえます</p>
            </span>
          </div>
        </div>
      </div>

      </div>
    </section>

    </div>

  )
}

export default HomePage
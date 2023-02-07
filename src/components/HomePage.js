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
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={firebaseImage} />
              <h4>Firebase</h4>
              <p>Firebaseがつかえます</p>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default HomePage
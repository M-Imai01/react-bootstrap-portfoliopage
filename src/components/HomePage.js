import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/sibainu.jpg";
import DesignImage from "../Images/Design.svg";
import CodingImage from "../Images/Coding.svg";
import OtherImage from "../Images/Other.svg";
import photoshopImage from "../Images/photoshop.svg";
import illustratorImage from "../Images/illustrator.svg";
import xdImage from "../Images/xd.svg";
import PremiereProImage from "../Images/PremierePro.svg";
import htmlcssImage from "../Images/htmlcss.svg";
import JavascriptReactImage from "../Images/JavascriptReact.svg";
import RubyRailsImage from "../Images/RubyRails.svg";



const HomePage = () => {
  return (

    <div className="container text-center">
      <p>Imai Mitsuaki</p>
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

        <div className="skillbox col-4">
          <h3>-Design-</h3>
            <img src={DesignImage} className="skill-thema" />
          <div class="d-flex flex-column skill-item">
            <div class="services d-flex flex-row">
                <img src={photoshopImage} className="skill-img" />
              <span class="d-flex flex-column">
                <h5>Photoshop</h5>
                <p>写真のトリミング、色彩調整など基本操作可能</p>
              </span>
            </div>
          </div>
          <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
                <img src={illustratorImage} className="skill-img" />
            <span class="d-flex flex-column">
                  <h5>illustrator</h5>
              <p>ペンツール・ベジェ曲線の作成や、基本操作可能</p>
            </span>
          </div>
          </div>
          <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
                <img src={xdImage} className="skill-img" />
            <span class="d-flex flex-column">
              <h5>XD</h5>
              <p>サイトのトップページデザインカンプ作成可能</p>
            </span>
          </div>
          </div>
            <div class="d-flex flex-column skill-item">
              <div class="services d-flex flex-row">
                <img src={PremiereProImage} className="skill-img" />
                <span class="d-flex flex-column">
                  <h5>Premiere Pro</h5>
                  <p>動画の切り貼り、テロップの挿入など5~7分ほどの動画編集可能</p>
                </span>
              </div>
            </div>
        </div>

      <div className="skillbox col-4">
        <h3>-Coding-</h3>
        <span className="skill_thema-box">
            <img src={CodingImage} className="skill-thema" />
        </span>
        <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
                <img src={htmlcssImage} className="skill-img_union" />
            <span class="d-flex flex-column">
              <h5>HTML5/CSS3</h5>
              <p>Bootstrap5を使用したレスポンシブページが作成可能</p>
            </span>
          </div>
        </div>
        <div class="d-flex flex-column skill-item">
              <div class="services d-flex flex-row">
                <img src={JavascriptReactImage} className="skill-img_union" />
                <span class="d-flex flex-column">
              <h5>Javascript/React</h5>
              <p>jQurryなどの導入可能</p>
            </span>
          </div>
        </div>
        <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
                <img src={RubyRailsImage} className="skill-img_union" />
            <span class="d-flex flex-column">
              <h5>Ruby/Ruby on Rails</h5>
              <p>簡単なWebアプリケーションの作成可能</p>
            </span>
          </div>
        </div>
      </div>

      <div className="skillbox col-4">
        <h3>-Other-</h3>
          <span className="skill_thema-box">
            <img src={OtherImage} className="skill-thema" />
          </span>
        <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
            <img src={reactImage} className="skill-img" />
            <span class="d-flex flex-column">
              <h5>React</h5>
              <p>Reactがつかえます</p>
            </span>
          </div>
        </div>
        <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
            <img src={jsImage} className="skill-img" />
            <span class="d-flex flex-column">
              <h5>HTML/CSS</h5>
              <p>HTML/CSSがつかえます</p>
            </span>
          </div>
        </div>
        <div class="d-flex flex-column skill-item">
          <div class="services d-flex flex-row">
            <img src={firebaseImage} className="skill-img" />
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
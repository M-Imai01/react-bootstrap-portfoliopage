import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import profileImage from "../Images/profileimage.jpg";
import DesignImage from "../Images/Design.png";
import CodingImage from "../Images/Coding.png";
import OtherImage from "../Images/Other.png";
import photoshopImage from "../Images/photoshop.svg";
import illustratorImage from "../Images/illustrator.svg";
import xdImage from "../Images/xd.svg";
import PremiereProImage from "../Images/PremierePro.svg";
import htmlcssImage from "../Images/htmlcss.svg";
import JavascriptReactImage from "../Images/JavascriptReact.svg";
import RubyRailsImage from "../Images/RubyRails.svg";
import gitGithubImage from "../Images/gitGithub.svg";
import dockerImage from "../Images/docker.svg";
import awsImage from "../Images/aws.svg";
import herokuImage from "../Images/heroku.svg";


const HomePage = () => {
  return (

    <div className='wrap'>

      <div className="container text-center profile-wrap">
        <p>Imai Mitsuaki</p>
        <h1 className='myname'>今井 光明</h1>
        <img src={profileImage} className="profileImage img-fluid" />
        <div className=''>
          <p><strong className='strong-color'>出身地:</strong>福島県郡山市</p>
          <p><strong className='strong-color'>生年月日:</strong>1994年6月生まれ　<strong className='strong-color'>趣味:</strong>睡眠・映画鑑賞・音楽鑑賞など</p>
          <p><strong className='strong-color'>職歴:</strong>家電量販店の販売員や、手芸キットメーカーの自社サイト更新担当を経験後、Webデザインの職業訓練を受講。</p>
          <p>現在はHTMLコーダー職に従事しています。</p>
          <p>Webアプリケーションの作成学習と並行して、AWS Cloud Practitionerの資格取得を目指し学習中です。</p>
        </div>
      </div>

      <h2 class="title">スキル</h2>
      <section className="d-flex flex-row justify-content-evenly flex-wrap" id="skill">

        {/* 　　　　　デザインボックス 　　　　　　*/}
        <div className="skillbox col-xs-6 col-md-3">
          <span className='skill_name-top d-flex flex-column align-items-center'>
            <h3 className='skill-name'>-Design-</h3>
            <img src={DesignImage} className="skill-thema" />
          </span>

          <div class="d-flex align-items-center skill-item">
            <div class="flex-shrink-0">
              <img src={photoshopImage} alt="..." className="skill-img" />
            </div>
            <div class="flex-grow-1 ms-3 word-break">
              <span className='fw-bold'>Photoshop</span><br />
              写真のトリミング、色彩調整など基本操作可能
            </div>
          </div>

          <div class="d-flex align-items-center skill-item">
            <div class="flex-shrink-0">
              <img src={illustratorImage} alt="..." className="skill-img" />
            </div>
            <div class="flex-grow-1 ms-3 word-break">
              <span className='fw-bold'>illustrator</span><br />
              ペンツール・ベジェ曲線の作成や、基本操作可能
            </div>
          </div>

          <div class="d-flex align-items-center skill-item">
            <div class="flex-shrink-0">
              <img src={xdImage} alt="..." className="skill-img" />
            </div>
            <div class="flex-grow-1 ms-3 word-break">
              <span className='fw-bold'>XD</span><br />
              サイトのトップページデザインカンプ作成可能
            </div>
          </div>

          <div class="d-flex align-items-center skill-item">
            <div class="flex-shrink-0">
              <img src={PremiereProImage} alt="..." className="skill-img" />
            </div>
            <div class="flex-grow-1 ms-3 word-break">
              <span className='fw-bold'>Premiere Pro</span><br />
              動画の切り貼り、テロップの挿入など5~7分ほどの動画編集可能
            </div>
          </div>

        </div>

        {/* 　　　　　　　　　コーディングボックス　　　　　　　 */}

        {/* <div class="d-flex flex-row justify-content-evenly"> */}

        <div className="skillbox col-xs-6 col-md-3">
          <span className='skill_name-top d-flex flex-column align-items-center'>
            <h3 className='skill-name'>-Coding-</h3>
            <img src={CodingImage} className="skill-thema" />
          </span>

          <div class="d-flex align-items-center skill-item">
            <div class="flex-shrink-0">
              <img src={htmlcssImage} alt="..." className="skill-img_union" />
            </div>
            <div class="flex-grow-1 ms-3 word-break">
              <span className='fw-bold'>HTML5/CSS3</span><br />
              Bootstrap5を使用したレスポンシブページが作成可能
            </div>
          </div>

          <div class="d-flex align-items-center skill-item">
            <div class="flex-shrink-0">
              <img src={JavascriptReactImage} alt="..." className="skill-img_union" />
            </div>
            <div class="flex-grow-1 ms-3 word-break">
              <span className='fw-bold'>Javascript/React</span><br />
              React-Bootstrapライブラリや、jQurryのプラグインが導入可能
            </div>
          </div>

          <div class="d-flex align-items-center skill-item">
            <div class="flex-shrink-0">
              <img src={RubyRailsImage} alt="..." className="skill-img_union" />
            </div>
            <div class="flex-grow-1 ms-3 word-break">
              <span className='fw-bold'>Ruby/Ruby on Rails</span><br />
              簡単なWebアプリケーションの作成可能
            </div>
          </div>

        </div>
        {/* </div> */}

        {/* 　　　　　　　その他ボックス　　　　　　　 */}
        {/* <div class="d-flex flex-row justify-content-evenly"> */}

        <div className="skillbox col-xs-6 col-md-3">
          <span className='skill_name-top d-flex flex-column align-items-center'>
            <h3 className='skill-name'>-Other-</h3>
            <img src={OtherImage} className="skill-thema" />
          </span>

          <div class="d-flex align-items-center skill-item">
            <div class="flex-shrink-0">
              <img src={gitGithubImage} alt="..." className="skill-img_union" />
            </div>
            <div class="flex-grow-1 ms-3 word-break">
              <span className='fw-bold'>Git/Github</span><br />
              実務では、Windows用GUIクライアントツール「TortoiseGit」でバージョン管理を行なっていました
            </div>
          </div>

          <div class="d-flex align-items-center skill-item">
            <div class="flex-shrink-0">
              <img src={dockerImage} alt="..." className="skill-img_union" />
            </div>
            <div class="flex-grow-1 ms-3 word-break">
              <span className='fw-bold'>Docker</span><br />
              個人学習でRailsのWebアプリケーション作成時に環境構築をしました。
            </div>
          </div>

          <div class="d-flex align-items-center skill-item">
            <div class="flex-shrink-0">
              <img src={awsImage} alt="..." className="skill-img_union" />
            </div>
            <div class="flex-grow-1 ms-3 word-break">
              <span className='fw-bold'>AWS</span><br />
              個人学習でのRalisWebアプリケーション作成時に、Amazon EC2で環境構築をしました。
            </div>
          </div>

          <div class="d-flex align-items-center skill-item">
            <div class="flex-shrink-0">
              <img src={herokuImage} alt="..." className="skill-img_union" />
            </div>
            <div class="flex-grow-1 ms-3 word-break">
              <span className='fw-bold'>Heroku</span><br />
              個人学習でWebアプリケーションを作成した際のデプロイで使用しました。
            </div>
          </div>

        </div>

        {/* </div> */}

      </section>

    </div>
  )
}

export default HomePage
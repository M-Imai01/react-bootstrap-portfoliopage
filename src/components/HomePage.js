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

    <div>
      <div className="container text-center">
        <p>Imai Mitsuaki</p>
        <h1 className='myname'>今井 光明</h1>

        <img src={profileImage} className="profileImage" />

        <p>出身地:福島県郡山市</p>
        <p>生年月日:1994年6月生まれ</p>
        <p>趣味:散歩・睡眠・映画鑑賞・音楽鑑賞など</p>
        <p>職歴:家電量販店の販売員、手芸キットメーカーのWeb更新担当を経験後、Webデザインの職業訓練を受講。現在はHTMLコーダー職に従事しています。</p>
        <p>AWS Cloud Practitionerの資格取得を目指し学習中です。</p>

      </div>

      <h1 class="title">スキル</h1>
      <section className="d-flex flex-row justify-content-evenly" id="skill">

        <div class="d-flex flex-row justify-content-evenly">

          {/* 　　　　　デザインボックス 　　　　　　*/}
          <div className="skillbox col">

            <span className='skill_name-top d-flex flex-column'>
              <h3 className='skill-name'>-Design-</h3>
              <img src={DesignImage} className="skill-thema" />
            </span>

            <div class="d-flex align-items-center skill-item">
              <div class="flex-shrink-0">
                <img src={photoshopImage} alt="..." className="skill-img" />
              </div>
              <div class="flex-grow-1 ms-3">
                <span className='fw-bold'>Photoshop</span><br />
                写真のトリミング、色彩調整など基本操作可能
              </div>
            </div>

            <div class="d-flex align-items-center skill-item">
              <div class="flex-shrink-0">
                <img src={illustratorImage} alt="..." className="skill-img" />
              </div>
              <div class="flex-grow-1 ms-3">
                <span className='fw-bold'>illustrator</span><br />
                ペンツール・ベジェ曲線の作成や、基本操作可能
              </div>
            </div>

            <div class="d-flex align-items-center skill-item">
              <div class="flex-shrink-0">
                <img src={xdImage} alt="..." className="skill-img" />
              </div>
              <div class="flex-grow-1 ms-3">
                <span className='fw-bold'>XD</span><br />
                サイトのトップページデザインカンプ作成可能
              </div>
            </div>

            <div class="d-flex align-items-center skill-item">
              <div class="flex-shrink-0">
                <img src={PremiereProImage} alt="..." className="skill-img" />
              </div>
              <div class="flex-grow-1 ms-3">
                <span className='fw-bold'>Premiere Pro</span><br />
                動画の切り貼り、テロップの挿入など5~7分ほどの動画編集可能
              </div>
            </div>

            <Container className="skill-item">
              <Row className='d-flex align-items-center'>
                <Col className='img-wrap'><img src={photoshopImage} className="skill-img" /></Col>
                <Col className="d-flex flex-column text-wrap">
                  <h5 className='skill-name'>Photoshop</h5>
                  <p>写真のトリミング、色彩調整など基本操作可能</p>
                </Col>
              </Row>
            </Container>

            <Container className="skill-item">
              <Row className='d-flex justify-content-evenly align-items-center'>
                <Col><img src={illustratorImage} className="skill-img" /></Col>
                <Col className="d-flex flex-column text-wrap">
                  <h5 className='skill-name'>illustrator</h5>
                  <p>ペンツール・ベジェ曲線の作成や、基本操作可能</p>
                </Col>
              </Row>
            </Container>

            <Container className="skill-item">
              <Row className='d-flex justify-content-evenly align-items-center'>
                <Col><img src={xdImage} className="skill-img" /></Col>
                <Col className="d-flex flex-column text-wrap">
                  <h5 className='skill-name'>XD</h5>
                  <p>サイトのトップページデザインカンプ作成可能</p>
                </Col>
              </Row>
            </Container>

            <Container className="skill-item">
              <Row className='d-flex justify-content-evenly align-items-center'>
                <Col><img src={PremiereProImage} className="skill-img" /></Col>
                <Col className="d-flex flex-column text-wrap">
                  <h5 className='skill-name'>Premiere Pro</h5>
                  <p>動画の切り貼り、テロップの挿入など5~7分ほどの動画編集可能</p>
                </Col>
              </Row>
            </Container>

          </div>
        </div>

        {/* 　　　　　　　　　コーディングボックス　　　　　　　 */}
        <div class="d-flex flex-row justify-content-evenly">
          <div className="skillbox col">
            <h3>-Coding-</h3>
            <img src={CodingImage} className="skill-thema" />

            <div class="d-flex align-items-center skill-item">
              <div class="flex-shrink-0">
                <img src={htmlcssImage} alt="..." className="skill-img_union" />
              </div>
              <div class="flex-grow-1 ms-3">
                <span className='fw-bold'>HTML5/CSS3</span><br />
                Bootstrap5を使用したレスポンシブページが作成可能
              </div>
            </div>

            <div class="d-flex align-items-center skill-item">
              <div class="flex-shrink-0">
                <img src={JavascriptReactImage} alt="..." className="skill-img_union" />
              </div>
              <div class="flex-grow-1 ms-3">
                <span className='fw-bold'>Javascript/React</span><br />
                React-Bootstrapライブラリや、jQurryのプラグインが導入可能
              </div>
            </div>

            <div class="d-flex align-items-center skill-item">
              <div class="flex-shrink-0">
                <img src={RubyRailsImage} alt="..." className="skill-img_union" />
              </div>
              <div class="flex-grow-1 ms-3">
                <span className='fw-bold'>Ruby/Ruby on Rails</span><br />
                簡単なWebアプリケーションの作成可能
              </div>
            </div>

            <Container className="skill-item">
              <Row className='d-flex justify-content-evenly align-items-center'>
                <Col><img src={htmlcssImage} className="skill-img_union" /></Col>
                <Col className="d-flex flex-column text-wrap">
                  <h5 className='skill-name'>HTML5/CSS3</h5>
                  <p>Bootstrap5を使用したレスポンシブページが作成可能</p>
                </Col>
              </Row>
            </Container>

            <Container className="skill-item">
              <Row className='d-flex justify-content-evenry align-items-center'>
                <Col><img src={JavascriptReactImage} className="skill-img_union" /></Col>
                <Col className="d-flex flex-column text-wrap">
                  <h5 className='skill-name'>Javascript/React</h5>
                  <p>React-Bootstrapライブラリや、jQurryのプラグインが導入可能</p>
                </Col>
              </Row>
            </Container>

            <Container className="skill-item">
              <Row className='d-flex justify-content-evenry align-items-center'>
                <Col><img src={RubyRailsImage} className="skill-img_union" /></Col>
                <Col className="d-flex flex-column text-wrap">
                  <h5 className='skill-name'>Ruby/Ruby on Rails</h5>
                  <p>簡単なWebアプリケーションの作成可能</p>
                </Col>
              </Row>
            </Container>

          </div>
        </div>



        {/* 　　　　　　　その他ボックス　　　　　　　 */}
        <div class="d-flex flex-row justify-content-evenly">

          <div className="skillbox col">
            <h3>-Other-</h3>
            <span className="skill_thema-box">
              <img src={OtherImage} className="skill-thema" />
            </span>

            <div class="d-flex align-items-center skill-item">
              <div class="flex-shrink-0">
                <img src={gitGithubImage} alt="..." className="skill-img_union" />
              </div>
              <div class="flex-grow-1 ms-3">
                <span className='fw-bold'>Git/Github</span><br />
                実務では、Windows用GUIクライアントツール「TortoiseGit」でバージョン管理を行なっていました
              </div>
            </div>

            <div class="d-flex align-items-center skill-item">
              <div class="flex-shrink-0">
                <img src={dockerImage} alt="..." className="skill-img_union" />
              </div>
              <div class="flex-grow-1 ms-3">
                <span className='fw-bold'>Docker</span><br />
                個人学習でRailsのWebアプリケーション作成時に環境構築をしました。
              </div>
            </div>

            <div class="d-flex align-items-center skill-item">
              <div class="flex-shrink-0">
                <img src={awsImage} alt="..." className="skill-img_union" />
              </div>
              <div class="flex-grow-1 ms-3">
                <span className='fw-bold'>AWS</span><br />
                個人学習でのRalisWebアプリケーション作成時に、Amazon EC2で環境構築をしました。
              </div>
            </div>

            <div class="d-flex align-items-center skill-item">
              <div class="flex-shrink-0">
                <img src={herokuImage} alt="..." className="skill-img_union" />
              </div>
              <div class="flex-grow-1 ms-3">
                <span className='fw-bold'>Heroku</span><br />
                個人学習でWebアプリケーションを作成した際のデプロイで使用しました。
              </div>
            </div>

            <Container className="skill-item">
              <Row className='d-flex justify-content-evenry align-items-center'>
                <Col><img src={gitGithubImage} className="skill-img_union" /></Col>
                <Col className="d-flex flex-column text-wrap">
                  <h5 className='skill-name'>Git/Github</h5>
                  <p>実務では、Windows用GUIクライアントツール「TortoiseGit」でバージョン管理を行なっていました</p>
                </Col>
              </Row>
            </Container>

            <Container className="skill-item">
              <Row className='d-flex justify-content-evenry align-items-center'>
                <Col><img src={dockerImage} className="skill-img_union" /></Col>
                <Col className="d-flex flex-column text-wrap">
                  <h5 className='skill-name'>Docker</h5>
                  <p>個人学習でRailsのWebアプリケーション作成時に環境構築をしました。</p>
                </Col>
              </Row>
            </Container>

            <Container className="skill-item">
              <Row className='d-flex justify-content-evenry align-items-center'>
                <Col><img src={awsImage} className="skill-img_union" /></Col>
                <Col className="d-flex flex-column text-wrap">
                  <h5 className='skill-name'>AWS</h5>
                  <p>個人学習でのRalisWebアプリケーション作成時に、Amazon EC2で環境構築をしました。</p>
                </Col>
              </Row>
            </Container>


            <Container className="skill-item">
              <Row className='d-flex justify-content-evenry align-items-center'>
                <Col><img src={herokuImage} className="skill-img_union" /></Col>
                <Col className="d-flex flex-column text-wrap">
                  <h5 className='skill-name'>Heroku</h5>
                  <p>個人学習でWebアプリケーションを作成した際のデプロイで使用しました。</p>
                </Col>
              </Row>
            </Container>

          </div>

        </div>
      </section>

    </div>
  )
}

export default HomePage
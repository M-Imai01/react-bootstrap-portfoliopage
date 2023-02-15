import React from 'react'
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tabStyle.css';
import './modal_window.css';

// import { Button } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';

import photo1Image from "../Images/photo1.jpg";
import photo2Image from "../Images/photo2.jpg";
import photo3Image from "../Images/photo3.jpg";
import photo4Image from "../Images/photo4.jpg";
import GithubOctocatImage from "../Images/GithubOctocat.svg";


import Design01Image from "../Images/Design01.png";
import Design02Image from "../Images/Design02.png";
import Design03Image from "../Images/Design03.png";
import Design04Image from "../Images/Design04.png";
import Design05Image from "../Images/Design05.png";
import Design06Image from "../Images/Design06.png";
import Design07Image from "../Images/Design07.png";

import Develop01Image from "../Images/Develop01.png";
import Develop001Image from "../Images/Develop001.png";
import Develop02Image from "../Images/Develop02.png";
import Develop002Image from "../Images/Develop002.png";






const BsTabs = () => {
  return (
    <Container className="py-4 container-fluid">
      <Tabs justify variant="pills" defaultActiveKey="tab-1" >
        <Tab eventKey="tab-1" title="Design">
          <Row>
            <Col sm><a href="#modal-01"><img src={Design01Image} className="img-fluid img-thumbnail" alt="" /></a></Col>
            <div class="modal-wrapper" id="modal-01">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>病院のチラシ制作</h4>
                  <img src={Design01Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約1時間<br />
                    知人の診療所で「コロナ禍で事前連絡もなしにいきなり来院される方がいて困っているので、ポスターを作ってほしい」との依頼を受け作成しました。<br />
                    【コンセプト・ポイント】<br />
                    ・ポスターのラフをいただき、簡単でいいからとにかく急ぎでとの要望を受け制作しました。<br />
                    ・とにかく患者さんに伝わりやすいように最低限の情報がわかるようシンプルにしました。<br />
                  </p>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

            <Col sm><a href="#modal-02"><img src={Design02Image} className="img-fluid img-thumbnail" alt="" /></a></Col>
            <div class="modal-wrapper" id="modal-02">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>薬局のチラシ制作①</h4>
                  <img src={Design02Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約3時間<br />
                    ・イベントの告知をするためにお客様に配布するチラシの制作<br />
                    【コンセプト・ポイント】<br />
                    実施内容に合ったイラストや地図、店舗写真も掲載してほしいとの要望に合わせ制作しました。<br />
                    ・地図は illustrator のパスで作成しました。<br />
                    ・相手側の意向により、後半のボックス内はかなり長文が入り込みましたが、可能な限り可読性を確保するようにしました。
                  </p>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

            <Col sm><a href="#modal-03"><img src={Design03Image} className="img-fluid img-thumbnail" alt="" /></a></Col>
            <div class="modal-wrapper" id="modal-03">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>薬局のチラシ制作②</h4>
                  <img src={Design03Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約2.5時間<br />
                    ・薬局チラシ制作①の1年後に同様のイベントを開催することになった際のチラシ作成です。<br />
                    【コンセプト・ポイント】<br />
                    ・チラシの色味を1年前のものから変更し、前年度のものより落ち着いた印象にしました。<br />
                    ・地図の下のテキストに枠はいらないとのことだったので、文字自体に枠をつけて可能な限り可読性を持たせるようにしました。
                  </p>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

          </Row>

          {/* ２列目 */}
          <Row>
            <Col sm><a href="#modal-04"><img src={Design04Image} className="img-fluid img-thumbnail" alt="" /></a></Col>

            <div class="modal-wrapper" id="modal-04">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>ロゴの制作①</h4>
                  <img src={Design04Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約1.5時間<br />
                    職業訓練校で企業のロゴ制作課題があり、父親が勤める会社のロゴを制作してみました。<br />
                    【コンセプト・ポイント】<br />
                    ・グリーン＝緑、熱海＝暖かそうな土地で赤とシンプルにイメージできる配色にしました。<br />
                  </p>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

            <Col sm><a href="#modal-05"><img src={Design05Image} className="img-fluid img-thumbnail" alt="" /></a></Col>

            <div class="modal-wrapper" id="modal-05">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>ロゴの制作②</h4>
                  <img src={Design05Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約2.5時間<br />
                    作成したロゴを使用し、会社の名刺・パンフレットのデザインを作りました。<br />
                    【コンセプト・ポイント】<br />
                    ・名刺・ロゴ共に、会社向けのオフィシャルな様相になるよう仕上げました。<br />
                  </p>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

            <Col sm><a href="#modal-06"><img src={Design06Image} className="img-fluid img-thumbnail" alt="" /></a></Col>

            <div class="modal-wrapper" id="modal-06">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>ロゴの制作③</h4>
                  <img src={Design06Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約1.5時間<br />
                    会社パンフレットの内容を元に、LPの案を考えました。<br />
                    【コンセプト・ポイント】<br />
                    ・背景は白だと無機質な印象を受けたので、クリーム色して暖かみを出しました。<br />
                    ・ヘッダー直下の空の写真は、会社から実際に見える風景写真を使用しました。<br />
                  </p>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

          </Row>

{/* ３列目 */}
          <Row>
            <Col sm={4}><a href="#modal-07"><img src={Design07Image} className="img-fluid img-thumbnail" alt="" /></a></Col>

            <div class="modal-wrapper" id="modal-07">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>Tシャツ制作課題/タイトル:I♥Design</h4>
                  <img src={Design07Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約3時間<br />
                    職業訓練校でのTシャツのデザイン制作課題にて、Webデザインを学び始めてから感じ始めていた、デザインする事の楽しさを表現しようと思いました。<br />
                    【コンセプト・ポイント】<br />
                    ・左右ともに共通して、カラフルな色合いにして楽しい雰囲気を出そうと思いました。<br />
                    ・左のものでは色合いはレトロな色合いにし、誌面などの非デジタルイラスト感を表現しました。<br />
                    ・右のものではドットが欠ける効果をつけて、デジタルデータ感=Webでのデザイン感を出しました。<br />
                  </p>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

          </Row>

        </Tab>

{/* タブ２ */}
        <Tab eventKey="tab-2" title="Dev">
          <Row>
            <Col sm><a href="#modal-08"><img src={Develop01Image} className="img-fluid img-thumbnail" alt="" /></a></Col>

            <div class="modal-wrapper" id="modal-08">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>職業訓練校/サイト制作</h4>
                  <img src={Develop001Image} className="img-fluid" alt="" />
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut cursus felis. Etiam hendrerit turpis at massa auctor semper.
                  </p>
                  <span>
                    <a class="btn btn-light fw-bold" href="https://github.com/M-Imai01/okui_samplePage" role="button" target="_blank" rel="noopener noreferrer">
                      <img src={GithubOctocatImage} className="img-fluid works-img" alt="" />Go to Github
                    </a>
                    <a class="btn btn-info fw-bold" href="https://okui-app.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">
                      Go to Website
                    </a>
                  </span>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

            <Col sm><a href="#modal-09"><img src={Develop02Image} className="img-fluid img-thumbnail" alt="" /></a></Col>
            <div class="modal-wrapper" id="modal-09">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>Python/flaskを使用したWebアプリ</h4>
                  <img src={Develop002Image} className="img-fluid" alt="" />
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut cursus felis. Etiam hendrerit turpis at massa auctor semper.
                  </p>
                  <span>
                    <a class="btn btn-light fw-bold" href="https://github.com/M-Imai01/Flask_App" role="button" target="_blank" rel="noopener noreferrer">
                      <img src={GithubOctocatImage} className="img-fluid works-img" alt="" />Go to Github
                    </a>
                  </span>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>


            <Col sm><a href="#modal-10"><img src={photo3Image} className="img-fluid" alt="" /></a></Col>

            <div class="modal-wrapper" id="modal-10">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>このポートフォリオページ</h4>
                  <img src={Develop002Image} className="img-fluid" alt="" />
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut cursus felis. Etiam hendrerit turpis at massa auctor semper.
                  </p>
                  <span>
                    <a class="btn btn-light fw-bold" href="https://github.com/M-Imai01/Flask_App" role="button" target="_blank" rel="noopener noreferrer">
                      <img src={GithubOctocatImage} className="img-fluid works-img" alt="" />Go to Github
                    </a>
                  </span>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

          </Row>

        </Tab>

        {/* tab3 */}
        <Tab eventKey="tab-3" title="other">
          <Row>

            <Col sm><a href="#modal-11"><img src={photo4Image} className="img-fluid" alt="" /></a></Col>

            <div class="modal-wrapper" id="modal-11">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>このポートフォリオページ</h4>
                  <img src={Develop002Image} className="img-fluid" alt="" />
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut cursus felis. Etiam hendrerit turpis at massa auctor semper.
                  </p>
                  <span>
                    <a class="btn btn-light fw-bold" href="https://github.com/M-Imai01/Flask_App" role="button" target="_blank" rel="noopener noreferrer">
                      <img src={GithubOctocatImage} className="img-fluid works-img" alt="" />Go to Github
                    </a>
                  </span>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>


            <Col sm><a href="#modal-12"><img src={photo4Image} className="img-fluid" alt="" /></a></Col>

            <div class="modal-wrapper" id="modal-12">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>このポートフォリオページ</h4>
                  <img src={Develop002Image} className="img-fluid" alt="" />
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut cursus felis. Etiam hendrerit turpis at massa auctor semper.
                  </p>
                  <span>
                    <a class="btn btn-light fw-bold" href="https://github.com/M-Imai01/Flask_App" role="button" target="_blank" rel="noopener noreferrer">
                      <img src={GithubOctocatImage} className="img-fluid works-img" alt="" />Go to Github
                    </a>
                  </span>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

          </Row>

        </Tab>
      </Tabs>
    </Container>
  );
};

export default BsTabs
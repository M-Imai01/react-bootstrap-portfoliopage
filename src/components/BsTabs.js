import React from 'react'
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
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
import Develop99Image from "../Images/Develop99.png";
import Develop999Image from "../Images/Develop999.png";

import Other01Image from "../Images/Other01.png";
import Other001Image from "../Images/Other001.png";
import Other02Image from "../Images/Other02.png";
import Other002Image from "../Images/Other002.png";



const BsTabs = () => {
  return (
    <Container className="py-4 container-fluid">
      <Tabs justify variant="pills" defaultActiveKey="tab-1" >
        <Tab eventKey="tab-1" title="Design">
          <Row>
            <Col sm>
              <Figure>
                <a href="#modal-01"><Figure.Image src={Design01Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>病院のチラシ制作</Figure.Caption>
              </Figure>
            </Col>
            <div class="modal-wrapper" id="modal-01">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>病院のチラシ制作</h4>
                  <img src={Design01Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約1時間<br />
                    ・知人の診療所で「コロナ禍で事前連絡もなしにいきなり来院される方がいて困っているので、ポスターを作ってほしい」との依頼を受け作成しました。<br />
                    【コンセプト・ポイント】<br />
                    ・ポスターのラフをいただき、簡単でいいからとにかく急ぎでとの要望を受け制作しました。<br />
                    ・とにかく患者さんに伝わりやすいように最低限の情報がわかるようシンプルにしました。<br />
                  </p>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

            <Col sm>
              <Figure>
                <a href="#modal-02"><Figure.Image src={Design02Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>薬局のチラシ制作①</Figure.Caption>
              </Figure>
            </Col>
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
                    ・相手側の意向により、地図の下のボックスにはかなり長文が入り込みましたが、可能な限り可読性を確保するようにしました。
                  </p>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

            <Col sm>
              <Figure>
                <a href="#modal-03"><Figure.Image src={Design03Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>薬局のチラシ制作②</Figure.Caption>
              </Figure>
            </Col>
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
            <Col sm>
              <Figure>
                <a href="#modal-04"><Figure.Image src={Design04Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>ロゴの制作①</Figure.Caption>
              </Figure>
            </Col>
            <div class="modal-wrapper" id="modal-04">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>ロゴの制作①</h4>
                  <img src={Design04Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約1.5時間<br />
                    ・職業訓練校で企業のロゴ制作課題があり、父親が勤める実在する会社のロゴを制作してみました。<br />
                    【コンセプト・ポイント】<br />
                    ・グリーン＝緑、熱海＝暖かそうな土地で赤とシンプルにイメージできる配色にしました。<br />
                  </p>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

            <Col sm>
              <Figure>
                <a href="#modal-05"><Figure.Image src={Design05Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>ロゴの制作②</Figure.Caption>
              </Figure>
            </Col>
            <div class="modal-wrapper" id="modal-05">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>ロゴの制作②</h4>
                  <img src={Design05Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約2.5時間<br />
                    ・ロゴ制作①で作成したロゴを使用し、会社の名刺・パンフレットのデザインを作りました。<br />
                    【コンセプト・ポイント】<br />
                    ・名刺・ロゴ共に、会社向けのオフィシャルな様相になるよう仕上げました。<br />
                  </p>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

            <Col sm>
              <Figure>
                <a href="#modal-06"><Figure.Image src={Design06Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>ロゴの制作③</Figure.Caption>
              </Figure>
            </Col>
            <div class="modal-wrapper" id="modal-06">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>ロゴの制作③</h4>
                  <img src={Design06Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約1.5時間<br />
                    ・会社パンフレットの内容を元に、LPの案を考えました。<br />
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
            <Col sm={4} className="col_3">
              <Figure>
                <a href="#modal-07"><Figure.Image src={Design07Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>Tシャツ制作課題/タイトル:I♥Design</Figure.Caption>
              </Figure>
            </Col>
            <div class="modal-wrapper" id="modal-07">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>Tシャツ制作課題/タイトル:I♥Design</h4>
                  <img src={Design07Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約3時間<br />
                    ・職業訓練校時代にTシャツのデザイン制作課題があり、Webデザインを学び始めてから感じ始めていた、デザインする事の楽しさを表現しようと思い制作しました。<br />
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
            <Col sm>
              <Figure>
                <a href="#modal-08"><Figure.Image src={Develop01Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>職業訓練校/サイト制作</Figure.Caption>
              </Figure>
            </Col>
            <div class="modal-wrapper" id="modal-08">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>職業訓練校/サイト制作</h4>
                  <img src={Develop001Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約21時間<br />
                    ・職業訓練校の卒業課題で３人１組になり、３日間の間に架空の企業のWebサイトを作るという制作を行いました。<br />
                    ・１人はデザイン、もう１人はディレクターを担当し、私はコーディングを担当しました。<br />
                    【コンセプト・ポイント】<br />
                    ・各画像の配置や、右上の矢印画像を押すとメニューが開く機能の実装に苦労した記憶があります。<br />
                    ・拙い作りでレスポンシブ化も実装できていませんが、思い出が多く残っているページなので、Herokuでデプロイし制作物の１つとして掲載しております。<br />
                  </p>
                  <span className='d-flex justify-content-around'>
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

            <Col sm>
              <Figure>
                <a href="#modal-09"><Figure.Image src={Develop02Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>Python/flaskを使用したWebアプリ</Figure.Caption>
              </Figure>
            </Col>
            <div class="modal-wrapper" id="modal-09">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>Python/flaskを使用したWebアプリ</h4>
                  <img src={Develop002Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約1.5時間<br />
                    ・Pythonのマイクロフレームワークである「Flask」を使用して、簡単なWebアプリケーションを作成し、動作を確認しました。<br />
                    【コンセプト・ポイント】<br />
                    ・作成した所感としては、Flaskではローカルサーバーの起動やデータベースの作成が比較的簡単に実装でき、初学者がアプリケーション開発の実感を掴むのに有用であると感じました。<br />
                    ・現状では、データベースにデータを登録する機能のみを作成したため、今後このアプリを修正する場合は、登録したデータの削除や編集機能を実装する必要があると考えております。<br />
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

            <Col sm>
              <Figure>
                <a href="#modal-10"><Figure.Image src={Develop99Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>このポートフォリオページ</Figure.Caption>
              </Figure>
            </Col>
            <div class="modal-wrapper" id="modal-10">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>このポートフォリオページ</h4>
                  <img src={Develop999Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約20時間<br />
                    ・今ご覧いただいているこのポートフォリオページは、React上でBootstrapを扱えるライブラリ「React-Bootstrap」を使用し作成しています。<br />
                    ・モダンな技術のReactを使って何か作成してみたいなと考えていた時に、自分のポートフォリオページを作るのに試してみようかと思い立ち、制作に至りました。<br />
                    【コンセプト・ポイント】<br />
                    ・制作物をカテゴリーごとにタブで切り替えて表示させつつ、Modalウィンドウを同時に実装する点が非常に難航しました。最終的にはModalコンポーネントの使用は断念し、CSSのみでModalを実装しました。<br />
                    ・全体的なレスポンシブ化は概ね上手くいったかと思いますが、制作物の画像が重く、表示に難点があることが今後の課題となります。<br />
                  </p>
                  <span>
                    <a class="btn btn-light fw-bold" href="https://github.com/M-Imai01/react-bootstrap-portfoliopage" role="button" target="_blank" rel="noopener noreferrer">
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
            <Col sm>
              <Figure>
                <a href="#modal-11"><img src={Other01Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>前職での動画制作①</Figure.Caption>
              </Figure>
            </Col>
            <div class="modal-wrapper" id="modal-11">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>前職での動画制作①</h4>
                  <img src={Other001Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約12時間<br />
                    以前勤務していた手芸キットメーカー会社で、自社商品の作り方動画を作成することになり、動画の企画・撮影・編集を行いました。<br />
                    【コンセプト・ポイント】<br />
                    ・絵コンテ作成、スマホを使った撮影、Adobe Premiere Proを使った編集など実務では初めての経験づくしでしたが、概ね満足のいく出来となりました。<br />
                    ・課題点としては、撮影時のライティングが不足しており、全体的に画面が暗いという問題が残りました。<br />
                  </p>
                  <span>
                    <a class="btn btn-danger fw-bold" href="https://youtu.be/C70Ao0_EBgw" role="button" target="_blank" rel="noopener noreferrer">
                      Go to YouTube
                    </a>
                  </span>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

            <Col sm>
              <Figure>
                <a href="#modal-12"><img src={Other02Image} className="img-fluid img-thumbnail" alt="" /></a>
                <Figure.Caption>前職での動画制作②</Figure.Caption>
              </Figure>
            </Col>
            <div class="modal-wrapper" id="modal-12">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>前職での動画制作②</h4>
                  <img src={Other002Image} className="img-fluid" alt="" />
                  <p className="description">
                    【概要】<br />
                    制作時間:約11時間<br />
                    こちらは2本目に作成した動画です。<br />
                    【コンセプト・ポイント】<br />
                    ・1本目の動画の反省を活かし、ライティングを改善したため明るさは満足のいくものとなりました。<br />
                  </p>
                  <span>
                    <a class="btn btn-danger fw-bold" href="https://youtu.be/cabLTpnWU-E" role="button" target="_blank" rel="noopener noreferrer">
                      Go to YouTube
                    </a>
                  </span>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

          </Row>

        </Tab>
      </Tabs>
    </Container >
  );
};

export default BsTabs
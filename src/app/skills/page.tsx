import { PageTopButton } from '../components/elements/PageTopButton'

const Skills = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl">Skills</h1>
        <div className="career">
          <h3 className="text-2xl mt-4">経験言語・フレームワーク等</h3>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2">技術</th>
                <th className="border border-black px-4 py-2">使用年数</th>
                <th className="border border-black px-4 py-2">習熟度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-4 py-2">
                  <i className="devicon-java-plain colored"></i>
                  Java
                </td>
                <td className="border border-black px-4 py-2">2年</td>
                <td className="border border-black px-4 py-2">
                  ・PaizaランクB問題が解ける
                </td>
              </tr>
              <td className="border border-black px-4 py-2">
                <i className="devicon-html5-plain colored"></i>HTML・
                <i className="devicon-css3-plain colored"></i>
                CSS
              </td>

              <td className="border border-black px-4 py-2">2年</td>
              <td className="border border-black px-4 py-2">
                ・基本的なCSSアニメーションを含んだ静的ページが作成できる
              </td>
              <tr>
                <td className="border border-black px-4 py-2">
                  <i className="devicon-javascript-plain colored"></i>
                  Javascript
                </td>
                <td className="border border-black px-4 py-2">2年</td>
                <td className="border border-black px-4 py-2">
                  ・基本的なDOM操作ができる
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">
                  <i className="devicon-typescript-plain colored"></i>
                  Typescript
                </td>
                <td className="border border-black px-4 py-2">1年</td>
                <td className="border border-black px-4 py-2">
                  ・基本的な型定義ができる
                  <br />
                  ・OOPのクラス設計に基づき、ブラウザゲームアプリを作成できる
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">
                  <i className="devicon-react-original colored"></i>
                  React
                </td>
                <td className="border border-black px-4 py-2">1年</td>
                <td className="border border-black px-4 py-2">
                  ・単一責任の法則に基づいたコンポーネント設計ができる
                  <br />
                  ・React Hooksを用いた状態管理ができる
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">
                  <i className="devicon-nextjs-original colored"></i>
                  Next.js
                </td>
                <td className="border border-black px-4 py-2">半年</td>
                <td className="border border-black px-4 py-2">
                  ・App Routerのルーティング方法が若干わかる
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">
                  <i className="devicon-mysql-plain colored"></i>
                  MySQL
                </td>
                <td className="border border-black px-4 py-2">半年</td>
                <td className="border border-black px-4 py-2">
                  ・基本的な文法がわかる
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">
                  <i className="devicon-git-plain colored"></i>
                  Git
                </td>
                <td className="border border-black px-4 py-2">2年</td>
                <td className="border border-black px-4 py-2">
                  ・ブランチの状態を意識し、コンフリクトを警戒しながらチーム開発ができる
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">
                  <i className="devicon-nginx-original colored"></i>
                  Nginx
                </td>
                <td className="border border-black px-4 py-2">半年未満</td>
                <td className="border border-black px-4 py-2">
                  ・Next.jsのアプリをEC2インスタンスからビルドして公開できる
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="career-details">
          <div>
            <h3 className="text-2xl mt-4">学習経歴</h3>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2">期間</th>
                  <th className="border border-black px-4 py-2">詳細</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black px-4 py-2">2021-2022.6</td>
                  <td className="border border-black px-4 py-2">
                    【概要】
                    <p>
                      趣味として不定期でHTML・CSSでページをつくったり、Javaでpaizaの問題を解いたりしていました。
                    </p>
                    <br />
                    【できるようになったこと】
                    <p>
                      1.HTML・CSSで基本的な静的ページを作成できるようになった
                      <br />
                      2.基本的なJavaの構文を理解し、paizaのBランク問題を解けた
                      <br />
                      3.GitHubの使い方を理解し、リポジトリにコードをpushできるようになった
                      <br />
                      4.基本的なLinuxコマンドをチートシートなしで使えるようになった
                      <br />
                    </p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="border border-black px-4 py-2">2022.6-現在</td>
                  <td className="border border-black px-4 py-2">
                    【概要】
                    <p>
                      自分のコードの書き方が適切なのか不安になり、体系的にアルゴリズムとデータ構造の基礎について学ぶためにRecursionという学習サイトで学習を開始しました。Web開発の独学もこのあたりから同時に始めました。
                      <br />
                      <br />
                      サイトのプロフィールページは
                      <a href="https://recursionist.io/users/kano">こちら</a>
                    </p>
                    <br />
                    【学習した・していること】
                    <p>
                      1.アルゴリズムとデータ構造の基礎（再帰、DP、二分木、スタック、キュー、ハッシュテーブル、ソートなど）
                      <br />
                      2.↑の知識に関連したコーディング問題（提出問題数：335問）
                      <br />
                      3.OOPに基づいたTypescriptチーム開発（
                      <a href="">トランプゲーム</a>）
                      <br />
                      4.React、Next.jsの基本的な使い方(
                      <a href="">当ポートフォリオサイト</a>)
                      <br />
                      5.Nginx、EC2を用いてのアプリデプロイ（
                      <a href="">当ポートフォリオサイト</a>）
                      <br />
                      6.データベースの基礎（MySQL）
                      <br />
                      7.TCP・UDP通信の基礎（<a href="">チャットアプリ</a>）
                    </p>
                    <br />
                    【できるようになったこと】
                    <p>
                      1.
                      OOPを意識したクラス設計と、その設計に基づいて拡張させやすいコードを書けるようになった
                      <br />
                      2.
                      Discordで質問ができ他のユーザーの質問も見れるため、テキストベースでの的確な質問の仕方が身についた
                      <br />
                      3. エラー文を読み解く力がついた
                      <br />
                      4.
                      チーム開発を通して、コンフリクトの解消やそれを防ぐためのGitの使い方が身についた
                    </p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="border border-black px-4 py-2">
                    2022.10-現在
                  </td>
                  <td className="border border-black px-4 py-2">
                    【概要】
                    <p>
                      Uopeopleという、アメリカに本拠地がある社会人向けオンライン大学でコンピューターサイエンスを専攻しています。
                      <br />
                      受講タイミングはフレキシブルなので、時間に余裕のある学期に１～２科目のペースで履修しています。
                    </p>
                    <br />
                    【学習した・していること】
                    <p>
                      Programming 1, 2
                      <br />
                      1. アルゴリズム・データ構造(Java) <br />
                      2. Java GUIを用いたGUIアプリ開発 <br />
                      3. ソケットで簡単なTCP・UDP通信(Java) <br />
                      <br />
                      今のところ基礎科目なので、ほとんど独学や学習サイトで学んだことの復習になります。
                    </p>
                    <br />
                    【できるようになったこと】
                    <p>
                      1.
                      毎週プログラミング課題と英文レポートを提出するので、Javaのコーディングと英文でのアウトプットに慣れた
                      <br />
                      2.
                      テキストのみではあるが、他の学生とのディスカッション課題とプログラミング課題のレビューを通して、プログラミング関連のトピックについて英文でのコミュニケーションができるようになった
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <PageTopButton />
    </div>
  )
}

export default Skills

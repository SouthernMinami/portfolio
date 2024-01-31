const Resume = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl">My Resume</h1>
        <p className="pt-4">
          *個人情報のため、会社名はイニシャルのみ記載させていただいております。ご了承ください。
          <br />
          *実際の社名は応募の際に送付の履歴書にてお伝えいたします。
        </p>

        <div className="flex pt-4">
          <p className="px-2">
            <a
              className="border border-slate-400 rounded text-black bg-blue-300 px-4 py-2 hover:text-white hover:bg-slate-400 transition duration-500 ease-in-out"
              href="/assets/resume_kano.pdf"
              download
            >
              履歴書をダウンロード
            </a>
          </p>
          <p>
            <a
              className="border border-slate-400 rounded bg-lime-300 text-black px-4 py-2 hover:text-white hover:bg-slate-400 hover:text-white transition duration-500 ease-in-out"
              href="/assets/cv_kano.pdf"
              download
            >
              職務経歴書をダウンロード
            </a>
          </p>
        </div>
        <div className="career">
          <h3 className="text-2xl mt-4">経歴</h3>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2">期間</th>
                <th className="border border-black px-4 py-2">所属</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-4 py-2">
                  2017.04-2021.03
                </td>
                <td className="border border-black px-4 py-2">
                  獨協大学　外国語学部　英語学科
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">2021.04-現在</td>
                <td className="border border-black px-4 py-2">
                  TI.Inc（業務委託契約）
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">2022.10-現在</td>
                <td className="border border-black px-4 py-2">
                  TKK株式会社（業務委託契約）
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">2022.10-現在</td>
                <td className="border border-black px-4 py-2">
                  University of the People（通信制大学）Computer Science学科
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="career-details">
          <div>
            <h3 className="text-2xl mt-4">職務経験</h3>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2">期間</th>
                  <th className="border border-black px-4 py-2">詳細</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black px-4 py-2">
                    2022.10-現在
                  </td>
                  <td className="border border-black px-4 py-2">
                    <p>【所属】</p>
                    <p>TI.Inc（業務委託契約）</p>
                    <br />
                    <p>【職務】</p>
                    <p>動画コンテンツモデレーター</p>
                    <br />
                    <p>【業務内容】</p>
                    <p>
                      在宅でYoutubeの動画コンテンツの安全性や情報の正確性を評価する業務を行っています。
                      <br />
                      具体的には、TI.Incから専用サイト経由で動画チェックのタスクが不定期で渡され、不適切な表現が含まれていないかなどの基準にしたがって動画のレートをつけていきます。
                    </p>
                    <br />
                    <p>【業務で得たもの】</p>
                    <p>
                      1.
                      数百ページに及ぶ英語の評価基準ガイドラインを読んだ上で業務にあたるため、Web開発などで公式ドキュメントや英語記事を読み進められる程度には英語の読解に慣れております。
                      <br />
                      2.
                      タスクの種類によっては英語のレポート（５～６センテンス程度）を提出する必要があり、具体的に動画のどの部分が評価項目に該当するのかなど、伝えるべきことを英語テキストに落とし込むことに抵抗がなくなりました。
                      <br />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-2">
                    2022.10-現在
                  </td>
                  <td className="border border-black px-4 py-2">
                    <p>【所属】</p>
                    <p>TKK株式会社（業務委託契約）</p>
                    <br />
                    <p>【職務】</p>
                    <p>
                      高校生向け英語テストの採点スタッフ（春・夏・冬季のテストがあるときのみ）
                    </p>
                    <br />
                    <p>【業務内容】</p>
                    <p>
                      在宅で高校生を対象とした英語テストの採点を行っています。
                      <br />
                      採点用のソフトウェアを使用し、あらゆる学年の穴埋め英作文問題や和訳問題などを採点しています。
                    </p>
                    <br />
                    <p>【業務で得たもの】</p>
                    <p>
                      部分減点の基準を正しく理解し間違いなく採点する必要があるため、指示を正しく理解しようとし、不明点はすぐに共有することに慣れております。
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume

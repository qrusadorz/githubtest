import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainFeaturedPost: {
    // backgroundColor: theme.palette.grey[800],
    // color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

function Terms(props) {
  const { classes } = props;

//   useEffect(() => {
//     if (item) {
//        document.title = `利用規約`;
//        // TODO 今度まとめる
//        for (const node of document.head.childNodes) {
//          if (node.name === "robots" && node.nodeName === "META") {
//            node.content = "noindex";
//            return;
//          }
//        }
//      }
//  });
 
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          <Paper className={classes.mainFeaturedPost}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                利用規約
              </Typography>
              {/* <Typography variant="h5" color="inherit" paragraph> */}
                <div class="wrapKOPIPE">

                  <div class="wrapHINAGATA">
                    {/* <h1>利用規約</h1> */}
                    <p>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>

                    <h2>第1条（適用）</h2>
                    <p>本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>

                    <h2>第2条（利用登録）</h2>
                    <ul>
                      <li>登録希望者が当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。</li>
                      <li>当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
                        <ul>
                          <li>（1）利用登録の申請に際して虚偽の事項を届け出た場合</li>
                          <li>（2）本規約に違反したことがある者からの申請である場合</li>
                          <li>（3）その他，当社が利用登録を相当でないと判断した場合</li>
                        </ul></li>
                    </ul>

                    <h2>第3条（ユーザーIDおよびパスワードの管理）</h2>
                    <ul>
                      <li>ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを管理するものとします。</li>
                      <li>ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与することはできません。当社は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。</li>
                    </ul>

                    <h2>第4条（利用料金および支払方法）</h2>
                    <ul>
                      <li>ユーザーは，本サービス利用の対価として，当社が別途定め，本ウェブサイトに表示する利用料金を，当社が指定する方法により支払うものとします。</li>
                      <li>ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年１４．６％の割合による遅延損害金を支払うものとします。</li>
                    </ul>

                    <h2>第5条（禁止事項）</h2>
                    <p>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
                    <ul class="child">
                      <li>（1）法令または公序良俗に違反する行為</li>
                      <li>（2）犯罪行為に関連する行為</li>
                      <li>（3）当社のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
                      <li>（4）当社のサービスの運営を妨害するおそれのある行為</li>
                      <li>（5）他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                      <li>（6）他のユーザーに成りすます行為</li>
                      <li>（7）当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為</li>
                      <li>（8）その他，当社が不適切と判断する行為</li>
                    </ul>

                    <h2>第6条（本サービスの提供の停止等）</h2>
                    <ul>
                      <li>当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                        <ul>
                          <li>（1）本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                          <li>（2）地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                          <li>（3）コンピュータまたは通信回線等が事故により停止した場合</li>
                          <li>（4）その他，当社が本サービスの提供が困難と判断した場合</li>
                        </ul>
                      </li>
                      <li>当社は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害について，理由を問わず一切の責任を負わないものとします。</li>
                    </ul>

                    <h2>第7条（利用制限および登録抹消）</h2>
                    <ul>
                      <li>当社は，以下の場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。
                        <ul>
                          <li>（1）本規約のいずれかの条項に違反した場合</li>
                          <li>（2）登録事項に虚偽の事実があることが判明した場合</li>
                          <li>（3）その他，当社が本サービスの利用を適当でないと判断した場合</li>
                        </ul>
                      </li>
                      <li>当社は，本条に基づき当社が行った行為によりユーザーに生じた損害について，一切の責任を負いません。</li>
                    </ul>

                    <h2>第8条（免責事項）</h2>
                    <ul>
                      <li>当社の債務不履行責任は，当社の故意または重過失によらない場合には免責されるものとします。</li>
                      <li>当社は，何らかの理由によって責任を負う場合にも，通常生じうる損害の範囲内かつ有料サービスにおいては代金額（継続的サービスの場合には1か月分相当額）の範囲内においてのみ賠償の責任を負うものとします。</li>
                      <li>当社は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。</li>
                    </ul>

                    <h2>第9条（サービス内容の変更等）</h2>
                    <p>当社は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。</p>

                    <h2>第10条（利用規約の変更）</h2>
                    <p>当社は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。</p>

                    <h2>第11条（通知または連絡）</h2>
                    <p>ユーザーと当社との間の通知または連絡は，当社の定める方法によって行うものとします。</p>

                    <h2>第12条（権利義務の譲渡の禁止）</h2>
                    <p>ユーザーは，当社の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。</p>

                    <h2>第13条（準拠法・裁判管轄）</h2>
                    <ul>
                      <li>本規約の解釈にあたっては，日本法を準拠法とします。</li>
                      <li>本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
                    </ul>

                    <p class="tR">以上</p>

                  </div>
                </div>
              {/* </Typography> */}
            </div>
          </Paper>
        </main>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Terms.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Terms);
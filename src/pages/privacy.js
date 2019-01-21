import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
// import Markdown from './Markdown';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

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
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

// const posts = [post1, post2, post3];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

function Privacy(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Toolbar className={classes.toolbarMain}>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Blog
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar>
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Typography color="inherit" noWrap key={section}>
              {section}
            </Typography>
          ))}
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    プライバシーポリシー
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>

                    <div class="wrapHINAGATA">
                      <h1>プライバシーポリシー</h1>
                      <p>＿＿＿＿＿＿＿＿（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）におけるプライバシー情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。</p>

                      <h2>第1条（プライバシー情報）</h2>
                      <ul>
                        <li>プライバシー情報のうち「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報を指します。</li>
                        <li>プライバシー情報のうち「履歴情報および特性情報」とは，上記に定める「個人情報」以外のものをいい，ご利用いただいたサービスやご購入いただいた商品，ご覧になったページや広告の履歴，ユーザーが検索された検索キーワード，ご利用日時，ご利用の方法，ご利用環境，郵便番号や性別，職業，年齢，ユーザーのIPアドレス，クッキー情報，位置情報，端末の個体識別情報などを指します。</li>
                      </ul>

                      <h2>第２条（プライバシー情報の収集方法）</h2>
                      <ul>
                        <li>当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や，決済に関する情報を当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。</li>
                        <li>当社は，ユーザーについて，利用したサービスやソフトウエア，購入した商品，閲覧したページや広告の履歴，検索した検索キーワード，利用日時，利用方法，利用環境（携帯端末を通じてご利用の場合の当該端末の通信状態，利用に際しての各種設定情報なども含みます），IPアドレス，クッキー情報，位置情報，端末の個体識別情報などの履歴情報および特性情報を，ユーザーが当社や提携先のサービスを利用しまたはページを閲覧する際に収集します。</li>
                      </ul>

                      <h2>第３条（個人情報を収集・利用する目的）</h2>
                      <p>当社が個人情報を収集・利用する目的は，以下のとおりです。</p>
                      <ul class="child">
                        <li>（1）ユーザーに自分の登録情報の閲覧や修正，利用状況の閲覧を行っていただくために，氏名，住所，連絡先，支払方法などの登録情報，利用されたサービスや購入された商品，およびそれらの代金などに関する情報を表示する目的</li>
                        <li>（2）ユーザーにお知らせや連絡をするためにメールアドレスを利用する場合やユーザーに商品を送付したり必要に応じて連絡したりするため，氏名や住所などの連絡先情報を利用する目的</li>
                        <li>（3）ユーザーの本人確認を行うために，氏名，生年月日，住所，電話番号，銀行口座番号，クレジットカード番号，運転免許証番号，配達証明付き郵便の到達結果などの情報を利用する目的</li>
                        <li>（4）ユーザーに代金を請求するために，購入された商品名や数量，利用されたサービスの種類や期間，回数，請求金額，氏名，住所，銀行口座番号やクレジットカード番号などの支払に関する情報などを利用する目的</li>
                        <li>（5）ユーザーが簡便にデータを入力できるようにするために，当社に登録されている情報を入力画面に表示させたり，ユーザーのご指示に基づいて他のサービスなど（提携先が提供するものも含みます）に転送したりする目的</li>
                        <li>（6）代金の支払を遅滞したり第三者に損害を発生させたりするなど，本サービスの利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの利用をお断りするために，利用態様，氏名や住所など個人を特定するための情報を利用する目的</li>
                        <li>（7）ユーザーからのお問い合わせに対応するために，お問い合わせ内容や代金の請求に関する情報など当社がユーザーに対してサービスを提供するにあたって必要となる情報や，ユーザーのサービス利用状況，連絡先情報などを利用する目的</li>
                        <li>（8）上記の利用目的に付随する目的</li>
                      </ul>

                      <h2>第４条（個人情報の第三者提供）</h2>
                      <ul>
                        <li>当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
<ul>
                            <li>（1）法令に基づく場合</li>
                            <li>（2）人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき</li>
                            <li>（3）公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき</li>
                            <li>（4）国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                            <li>（5）予め次の事項を告知あるいは公表をしている場合
<ol>
                                <li>利用目的に第三者への提供を含むこと</li>
                                <li>第三者に提供されるデータの項目</li>
                                <li>第三者への提供の手段または方法</li>
                                <li>本人の求めに応じて個人情報の第三者への提供を停止すること</li>
                              </ol></li></ul></li>
                        <li>前項の定めにかかわらず，次に掲げる場合は第三者には該当しないものとします。
<ul>
                            <li>（1）当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                            <li>（2）合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                            <li>（3）個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同して利用される個人情報の項目，共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，あらかじめ本人に通知し，または本人が容易に知り得る状態に置いているとき</li>
                          </ul></li>
                      </ul>

                      <h2>第５条（個人情報の開示）</h2>
                      <ul>
                        <li>当社は，本人から個人情報の開示を求められたときは，本人に対し，遅滞なくこれを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあり，開示しない決定をした場合には，その旨を遅滞なく通知します。なお，個人情報の開示に際しては，１件あたり１，０００円の手数料を申し受けます。
<ul>
                            <li>（1）本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合</li>
                            <li>（2）当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                            <li>（3）その他法令に違反することとなる場合</li>
                          </ul></li>
                        <li>前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。</li>
                      </ul>

                      <h2>第６条（個人情報の訂正および削除）</h2>
                      <ul>
                        <li>ユーザーは，当社の保有する自己の個人情報が誤った情報である場合には，当社が定める手続きにより，当社に対して個人情報の訂正または削除を請求することができます。</li>
                        <li>当社は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の訂正または削除を行い，これをユーザーに通知します。</li>
                      </ul>

                      <h2>第７条（個人情報の利用停止等）</h2>
                      <p>当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行い，その結果に基づき，個人情報の利用停止等を行い，その旨本人に通知します。ただし，個人情報の利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，本人の権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じます。</p>

                      <h2>第８条（プライバシーポリシーの変更）</h2>
                      <ul>
                        <li>本ポリシーの内容は，ユーザーに通知することなく，変更することができるものとします。</li>
                        <li>当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。</li>
                      </ul>

                      <h2>第９条（お問い合わせ窓口）</h2>
                      <p>本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。</p>
                      <p>住所：<br />
                        社名：<br />
                        担当部署：<br />
                        Eメールアドレス：</p>

                      <p class="tR">以上</p>

                    </div>


                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                From the Firehose
              </Typography>
              <Divider />
              {/* {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
              ))} */}
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
              </Paper>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
              </Typography>
              {archives.map(archive => (
                <Typography key={archive}>{archive}</Typography>
              ))}
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {social.map(network => (
                <Typography key={network}>{network}</Typography>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
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

Privacy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Privacy);
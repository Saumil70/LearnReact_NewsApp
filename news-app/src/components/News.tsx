import NewsItem from "./NewsItem";

function News() {
  const newsData = {
    status: "ok",
    totalResults: 34,
    articles: [
      {
        source: {
          id: "cnn",
          name: "CNN",
        },
        author: "Kit Maher, Michael Rios, Mick Krever",
        title:
          "Trump issues ‘last warning’ to Hamas to release all hostages, as US holds direct talks with Hamas - CNN",
        description:
          "US President Donald Trump issued what he said was a “last warning” to Hamas to release all of the hostages in Gaza immediately – in a move that came just hours after the White House confirmed it was negotiating directly with the militant group.",
        url: "https://www.cnn.com/2025/03/05/middleeast/trump-hamas-gaza-hostages-negotiation-israel-intl-latam/index.html",
        urlToImage:
          "https://media.cnn.com/api/v1/images/stellar/prod/2025-03-05t024718z-970393539-rc2q6dapgzf5-rtrmadp-3-usa-trump-congress.JPG?c=16x9&q=w_800,c_fill",
        publishedAt: "2025-03-06T05:32:00Z",
        content:
          "US President Donald Trump issued what he said was a last warning to Hamas to release all of the hostages in Gaza immediately in a move that came just hours after the White House confirmed it was nego… [+5566 chars]",
      },
      {
        source: {
          id: null,
          name: "NPR",
        },
        author: "",
        title:
          "Trump prepares order dismantling the Education Department - NPR",
        description:
          "The draft executive action, obtained by NPR, acknowledges the department and its signature responsibilities were created by Congress, and cannot legally be altered without congressional approval.",
        url: "https://www.npr.org/2025/03/05/nx-s1-5316227/trump-order-dismantling-education-department",
        urlToImage:
          "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5102x2868+0+0/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F5b%2F1c%2Fce7d5820410f99672a200c641c38%2Fap25064521712056.jpg",
        publishedAt: "2025-03-06T04:41:12Z",
        content:
          'President Trump is expected to issue an executive action as early as Thursday calling on Education Secretary Linda McMahon to "take all necessary steps to facilitate the closure of the Department of … [+5693 chars]',
      },
      {
        source: {
          id: null,
          name: "NBCSports.com",
        },
        author: "Mike Florio",
        title:
          'Bill Belichick launches spring practice as coach of "33rd NFL team" - NBC Sports',
        description:
          "The University of North Carolina has launched its first spring football practice under coach Bill Belichick.",
        url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/bill-belichick-launches-spring-practice-as-coach-of-33rd-nfl-team",
        urlToImage:
          "https://nbcsports.brightspotcdn.com/dims4/default/4c79338/2147483647/strip/true/crop/4032x2268+0+395/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fa2%2F4f%2F63dcdcce427da5b918c8ab15d2b9%2Fimg-8190.jpeg",
        publishedAt: "2025-03-06T04:26:36Z",
        content:
          "The University of North Carolina has launched its first spring football practice under coach Bill Belichick. On Wednesday, Belichick met with reporters for the first time since he was introduced as t… [+2167 chars]",
      },
      {
        source: {
          id: null,
          name: "New York Post",
        },
        author: "Andrew Battifarano",
        title:
          "Chargers release five-time Pro Bowler Joey Bosa in NFL stunner - New York Post ",
        description:
          "The Chargers are letting go of one of their biggest stars.",
        url: "https://nypost.com/2025/03/05/sports/chargers-release-five-time-pro-bowler-joey-bosa-in-nfl-stunner/",
        urlToImage:
          "https://nypost.com/wp-content/uploads/sites/2/2025/03/newspress-collage-h0qh67a3b-1741232111681.jpg?quality=75&strip=all&1741214142&w=1024",
        publishedAt: "2025-03-06T04:25:00Z",
        content:
          "The Chargers are letting go of one of their biggest stars. \r\nLos Angeles released defensive end Joey Bosa on Wednesday night after he spent nine years with the team.\r\nBosa, 29, carried a cap hit of o… [+1474 chars]",
      },
      {
        source: {
          id: "the-washington-post",
          name: "The Washington Post",
        },
        author: "Tobi Raji",
        title:
          "From pulpit to protest: What the 40-day boycott of Target is about - The Washington Post",
        description:
          "Jamal Bryant and other Black faith leaders rally against the retailer’s DEI rollback with a Lent-length “Target Fast.”",
        url: "https://www.washingtonpost.com/business/2025/03/05/target-boycott-dei-40-day-fast/",
        urlToImage:
          "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L2JM2QZWTGOC6CQ4JCOHTQGKFY.jpg&w=1440",
        publishedAt: "2025-03-06T04:16:44Z",
        content:
          "Starting Wednesday, more than 100,000 people, many of them parishioners at Black churches, are pledging to abstain from shopping at Target, part of a 40-day nationwide boycott of the retail giant mor… [+1039 chars]",
      },
      {
        source: {
          id: null,
          name: "Deadline",
        },
        author: "Peter White",
        title: "‘The Recruit’ Canceled After 2 Seasons At Netflix - Deadline",
        description:
          "The Recruit is ending. Netflix has canceled the Noah Centineo-fronted drama series after two seasons. It comes less than six weeks after its second season premiered at the end of January. The news was revealed by Colton Dunn, who played Lester Kitchens, a col…",
        url: "http://deadline.com/2025/03/the-recruit-canceled-2-seasons-netflix-1236312295/",
        urlToImage:
          "https://deadline.com/wp-content/uploads/2025/01/The_Recruit_u_S2_E1_00_45_10_15R.jpg?w=1024",
        publishedAt: "2025-03-06T03:49:00Z",
        content:
          "The Recruitis ending.\r\nNetflix has canceled the Noah Centineo-fronted drama series after two seasons. It comes less than six weeks after its second season premiered at the end of January.\r\nThe news w… [+3711 chars]",
      },
      {
        source: {
          id: "cnn",
          name: "CNN",
        },
        author: "Joseph Ataman, Jessie Yeung",
        title:
          "France to consider protecting European allies with its nuclear arsenal, Macron says - CNN",
        description:
          "French President Emmanuel Macron said Wednesday that France will consider extending the protection of its nuclear arsenal to its allies and that Europe needed to be ready for the US not to be ‘by our side’ in the Russia-Ukraine war.",
        url: "https://www.cnn.com/2025/03/05/europe/macron-france-nuclear-arsenal-ukraine-intl-hnk/index.html",
        urlToImage:
          "https://media.cnn.com/api/v1/images/stellar/prod/2025-03-05t195617z-1483083052-rc277daasvly-rtrmadp-3-ukraine-crisis-france-macron.JPG?c=16x9&q=w_800,c_fill",
        publishedAt: "2025-03-06T03:00:00Z",
        content:
          "Francewill consider extending the protection of its nuclear arsenal to its allies, French President Emmanuel Macron said Wednesday, while warning that Europe needs to be ready for the United States t… [+2784 chars]",
      },
      {
        source: {
          id: "the-washington-post",
          name: "The Washington Post",
        },
        author: "Dylan Wells",
        title:
          "A look inside Trump’s speech, through two Congress members’ cameras - The Washington Post",
        description:
          "Two freshmen lawmakers capture a day in their lives and what President Donald Trump’s speech was like from their perspectives.",
        url: "https://www.washingtonpost.com/politics/2025/03/05/photos-trump-speech-congress-members-capitol-hill/",
        urlToImage:
          "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EJY3IMNPPUCZF7WZH75PWYZ244.JPG&w=1440",
        publishedAt: "2025-03-06T02:30:18Z",
        content:
          "Presidential addresses to Congress, like President Donald Trumps speech Tuesday night, are often the first major event for a new lawmaker on Capitol Hill. For freshman members, Trumps remarks to a jo… [+4499 chars]",
      },
      {
        source: {
          id: "axios",
          name: "Axios",
        },
        author: "Monica Eng, Alayna Alvarez, Steph Solis",
        title:
          "Republicans lead sanctuary city probe targeting Democratic mayors - Axios",
        description:
          "Republicans threaten to pull federal funding and, in Denver's case, pursue criminal charges.",
        url: "https://www.axios.com/2025/03/06/sanctuary-cities-mayors-congress-republicans",
        urlToImage:
          "https://images.axios.com/GECokRB0XuKRVIfZHXSdUHeZZo8=/0x0:1920x1080/1366x768/2025/03/06/1741219537292.jpg",
        publishedAt: "2025-03-06T01:39:38Z",
        content:
          'Republican legislators called for a Department of Justice investigation into Democratic mayors they accused Wednesday at a House committee hearing of leading sanctuary cities.\r\nThe big picture: A "sa… [+1749 chars]',
      },
      {
        source: {
          id: null,
          name: "Variety",
        },
        author: "Steven J. Horowitz",
        title:
          "Roy Ayers, ‘Everybody Loves the Sunshine’ Musician and ‘Coffy’ Composer, Dies at 84 - Variety",
        description:
          "Roy Ayers, the legendary jazz vibraphonist known for his hit 'Everybody Loves the Sunshine,' has died. He was 84.",
        url: "https://variety.com/2025/music/news/roy-ayers-dead-everybody-loves-the-sunshine-coffy-1236328801/",
        urlToImage:
          "https://variety.com/wp-content/uploads/2025/03/GettyImages-71399941.jpg?w=1000&h=563&crop=1",
        publishedAt: "2025-03-06T01:05:00Z",
        content:
          "Roy Ayers, the legendary jazz vibraphonist known for his hit “Everybody Loves the Sunshine” and sampled by countless artists, died at the age of 84.\r\nIn a statement shared with Variety, the Ayers fam… [+2969 chars]",
      },
      {
        source: {
          id: "associated-press",
          name: "Associated Press",
        },
        author: "Lisa Mascaro",
        title:
          "Elon Musk comes to Capitol Hill to meet with Republicans who discuss turning DOGE cuts into law - The Associated Press",
        description:
          "Elon Musk has visited Capitol Hill for private meetings with Republicans about his Department of Government Efficiency's budget slashing. GOP senators told the billionaire aide to President Donald Trump about budget rescissions, an obscure legislative tool th…",
        url: "https://apnews.com/article/trump-musk-doge-cuts-congress-5f2101c129924c9d416437aca05e1e11",
        urlToImage:
          "https://dims.apnews.com/dims4/default/5a330f7/2147483647/strip/true/crop/6763x3804+0+352/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa5%2F1c%2Fc15b47474f10616aedcbeb480aa1%2F90f02604f3af475d9fe8152b4b4059d1",
        publishedAt: "2025-03-06T00:26:00Z",
        content:
          "WASHINGTON (AP) Billionaire Elon Musk arrived on Capitol Hill Tuesday and learned about something new budget rescissions, an obscure legislative tool that could bring legal heft to his federal budget… [+6215 chars]",
      },
      {
        source: {
          id: "bloomberg",
          name: "Bloomberg",
        },
        author: "Joe Deaux, Stephanie Lai",
        title:
          "US to Name Morgan Stanley Banker to Lead Sovereign Wealth Fund - Bloomberg",
        description:
          "The Commerce Department is tapping former Morgan Stanley banker Michael Grimes to lead a planned sovereign wealth fund, part of President Donald Trump’s effort to give the US a stake in projects he considers critical to national security.",
        url: "https://www.bloomberg.com/news/articles/2025-03-06/us-to-name-morgan-stanley-banker-to-lead-sovereign-wealth-fund",
        urlToImage:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ipcoDZPgpgo0/v0/1200x800.jpg",
        publishedAt: "2025-03-06T00:04:00Z",
        content:
          "The Commerce Department is tapping former Morgan Stanley banker Michael Grimes to lead a planned sovereign wealth fund, part of President Donald Trumps effort to give the US a stake in projects he co… [+289 chars]",
      },
      {
        source: {
          id: null,
          name: "9to5Mac",
        },
        author: "Filipe Espósito",
        title:
          "Here’s a first look at the new M4 MacBook Air in sky blue - 9to5Mac",
        description:
          "Apple on Wednesday announced a new generation of the MacBook Air, which features the M4 chip inside. Although the new...",
        url: "https://9to5mac.com/2025/03/05/m4-macbook-air-sky-blue-photos/",
        urlToImage:
          "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2025/03/macbook-air-m4.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2025-03-05T23:52:00Z",
        content:
          "Apple on Wednesday announced a new generation of the MacBook Air, which features the M4 chip inside. Although the new MacBook Air is identical to its predecessor on the outside, Apple surprised every… [+1721 chars]",
      },
      {
        source: {
          id: "ars-technica",
          name: "Ars Technica",
        },
        author: "Benj Edwards",
        title:
          "Is “vibe coding” with AI gnarly or reckless? Maybe some of both. - Ars Technica",
        description:
          "Accepting AI-written code without understanding how it works is growing in popularity.",
        url: "https://arstechnica.com/ai/2025/03/is-vibe-coding-with-ai-gnarly-or-reckless-maybe-some-of-both/",
        urlToImage:
          "https://cdn.arstechnica.net/wp-content/uploads/2025/03/vibe_coding_1-1152x648.jpg",
        publishedAt: "2025-03-05T23:41:59Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Bloody Elbow",
        },
        author: null,
        title:
          "Israel Adesanya makes precise prediction ahead of Alex Pereira’s fight with Magomed Ankalaev at UFC 313 - Bloody Elbow",
        description:
          "Israel Adesanya believes Alex Pereira vs. Magomed Ankalaev won't go the distance.",
        url: "https://bloodyelbow.com/2025/03/05/israel-adesanya-makes-precise-prediction-ahead-of-alex-pereiras-fight-with-magomed-ankalaev-at-ufc-313/",
        urlToImage:
          "https://bloodyelbow.com/wp-content/uploads/1/2025/03/Paul-Canelo-1.png",
        publishedAt: "2025-03-05T23:25:15Z",
        content:
          "Alex Pereiras two-time UFC rival Israel Adesanya gave an in-depth breakdown on how he sees the UFC 313 main event playing out.\r\nUFC light heavyweight titleholder Alex Pereira faces what might be the … [+3087 chars]",
      },
      {
        source: {
          id: "abc-news",
          name: "ABC News",
        },
        author: "ABC News",
        title:
          "Abbey Gate terror suspect makes 1st court appearance following extradition to US - ABC News",
        description: null,
        url: "https://abcnews.go.com/US/abbey-gate-terror-suspect-makes-1st-court-appearance/story?id\\\\u003d119486289",
        urlToImage: null,
        publishedAt: "2025-03-05T23:17:37Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Myrgv.com",
        },
        author: "Steve Clark",
        title:
          "After two delays, Starship launch now eyed for Thursday - MyRGV",
        description:
          "After scrubbing the planned Starship launch on Monday, and announcing then rescinding a Wednesday launch SpaceX now says the earliest the flight of Starship S34 and Super Heavy booster B15 could take place is Thursday.",
        url: "https://myrgv.com/local-news/2025/03/05/after-two-delays-starship-launch-now-eyed-for-thursday/",
        urlToImage:
          "https://myrgv.com/wp-content/uploads/2025/03/AP25062041744314.jpg",
        publishedAt: "2025-03-05T22:15:00Z",
        content:
          "\u003Ctable\u003E\u003Ctr\u003E\u003Ctd\u003EOnly have a minute? Listen instead\r\n\u003C/td\u003E\u003C/tr\u003E\u003C/table\u003EAfter scrubbing the planned Starship launch on Monday, and announcing then rescinding a Wednesday launch SpaceX now says the earli… [+1170 chars]",
      },
      {
        source: {
          id: null,
          name: "PBS",
        },
        author: null,
        title:
          "Federal judge blocks Trump administration’s drastic funding cuts to medical research - PBS NewsHour",
        description:
          "Separate lawsuits filed by a group of 22 states plus organizations representing universities, hospitals and research institutions nationwide sued to stop the cuts, saying they would cause “irreparable harm.”",
        url: "https://www.pbs.org/newshour/politics/federal-judge-blocks-trump-administrations-drastic-funding-cuts-to-medical-research",
        urlToImage:
          "https://d3i6fh83elv35t.cloudfront.net/static/2025/03/2025-02-28T175746Z_1392307163_RC2S3DAWGDJE_RTRMADP_3_USA-TRUMP-WORKERS-1024x681.jpg",
        publishedAt: "2025-03-05T21:53:58Z",
        content:
          "A federal judge on Wednesday blocked the Trump administration from drastically cutting medical research funding that many scientists say will endanger patients and cost jobs.\r\nThe new National Instit… [+1754 chars]",
      },
    ],
  };
return (
  <>
    <h1 style={{ paddingLeft: "116px", paddingTop: "35px" }}>Breaking News</h1>
    <div className="container pt-4">
      <div className="row">
        {newsData.articles.map((element) => (
          <div className="col-3 mt-4" key={element.url}>
            <NewsItem title={element.title.slice(0,40)} description={element.description?.slice(0,80)} urlToImage={element.urlToImage} newsUrl={element.url} />
          </div>
        ))}
      </div>
    </div>
  </>
);

}

export default News;

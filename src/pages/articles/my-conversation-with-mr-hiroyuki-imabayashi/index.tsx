import React from "react";
import Layout from "../../../components/layout";

import img_sokoban_possible_prototype from "../../../assets/img/sokoban_possible_prototype.png";
import img_aldebaran_mz80k_cassette_tape from "../../../assets/img/aldebaran_mz80k_cassette_tape.png";
import img_aldebaran_ms80k from "../../../assets/img/aldebaran_ms80k.png";

const falconXSB = ' #####\n' +
    ' ### #####\n' +
    ' # $ #\n' +
    ' #..# # $# #\n' +
    ' #..# # #\n' +
    ' ###..$$$$ $ #\n' +
    '###....# $ #$###\n' +
    '# ...# # $ ##\n' +
    '# #... $#$ # $ #\n' +
    '# # # @ # # # #\n' +
    '## # #$ # $ #\n' +
    ' # # $ ##\n' +
    ' ## ## ###\n' +
    ' ############\n' +
    'SerialNumber:2284\n' +
    'UniqueName:perfect/screen.178\n' +
    'Author:森田 泰弘\n' +
    'AuthorE:Yasuhiro Morita\n' +
    'Limit:1650\n' +
    'Minimum:1066\n' +
    'Trace:\n' +
    '(uuruU)(LLulDrdL)(L)(rddrrdrU)(lldddrrU)(dlluuuluururrU)(dlluuuR\n' +
    ')(ldddrrdR)(luurD)(llluuururrdrrrrddlldLLLLLulDDDldddrruuLulDDDr\n' +
    'ddlluRdrU)(rrrurruruulUdrddldlldlluuuluuruuuururrdrrrrddlldLLLLL\n' +
    'ulDDDlddddrruuuLulDDDuurrdddldlluR)(uuuruururrdRlullldddrdddrrur\n' +
    'ruruulUllulluuururrdrrrrddlldLLLLLulDDDldR)(lddddrruuururU)(lddl\n' +
    'ddrruU)(luLLrddddlluuuUruLL)(rrdrrurUruLLLulDDDururrddldlLulD)(r\n' +
    'rrdrUUUruLLLulDDDldRRdrruulD)(rddrruUUUllulluuururrdrrrrddlldLLL\n' +
    'LLulDDDldRR)(dddL)(rrruuLruuuullldddrD)(D)(urruulDrdLulD)(uluuru\n' +
    'uuururrdL)(DDrdLLLulDDDldRRdrruulD)(lluuruuuuRurDDDrdLLLulDDDldR\n' +
    'R)(luururrdddLLL)(rrruurruruUdrruulLLLulDDDrdLLrddldlluurUU)(drr\n' +
    'rrrurrdLLLLLLrddldlluurU)(rrrrddrrUdlluururrdLLLLLLLrruuulllddDr\n' +
    'rrddldlluluR)(ddrrrddrrddrruLdlUUUUUUdrruulLLLLLrrddldlluuUU)(dr\n' +
    'rrrrddddddrrrruruuL)(uLLLdlUUdrruulLLLLLrrddldlluuU)(dldldRRR)(l\n' +
    'uuurrrddddddldlllluluuluuRRdrU)(llldd)(rddrdrruR)(ldlluR)(uUUruL\n' +
    'L)(rdddddrruLdlUUUU)(ruuurrrddddddLL)(dlluuuuluRdrU)(ldddddrrrur\n' +
    'uuuLLLrrrdddlldlluuuU)(luR)(ddddlluuluuR)(lddrddrrdrruUUddrruuul\n' +
    'LLL)(dddRdrUUUddrruuulL)(ddLdlUUU)(ddrruurrdLulDDlddrruLLdlUUU)(\n' +
    'drrurrdrrdrruR)(uUruLLLdlUUdrruulLLLLL)(rrrrrrddrrdrddLdlUUUruLL\n' +
    'LdlUUdrruulLLLL)\n' +
    'Trace-End:\n' +
    'Status:Solved\n' +
    'Note:\n' +
    '参考手数: 725\n' +
    'Note-End:';

export default function Index() {
    return (
        <>
            <Layout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 rounded bg-white">
                            <h3 className="title mb-0">
                                My conversation with Mr Hiroyuki Imabayashi
                            </h3>
                            <p className="text-right">
                                <sub>Published: May 22, 2022</sub>
                            </p>
                            <p>
                                In October 2020, I started an online conversation about the
                                Sokoban games with Mr Hiroyuki Imabayashi, the creator of
                                Sokoban, through LinkedIn Messaging.
                            </p>
                            <p>
                                I thought the content of those messages would be interesting for
                                all Sokoban fans.
                            </p>
                            <p>
                                So, with Hiroyuki Imabayashi’s permission, I am happy to publish
                                the most interesting parts of those messages.
                            </p>
                            <p>Important note: Carlos Montiers Aguilera’s messages start with a &gt;</p>
                            <p>
                                <i>
                                    &gt; I want to please ask some questions, first about the
                                    first Sokoban games.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; And get more info please about that prototype version,
                                    before the game was being commercial.
                                </i>
                            </p>
                            <p>
                                I made a Sokoban as a hobby in 1981, and to my friends was
                                played. And I enjoyed seeing them struggle. A prototype was I
                                made in BASIC with PC-8001, it was my first computer. Maybe it's
                                spring 1981.
                            </p>
                            <p>
                                <i>
                                    &gt; What was the first every Sokoban level? Maybe is not the
                                    same level 1 of the game released for PC-8801?
                                </i>
                            </p>
                            <p>
                                The first stage I made was level 1 of the game released for
                                PC-8801. There is no prototype anymore, but programmatically it
                                has the same structure as the first Sokoban.
                            </p>
                            <p>
                                <i>
                                    &gt; Here: https://sokoboxes.com/info I show a picture with
                                    some of the games that I acquired in the past.
                                </i>
                            </p>
                            <p>
                                I saw the collection of Sokoban. Thank you for loving Sokoban.
                                In the photos of the collection, it seems that you don't have
                                Sokoban 2, is a cubic package. The cassette tape is diagonally
                                in, it was the length of Root 2 and was my favourite package one
                                of. You can see it on this site. https://sokoban.jp/history.html
                            </p>
                            <p>
                                <i>
                                    &gt; Now, that I see the image, I think is a really, really
                                    nice package. I loved it.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; I have the original cassette tape without the package.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; Also about the package, I want to ask please about the
                                    first pushable object.
                                </i>
                            </p>
                            <p>
                                <i>&gt; I always wanted to know more about this.</i>
                            </p>
                            <p>
                                <i>
                                    &gt; When I translate (with ocr tool) some paragraphs from the
                                    book THE &#20489;&#24235;&#30058;, is used the word:
                                    &quot;luggage&quot;.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; Thus, I think that originally the game was created to
                                    push &quot;luggage&quot;.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; I imagine luggage of correspondence because all have the
                                    same size and are held by a string.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; But I understand that in next releases the pushable
                                    object becomes a wooden box or crate.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; I think this can be interpreted as a kind of warehouse.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; Thus, please I want to ask what is the kind of warehouse
                                    you originally conceived the game?
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; And if the first pushable object was luggage, you imagine
                                    the specific kind of content that it has inside?
                                </i>
                            </p>
                            <p>
                                That's an interesting question. Japanese people seem to have the
                                image of luggage itself without worrying about the contents.
                                Therefore, I have never thought about the contents. I made the
                                impression that it is heavy and can only be moved one by one and
                                cannot be pulled. However, when I think about it again, the
                                contents of the luggage tied with the first string may be coffee
                                beans. Then, the wooden box after that feels like hardware.
                            </p>
                            <p>
                                <i>
                                    &gt; I think this information is really important and
                                    interesting.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; Now I can imagine what kind of luggage I push in the
                                    first games and the kind of box in the recent games.
                                </i>
                            </p>
                            <p>
                                <i>&gt; I read this on the internet (the date is wrong)</i>
                            </p>
                            <p>
                                <i>
                                    &gt; &quot;was created in 1980 by Hiroyuki Imabayashi as part
                                    of a Japanese computer game competition, which he won.&quot;
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; What about the supposed &quot;computer game
                                    competition&quot;?
                                </i>
                            </p>
                            <p>
                                No computer game competition. At that time, it was still early
                                days, so there was no contest. I made it as just a hobby.
                            </p>
                            <p>
                                <i>
                                    &gt; The prototype used the blue background as the later
                                    release for PC-8001 mk2? Or the prototype also use black
                                    background?
                                </i>
                            </p>
                            <p>
                                <i>&gt; What about the colours used or the character aspect?</i>
                            </p>
                            <p>
                                It was first type of PC-8001, it wasn't not mk2. I don't think I
                                used the blue background. The screen was hard to see and early
                                computers could only use 8 colors, so the background was
                                probably black. The character had a hard time because he
                                couldn't use natural colors.
                            </p>
                            <p>
                                <i>
                                    &gt; Please, what about the &quot;breakable walls&quot; of
                                    levels 11 to 20 of the first games,
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; where the player needs to found hidden paths breaking
                                    some walls pushing from a certain side.
                                </i>
                            </p>
                            <p>
                                <i>&gt; Do those levels have some history?</i>
                            </p>
                            <p>
                                At that time, I didn't understand the depth of the Sokoban. I
                                didn't expect the stage to be any harder. So I created a
                                mechanism called &quot;breakable walls&quot;. However, it became
                                a hot topic with pros and cons. Some people got angry that it
                                wasn't a puzzle. But that gimmick is only once. Because I
                                thought that noticing that trick was also a puzzle. Since then,
                                there is no such gimmick.
                            </p>
                            <p>
                                <i>&gt; I think the feature was fun also.</i>
                            </p>
                            <p>
                                <i>
                                    &gt; Also in 2009 spend a lot of hours trying to solve the
                                    level 20.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; Also, I think was good because even after solve, you
                                    still can have the question:
                                </i>
                            </p>
                            <p>
                                <i>&gt; &quot;maybe there are more hidden paths?&quot;.</i>
                            </p>
                            <p>
                                <i>
                                    &gt; My first think of it was it was a &quot;bug&quot; because
                                    of memory like level 256 of Pacman.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; With the time I understand that was part of the game.
                                </i>
                            </p>
                            <p>
                                <i>&gt; I get a good feeling with that feature.</i>
                            </p>
                            <p>
                                <i>
                                    &gt; About the game published in magazine
                                    PC&#12510;&#12460;&#12472;&#12531; in 1983, with 10 levels,
                                </i>
                            </p>
                            <p>
                                <i>&gt; a game between the Sokoban 1 and Sokoban 2.</i>
                            </p>
                            <p>
                                <i>&gt; Please, some history about that game?</i>
                            </p>
                            <p>
                                <i>
                                    &gt; Those 10 levels already designed was designed from
                                    scratch or maybe they were left out of Sokoban 1?
                                </i>
                            </p>
                            <p>
                                The system of Sokoban is simple. You can also make it in Basic.
                                The important point of Sokoban is the fun of the stage.
                                Therefore, when making a stage, we make it by trial and error.
                                As a result of that trial and error, many stages remain
                                unadopted. The stage was released at the request of the
                                magazine.
                            </p>
                            <p>
                                <i>
                                    &gt; If that is correct, maybe you thought in publish 30
                                    levels instead of 20 in the first Sokoban game?
                                </i>
                            </p>
                            <p>
                                At first, I thought there was a limit to the stage level. It
                                didn't make an editor at first, so I made a stage out of graph
                                paper. It was a very difficult task. At that time, I couldn't
                                make many stages I also didn't think that &quot;Sokoban&quot;
                                would be a series.
                            </p>
                            <p>
                                <i>
                                    &gt; From the Sokoban games written in BASIC, my favourite is
                                    the version for PC-6001 32k.
                                </i>
                            </p>
                            <p>
                                <i>&gt; Do you have a favourite?</i>
                            </p>
                            <p>
                                In the early version I like is Sokoban 2. As I wrote earlier,
                                the packaging has become more interesting. This version is
                                impressive because it was the first time I added a Sokoban stage
                                editor.
                            </p>
                            <p>
                                <i>
                                    &gt; About the character of the first games, he has some name?
                                </i>
                            </p>
                            <p>
                                His name is Rabi. It's named after my company name, Thinking
                                Rabbit. It's also the pen name when I make the stage. However,
                                when the Sokoban was transplanted at the request of another
                                manufacturer, various names were given. It was the hope of the
                                manufacturer.
                            </p>
                            <p>
                                <i>
                                    &gt; I only know one: for the Tandy TR-80 is called Wally.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; I wasn't sure if to ask this, but the character could be
                                    interpreted as an avatar of you?
                                </i>
                            </p>
                            <p>Maybe it's my avatar.</p>
                            <p>
                                <i>&gt; In https://sokoban.jp/greeting.html</i>
                            </p>
                            <p>
                                <i>
                                    &gt; says translated: &quot;Author around 1960&quot; and
                                    appears the image of the character.
                                </i>
                            </p>
                            <p>
                                <i>&gt; About the character in plasticine form, I love it.</i>
                            </p>
                            <p>
                                <i>
                                    &gt; When I play Kyuukuoku No Sokoban, I see many wonderful
                                    plasticine animations.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; I thought that those animations reflected some nice
                                    memories.
                                </i>
                            </p>
                            <p>
                                <i>&gt; I cannot forget the animation where appears a ghost.</i>
                            </p>
                            <p>
                                Thank you very much. I wrote all the stories of &quot;Ultimate
                                Sokoban&quot;. I really like each episode. Actually, I wrote 8
                                episodes to follow the second part, but the second part did not
                                come true.
                            </p>
                            <p>
                                <i>&gt; There exist a &quot;Sokoban 3&quot;?</i>
                            </p>
                            <p>
                                <i>&gt; Is mentioned in the book.</i>
                            </p>
                            <p>
                                <i>&gt; Some information about this game?</i>
                            </p>
                            <p>
                                Sokoban 3&quot; was released under the name &quot;Sokoban
                                Perfect&quot;.
                            </p>
                            <p>
                                <i>
                                    &gt; Thus &quot;Sokoban 3&quot; maybe was a rare release
                                    distributed in Takeru machines,
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; but also &quot;Sokoban 3&quot; was the codename for
                                    Sokoban Perfect?
                                </i>
                            </p>
                            <p>
                                The number of stages has been increased to 306 and the package
                                has been enlarged, giving the name a new impression. I agree.
                                However, it was not very interesting to make &quot;Sokoban
                                3&quot; the product version after &quot;Sokoban 2&quot;, so I
                                remember changing the title name.
                            </p>
                            <p>
                                <i>
                                    &gt; Inside the box of Sokoban Perfect in the manual appears a
                                    form to draw a puzzle of 34x20. This also was used sometimes
                                    to get a level contribution?
                                </i>
                            </p>
                            <p>
                                The exact form of the Sokoban manual is 32x20. This is the
                                largest Sokoban size ever. There are some of the biggest stages
                                so far, but I don't make much these days because it's difficult
                                to make and solve.
                            </p>
                            <p>
                                ...It's a long interview. I am not good at English, so I am
                                having a hard time. The rest will be sent a email at a later
                                date. Wait for a while Please.
                            </p>
                            <p>
                                <i>&gt; Why you name your company with the rabbit name?</i>
                            </p>
                            <p>
                                At that time, I was drawing a rabbit as a mascot character. It's
                                a prank picture drawn on the edge of a notebook. However, I was
                                laughed at by a friend of foreigner. At that time, I was working
                                like a sokoban in game production day and night.
                            </p>
                            <p>
                                <i>&gt; Thus, the logo was nice to a foreign friend.</i>
                            </p>
                            <p>
                                <i>
                                    &gt; And after it, the name of the company was to be
                                    compatible with the logo?
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; I always thought about the word &quot;Thinking&quot;,
                                    maybe your first focus was only puzzle games?
                                </i>
                            </p>
                            <p>
                                The logo was roughed by me and finished by a friend's designer.
                                We couldn't make advanced games because we weren't very good at
                                programming at first. If you make it a thinking type like a
                                puzzle or an adventure game, you can compete by ideas, I
                                thought.
                            </p>
                            <p>
                                <i>
                                    &gt; Other questions: In the first release for the U.S:
                                    Soko-ban for DOS, seems was released some packages with an
                                    unsolvable level (42), but after it was fixed quickly.
                                </i>
                            </p>
                            <p>
                                <i>&gt; That is my impression of collecting that game.</i>
                            </p>
                            <p>
                                <i>
                                    &gt; I know almost three versions: one with a bug in that
                                    level, and two with the level solvable, the last version
                                    includes a samurai image at the intro (I have a video in my
                                    youtube playlist with it).
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; Do you know more info about this important release
                                    because it made the game known to the world, or what happened
                                    with that level 42?
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; I see on the internet two packages of the game in black
                                    and other in white. I suspect that the versions with black
                                    package has the issue, but is my theory only.
                                </i>
                            </p>
                            <p>
                                I think the DOS version released in the United States was the
                                release of Spectrum HoloByte. I granted them the rights. They
                                also localized it. So I didn't know that there was an unsolvable
                                aspect. So I don't know why level 42. Did they enter the data by
                                hand? I don't know anything else.
                            </p>
                            <p>
                                <i>
                                    &gt; I research it and I found two files named TAB4142, with
                                    these dates:
                                </i>
                            </p>
                            <p>
                                <i>&gt; 1987-aug-26</i>
                            </p>
                            <p>
                                <i>&gt; 1987-dec-22</i>
                            </p>
                            <p>
                                <i>&gt; The first one has the level 42 unsolvable.</i>
                            </p>
                            <p>Is that so.</p>
                            <p>Is it a porting mistake bug?</p>
                            <p>At that time, all the companies were still immature.</p>
                            <p>
                                <i>&gt; An important question that I'm missing is:</i>
                            </p>
                            <p>
                                <i>
                                    &gt; What situation or thing inspired or brought you the first
                                    idea of the game?
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; I mean if maybe the prototype from 1981 looks like this?
                                    (I created it with the Tiny Editor).
                                </i>
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_possible_prototype}
                                    alt="Possible Sokoban prototype"
                                />
                            </p>
                            <p>That's right. However, I don't remember the character code.</p>
                            <p>
                                <code className="note">
                                    [Carlos’s note] Several months later, I realized that the screenshot I showed Mr.
                                    Hiroyuki was taken from the Tiny Editor in edit mode, where the draw cursor,
                                    displayed as 'X', was positioned at the player’s position. However, in play mode,
                                    the actual player character is displayed as 'O'. I didn’t notice the difference at
                                    the time, but it seems the character was 'O', since Mr. Hiroyuki remembered
                                    everything except the 'X'.
                                </code>
                            </p>
                            <p>
                                <i>
                                    &gt; Do you think is possible to get the source code of the
                                    prototype?
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; Thus, will be possible to get the exact image you see in
                                    1981?
                                </i>
                            </p>
                            <p>
                                Unfortunately, that is impossible. There is nothing left, and
                                even if there is data 39 years ago, there is no environment that
                                can be reproduced already.
                            </p>
                            <p>
                                <i>
                                    &gt; Also, I want to ask please the month of creation of the
                                    Sokoban.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; I know that was released in December of 1982, but I do
                                    not know the month of creation of 1981.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; Also the greeting page mentions &quot;cherry
                                    blossom&quot;.
                                </i>
                            </p>
                            <p>
                                <i>&gt; I read that in 2020 in Hyogo occurs in late March.</i>
                            </p>
                            <p>
                                <i>
                                    &gt; Sorry if I ask too about this, but I just want to imagine
                                    the exact month.
                                </i>
                            </p>
                            <p>
                                The cherry blossoms in Hyogo are from late March to mid-April. I
                                think 1981 was as usual.
                            </p>
                            <p>
                                <i>
                                    &gt; Question: What about other game similar to Sokoban called
                                    T.N.T Bomb Bomb?
                                </i>
                            </p>
                            <p>
                                <i>&gt; Do you also invent it? This game is pretty cool.</i>
                            </p>
                            <p>
                                &quot;T.N.T Bomb Bomb&quot; was posted by a fan of Sokoban. I
                                bought that idea and made it into a product. It might have
                                become more widespread if we created a construction system like
                                Sokoban and published it.
                            </p>
                            <p>
                                <i>
                                    &gt; Yes, it has a few levels, only 20, but are really good.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; Also, I see some graphic adventure: Casablanca and
                                    Meurtre d'un Clown.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; I tried to play in a emulator, but because the language I
                                    cannot enjoy it, but looks like nice beautiful works.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; The graphic adventure genre is not dead. Still in 2020
                                    many games of that genre are created.
                                </i>
                            </p>
                            <p>
                                Did you see my AVG? Thank you. All my scenarios are Japanese
                                expressions and I think it is difficult to translate them into
                                English. I don't think there's anything you can't do, but it
                                won't convey the atmosphere. I wish I had written in English
                                version as well, but it would be difficult if I wasn't a native
                                English speaker.
                            </p>
                            <p>
                                <i>
                                    &gt; In the past, with some friends, we tried to document the levels from the
                                    software
                                    screens.
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; But it never will have the full information like comments or author info.
                                </i>
                            </p>
                            <p>
                                Originally, Xsokoban format data is the data format used by Sokoban fans on UNIX. Our DB
                                also extends it and uses it. Falcon adopts the widely used X Sokoban format and extends
                                it. It is currently undergoing further local extensions and may be revised in the
                                future. Like this.
                            </p>
                            <pre>{falconXSB}</pre>
                            <p>
                                <code className="note">
                                    [Carlos’s note] The messaging system replaced consecutive spaces with a single space
                                    in the map data.
                                </code>
                            </p>
                            <p>
                                <i>
                                    &gt; About &quot;THE &#20489;&#24235;&#30058; &quot; book, I
                                    not asked: what was your motivations to write the book?
                                </i>
                            </p>
                            <p>
                                &quot;THE Sokoban&quot; was created at the suggestion of a
                                prominent person who first recognized &quot;Sokoban&quot; in
                                Japan. Mr. Junji Tanaka is a person who contributed to the
                                development of Japanese detective novels as an editor and is
                                also a puzzle lover. Junji
                                Tanaka&#65288;&#30000;&#20013;&#28516;&#21496;&#65289;, the
                                editor at the time, Masami
                                Ishii&#65288;&#30707;&#20117;&#27491;&#24051;&#65289;, and I. We
                                wrote at a hotel in Tokyo kanda like trapped.
                            </p>
                            <p>
                                <i>&gt; What about Thinking Rabbit?</i>
                            </p>
                            <p>
                                <i>
                                    &gt; I read on the internet it not exist. If that is the case,
                                    in which year it occurs?
                                </i>
                            </p>
                            <p>
                                The THINKING RABBIT company remains legal, but is inactive.
                                Currently only the brand name remains.
                            </p>
                            <p>
                                <i>
                                    &gt; Can I ask what year it stops the activity and becomes
                                    present only as a trademark?
                                </i>
                            </p>
                            <p>Thinking Rabbit quit its job around 2000.</p>
                            <p>
                                <i>
                                    &gt; What is the relation between Thinking Rabbit and Falcon
                                    regarding Sokoban?
                                </i>
                            </p>
                            <p>
                                My rights are managed by my friend's company 'Falcon'.
                            </p>
                            <p>
                                <i>&gt; About licensing:</i>
                            </p>
                            <p>
                                <i>
                                    &gt; I only know only one recent game licensed outside Japan:
                                    Sokoban DS from 2008, but it that not have Japanese levels.
                                </i>
                            </p>
                            <p>
                                There was a problem with the license for this product. SokobanDS
                                is not licensed from I.
                            </p>
                            <p>
                                <i>&gt; I read on a magazine from 1988:</i>
                            </p>
                            <p>
                                <i>
                                    &gt; &quot;Sokoban had sold more than 400,000 copies in
                                    Japan&quot;
                                </i>
                            </p>
                            <p>
                                <i>&gt; And currently, it appears in some tv apps.</i>
                            </p>
                            <p>
                                <i>
                                    &gt; Thus I want to ask: how much famous is Sokoban in Japan?
                                </i>
                            </p>
                            <p>
                                There is about 80% recognition in Japan. Except for young
                                children, the word &quot;Sokoban&quot; is always understood.
                                Even in conversations between talents appearing on TV programs,
                                it is understood that it is a game just by saying
                                &quot;Sokoban&quot;. In general, when you have a lot of luggage
                                and are in trouble, many people jokingly describe it as
                                &quot;Sokoban&quot;.
                            </p>
                            <p>
                                <i>
                                    &gt; What situation or thing inspired or brought you the first
                                    idea of the game?
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; As an example, I imagine that maybe you were looking a
                                    dozer pushing object and that gives you the idea?.
                                </i>
                            </p>
                            <p>
                                <i>&gt; Or maybe other videogame inspired to you?.</i>
                            </p>
                            <p>
                                Sokoban was inspired other video game. It's a Hudson game. It
                                was an action game in which luggage was moved as a wall to
                                prevent radiation. I made that movement into a puzzle.
                            </p>
                            <p>
                                <i>&gt; I'm still curious about the Hudson action game.</i>
                            </p>
                            <p>
                                <i>&gt; I tried to found the name without success.</i>
                            </p>
                            <p>
                                I found the following video about Hudson's &quot;ALDEBARAN&quot;.
                                https://www.youtube.com/watch?v=t6f4C0yFHHg
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_aldebaran_ms80k}
                                    alt="Aldebaran"
                                />
                            </p>
                            <p>(Added screenshot image to the article for reference)</p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid max-width-320px`}
                                    src={img_aldebaran_mz80k_cassette_tape}
                                    alt="Aldebaran 1 (MZ-80K) cassette tape"
                                />
                            </p>
                            <p>(Added picture of the cassette tape for reference)</p>
                            <p>
                                <i>
                                    &gt; What caused to you to begin to write the first prototype
                                    of the game in the PC-8001 console?
                                </i>
                            </p>
                            <p>
                                The first thing I bought was the PC-8001. But it's not the first
                                time I've made a game. The first game I made with the MZ-80
                                (SHARP) that my friend brought to my house. It was a rocket
                                landing game.
                            </p>
                            <p>
                                <i>
                                    &gt; Please, is possible that I summarize in a document some
                                    parts of our conversation that will be interesting to other
                                    persons, things like Sokoban was not part of a game
                                    competition or details about the prototype?
                                </i>
                            </p>
                            <p>
                                <i>
                                    &gt; And previously to show that summary and if you agree can
                                    I publish it on my Sokoboxes site?
                                </i>
                            </p>
                            <p>
                                That's fine, but there are some parts of my memory that aren't
                                accurate. We cannot guarantee the accuracy of the information.
                                It's okay to write it as a just episode.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    );
}

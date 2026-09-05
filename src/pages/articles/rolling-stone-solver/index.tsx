import React from "react";
import Layout from "../../../components/layout";

const cmd = `T 420
O
V 3.1
<
S 71`;

const screen91 = `###############
#   ##   ##   #
#   #  $ $    #
##$ $ ## ######
#  $  $ $     #
# $ $ ## ##   #
#  $ #.....#  #
##   #.#...#$ #
# $ $ ..#..   #
#  $ #... .#$##
# $ $#..*..# #
#  $  ## ##  #
##$ $  @$   ##
#        ####
##########
Author: Darse Billings <darse@cs.ualberta.ca>
Comment:
Andreasさんの "Rolling Stone"のア〖カイブに #91として箭峡されて
いる烫です。笆涟疽拆された烫(附 sokoban-ml #27)とは操湿の疤弥が
办つだけ般います((5,4) -> (6,4))。

[-][*][-][-] [sokoban-ML - No.00707]
[+][*][-][-] [sokoban-ML - No.00140]
Comment-End:
`;

export default function Index() {
    return (
        <>
            <Layout>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 rounded bg-white">
                                <h3 className="title mb-0">
                                    Rolling Stone solver
                                </h3>
                                <p className="text-right">
                                    <sub>Published: May 15, 2026</sub>
                                </p>
                                <p>
                                    A pioneering automated Sokoban solver, created in 1997, whose development stopped
                                    around 2000. It used a standard set of 90 problems from Xsokoban. The solver is of
                                    historical interest. Newer automated solvers have surpassed it, but it's a great
                                    resource for learning. A modern successor may be <a
                                    className="text-primary"
                                    href="https://sokolution.infinityfreeapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer">Sokolution</a>, due to its use of classical algorithms.
                                    You can find a version of Rolling Stone for Windows <a
                                    className="text-primary"
                                    href="https://github.com/carlos-montiers/rolling-stone"
                                    target="_blank"
                                    rel="noopener noreferrer">here</a>.
                                </p>
                                <p>
                                    I have been intrigued by the fact that a paper from 2001 reported that Rolling Stone
                                    solved 59 problems, a number I suspected was wrong, with the real number being 58,
                                    as I mentioned <a
                                    className="text-primary"
                                    href="/articles/my-conversation-with-mr-andreas-junghanns/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >here</a>. However, worth mentioning is that there was not a single version of the
                                    program. The papers mention versions from R0 to R10.
                                </p>
                                <p>
                                    Considering that the documented achievement used the last version featuring the
                                    Rapid Random Restart enhancement (R10), whose source code is currently lost, I
                                    wanted to determine whether it is possible to solve at least 58 puzzles using the
                                    last public version of Rolling Stone, which seems to correspond to version R9.
                                </p>
                                <p>
                                    Using standard search, 53 problems are solved:
                                </p>
                                <p>
                                    #1–12, 17, 19, 21, 23, 25, 26, 33, 34, 36, 38, 40,
                                    43, 45, 49, 51, 53–65, 67, 68, 70, 72,
                                    73, 76, 78, 79, 80, 81, 82, 83, 84.
                                </p>
                                <p>
                                    Solving #23 took nearly 9 hours. ⌛
                                </p>
                                <p>
                                    Here is a trick to solve more problems: searching with different overestimation
                                    values instead of the default value (0).
                                </p>
                                <p>
                                    Here is a custom overestimation value mentioned in Pushing the Limits: New
                                    Developments in Single-Agent Search (1999), page 129:
                                </p>
                                <p>
                                    #77: Overestimation 2.2.<br/>For this problem also works: 2.3–2.5, 2.7–5.0
                                </p>
                                <p>
                                    This increases the list of solved problems to 54. It is the same list that appears
                                    in that paper on page 127.
                                </p>
                                <p>
                                    It is possible to create a script, that searches using a distinct overestimation
                                    value ranging from 1.0 to 5.0, with a time limit of 7 minutes per value (420
                                    seconds) to find the values that yield solutions.
                                </p>
                                <p>
                                    Using that approach, I found these:
                                </p>
                                <p>
                                    #28: Overestimation 2.2.
                                    <br/>Also works: 2.6, 2.8, 3.0–3.1, 3.3–3.4, 3.6, 3.8–5.0.
                                </p>
                                <p>
                                    #30: Overestimation 1.0.
                                    <br/>Also works: 1.1–2.9, 3.2–3.3, 3.5–3.8, 4.0, 4.2–4.3, 4.5–4.6, 5.0.
                                </p>
                                <p>
                                    #71: Overestimation 3.1.
                                    <br/>Also works: 3.3, 3.4, 3.6–4.8, 5.0.
                                </p>
                                <p>
                                    #75: Overestimation 1.8.
                                    <br/>Also works: 2.5, 2.7, 2.8, 3.1, 4.0.
                                </p>
                                <p>
                                    This increases the list of solved problems to 58.
                                </p>
                                <p>
                                    Testing overestimation values with problems that have already been solved could
                                    reduce the search time, though it yields less optimized solutions regarding pushes.
                                    For example:
                                    <br/>Problem #23: 8+ hours to around 2 minutes (1.5 overestimation)
                                    <br/>Problem #26: 20 minutes to 1 second (5.0 overestimation)
                                    <br/>Problem #36: 40 minutes to 25 seconds (5.0 overestimation)
                                </p>
                                <p>
                                    The most impressive problem to solve was #71. Using standard search, the solution is
                                    not found, even after waiting more than two days. Using an overestimation of 3.1,
                                    the solution is found in 32 seconds.
                                </p>
                                <p>
                                    Commands inside Rolling Stone to solve problem #71 using an overestimation of 3.1:
                                    <br/>
                                    <pre>{cmd}</pre>
                                </p>

                                <p>
                                    Table of solutions found
                                </p>
                                <div className="table-responsive col-lg-6 col-md-8 col-sm-12">
                                    <table className="table table-sm table-bordered table-striped">
                                        <thead className="thead-light">
                                        <tr>
                                            <th>Level</th>
                                            <th>Pushes</th>
                                            <th>Moves</th>
                                            <th>Overestim.</th>
                                            <th>Seconds</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>97</td>
                                            <td>263</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>131</td>
                                            <td>540</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>134</td>
                                            <td>377</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>355</td>
                                            <td>927</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>143</td>
                                            <td>422</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>110</td>
                                            <td>346</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>88</td>
                                            <td>375</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>230</td>
                                            <td>782</td>
                                            <td></td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>243</td>
                                            <td>646</td>
                                            <td></td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>512</td>
                                            <td>1583</td>
                                            <td></td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td>243</td>
                                            <td>971</td>
                                            <td></td>
                                            <td>30</td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>224</td>
                                            <td>935</td>
                                            <td></td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>17</td>
                                            <td>213</td>
                                            <td>552</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>19</td>
                                            <td>302</td>
                                            <td>1367</td>
                                            <td></td>
                                            <td>63</td>
                                        </tr>
                                        <tr>
                                            <td>21</td>
                                            <td>149</td>
                                            <td>644</td>
                                            <td></td>
                                            <td>2</td>
                                        </tr>

                                        <tr>
                                            <td rowSpan={2}>23</td>
                                            <td>448</td>
                                            <td>1215</td>
                                            <td></td>
                                            <td>32013</td>
                                        </tr>
                                        <tr>
                                            <td>452</td>
                                            <td>1205</td>
                                            <td>1.5</td>
                                            <td>96</td>
                                        </tr>

                                        <tr>
                                            <td>25</td>
                                            <td>388</td>
                                            <td>1548</td>
                                            <td></td>
                                            <td>53</td>
                                        </tr>

                                        <tr>
                                            <td rowSpan={2}>26</td>
                                            <td>195</td>
                                            <td>617</td>
                                            <td></td>
                                            <td>1198</td>
                                        </tr>
                                        <tr>
                                            <td>221</td>
                                            <td>665</td>
                                            <td>5.0</td>
                                            <td>1</td>
                                        </tr>

                                        <tr>
                                            <td>28</td>
                                            <td>284</td>
                                            <td>991</td>
                                            <td>2.2</td>
                                            <td>106</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>475</td>
                                            <td>1435</td>
                                            <td>1.0</td>
                                            <td>178</td>
                                        </tr>
                                        <tr>
                                            <td>33</td>
                                            <td>174</td>
                                            <td>733</td>
                                            <td></td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>34</td>
                                            <td>170</td>
                                            <td>726</td>
                                            <td></td>
                                            <td>13</td>
                                        </tr>

                                        <tr>
                                            <td rowSpan={2}>36</td>
                                            <td>511</td>
                                            <td>1909</td>
                                            <td></td>
                                            <td>2478</td>
                                        </tr>
                                        <tr>
                                            <td>543</td>
                                            <td>2085</td>
                                            <td>5.0</td>
                                            <td>24</td>
                                        </tr>

                                        <tr>
                                            <td>38</td>
                                            <td>89</td>
                                            <td>396</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>40</td>
                                            <td>324</td>
                                            <td>1340</td>
                                            <td></td>
                                            <td>146</td>
                                        </tr>
                                        <tr>
                                            <td>43</td>
                                            <td>146</td>
                                            <td>610</td>
                                            <td></td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>45</td>
                                            <td>300</td>
                                            <td>865</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>49</td>
                                            <td>128</td>
                                            <td>683</td>
                                            <td></td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>51</td>
                                            <td>118</td>
                                            <td>413</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>53</td>
                                            <td>186</td>
                                            <td>721</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>54</td>
                                            <td>187</td>
                                            <td>897</td>
                                            <td></td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>55</td>
                                            <td>120</td>
                                            <td>418</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>56</td>
                                            <td>207</td>
                                            <td>801</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>57</td>
                                            <td>225</td>
                                            <td>720</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>58</td>
                                            <td>199</td>
                                            <td>830</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>59</td>
                                            <td>230</td>
                                            <td>997</td>
                                            <td></td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>60</td>
                                            <td>152</td>
                                            <td>523</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>61</td>
                                            <td>263</td>
                                            <td>923</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>62</td>
                                            <td>245</td>
                                            <td>725</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>63</td>
                                            <td>431</td>
                                            <td>1627</td>
                                            <td></td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>64</td>
                                            <td>137</td>
                                            <td>716</td>
                                            <td></td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>65</td>
                                            <td>211</td>
                                            <td>721</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>67</td>
                                            <td>401</td>
                                            <td>1239</td>
                                            <td></td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>68</td>
                                            <td>341</td>
                                            <td>1304</td>
                                            <td></td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>70</td>
                                            <td>333</td>
                                            <td>1127</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>71</td>
                                            <td>326</td>
                                            <td>1621</td>
                                            <td>3.1</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>72</td>
                                            <td>296</td>
                                            <td>943</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>73</td>
                                            <td>441</td>
                                            <td>1452</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>75</td>
                                            <td>317</td>
                                            <td>2127</td>
                                            <td>1.8</td>
                                            <td>160</td>
                                        </tr>
                                        <tr>
                                            <td>325</td>
                                            <td>2145</td>
                                            <td>2.5</td>
                                            <td>48</td>
                                        </tr>
                                        <tr>
                                            <td>76</td>
                                            <td>206</td>
                                            <td>1498</td>
                                            <td></td>
                                            <td>35</td>
                                        </tr>
                                        <tr>
                                            <td>77</td>
                                            <td>380</td>
                                            <td>2809</td>
                                            <td>2.2</td>
                                            <td>52</td>
                                        </tr>
                                        <tr>
                                            <td>78</td>
                                            <td>136</td>
                                            <td>492</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>79</td>
                                            <td>174</td>
                                            <td>562</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>80</td>
                                            <td>231</td>
                                            <td>637</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>81</td>
                                            <td>173</td>
                                            <td>815</td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>82</td>
                                            <td>143</td>
                                            <td>406</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>83</td>
                                            <td>194</td>
                                            <td>507</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>84</td>
                                            <td>157</td>
                                            <td>509</td>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    Curiosity: In the program files, there is a file named screen.91. It only contains
                                    the puzzle. The puzzle with author information can be found in the
                                    sokoban-ml-scratch set (Japanese Mailing List). I include it here for reference.
                                </p>
                                <pre>{screen91}</pre>
                                <p>
                                    Regarding the script I utilized, <a
                                    className="text-primary"
                                    href="../../resources/overestim.py"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >here</a> it is.</p>
                                <p>
                                    —Carlos
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
